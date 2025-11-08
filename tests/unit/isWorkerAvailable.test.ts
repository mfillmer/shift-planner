import { describe, it, expect } from "vitest";
import { isWorkerAvailable } from "../../src/logic/isWorkerAvailable";
import type { Shift, Worker } from "../../src/logic/types";
import { exampleWorkers } from "../data/workers";
import { exampleShifts } from "../data/shifts";

const baseWorker = exampleWorkers[0];
const baseShift = exampleShifts[0];

describe("isWorkerAvailable", () => {
  it("should return true if worker has no off-times", () => {
    const worker: Worker = { ...baseWorker, unavailable: [], requested: [] };
    expect(isWorkerAvailable(baseShift, worker)).toBe(true);
  });

  it("should return true if worker's off-time does not overlap with the shift", () => {
    const worker: Worker = {
      ...baseWorker,
      unavailable: [
        {
          from: new Date("2024-01-01T11:00:00"),
          to: new Date("2024-01-01T13:00:00"),
        },
      ],
    };
    expect(isWorkerAvailable(baseShift, worker)).toBe(true);
  });

  it("should return false if shift is completely within an unavailable period", () => {
    const worker: Worker = {
      ...baseWorker,
      unavailable: [
        {
          from: new Date("2024-01-01T07:00:00"),
          to: new Date("2024-01-01T17:00:00"),
        },
      ],
    };
    expect(isWorkerAvailable(baseShift, worker)).toBe(false);
  });

  it("should return false if shift starts before and ends within an unavailable period", () => {
    const worker: Worker = {
      ...baseWorker,
      unavailable: [
        {
          from: new Date("2024-01-01T10:00:00"),
          to: new Date("2024-01-01T18:00:00"),
        },
      ],
    };
    expect(isWorkerAvailable(baseShift, worker)).toBe(false);
  });

  it("should return false if shift starts within and ends after an unavailable period", () => {
    const worker: Worker = {
      ...baseWorker,
      unavailable: [
        {
          from: new Date("2024-01-01T06:00:00"),
          to: new Date("2024-01-01T15:00:00"),
        },
      ],
    };
    expect(isWorkerAvailable(baseShift, worker)).toBe(false);
  });

  it("should return false if shift engulfs an unavailable period", () => {
    const worker: Worker = {
      ...baseWorker,
      unavailable: [
        {
          from: new Date("2024-01-01T10:00:00"),
          to: new Date("2024-01-01T14:00:00"),
        },
      ],
    };
    expect(isWorkerAvailable(baseShift, worker)).toBe(false);
  });

  it("should return false if worker has a requested off-time that overlaps", () => {
    const worker: Worker = {
      ...baseWorker,
      requested: [
        {
          from: new Date("2024-01-01T10:00:00"),
          to: new Date("2024-01-01T12:00:00"),
        },
      ],
    };
    expect(isWorkerAvailable(baseShift, worker, true)).toBe(false);
  });

  it("should return true if requested off-time overlaps but is not respected", () => {
    const worker: Worker = {
      ...baseWorker,
      unavailable: [],
      requested: [
        {
          from: new Date("2024-01-01T10:00:00"),
          to: new Date("2024-01-01T12:00:00"),
        },
      ],
    };
    expect(isWorkerAvailable(baseShift, worker, false)).toBe(true);
  });

  it("should return false if unavailable time overlaps, even if requested off-time is not respected", () => {
    const worker: Worker = {
      ...baseWorker,
      unavailable: [
        {
          from: new Date("2024-01-01T09:00:00"),
          to: new Date("2024-01-01T14:00:00"),
        },
      ],
      requested: [
        {
          from: new Date("2024-01-01T14:00:00"),
          to: new Date("2024-01-01T15:00:00"),
        },
      ],
    };
    expect(isWorkerAvailable(baseShift, worker, false)).toBe(false);
  });
});
