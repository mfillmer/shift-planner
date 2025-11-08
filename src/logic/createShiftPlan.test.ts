import { describe, it, expect } from "vitest";
import { createShiftPlan } from "./createShiftPlan";
import type { Shift, Worker } from "./types";

describe("createShiftPlan", () => {
  it("should not assign a shift if no workers are available", () => {
    const shifts: Shift[] = [
      {
        start: new Date("2024-01-01T09:00:00"),
        duration: 8,
        recoveryTime: 12,
        worker: null,
      },
    ];
    const workers: Worker[] = [];

    // Assuming createShiftPlan returns the array of shifts
    const updatedShifts = createShiftPlan(shifts, workers);

    expect(updatedShifts[0].worker).toBeNull();
  });

  it("should assign a shift to an available worker", () => {
    const shifts: Shift[] = [
      {
        start: new Date("2024-01-01T09:00:00"),
        duration: 8,
        recoveryTime: 12,
        worker: null,
      },
    ];
    const worker: Worker = {
      name: "John Doe",
      hoursPerWeek: 40,
      hourBalance: 0,
      unavailable: [],
      requested: [],
    };

    const updatedShifts = createShiftPlan(shifts, [worker]);

    expect(updatedShifts[0].worker).toEqual(worker);
  });

  it("should not assign a shift to an unavailable worker", () => {
    const shiftStart = new Date("2024-01-01T09:00:00");
    const shiftDuration = 8;
    const shiftEnd = new Date(
      shiftStart.getTime() + shiftDuration * 60 * 60 * 1000
    );

    const shifts: Shift[] = [
      {
        start: shiftStart,
        duration: shiftDuration,
        recoveryTime: 12,
        worker: null,
      },
    ];

    const worker: Worker = {
      name: "Jane Doe",
      hoursPerWeek: 40,
      hourBalance: 0,
      unavailable: [{ start: shiftStart, end: shiftEnd }],
      requested: [],
    };

    const updatedShifts = createShiftPlan(shifts, [worker]);

    expect(updatedShifts[0].worker).toBeNull();
  });

  it("should return an empty array when given no shifts", () => {
    const workers: Worker[] = [
      {
        name: "John Doe",
        hoursPerWeek: 40,
        hourBalance: 0,
        unavailable: [],
        requested: [],
      },
    ];
    expect(createShiftPlan([], workers)).toEqual([]);
  });
});
