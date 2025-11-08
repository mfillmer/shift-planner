import { describe, it, expect } from "vitest";
import { createShiftPlan } from "../../src/logic/createShiftPlan";
import type { Shift, Worker } from "../../src/logic/types";
import { exampleShifts } from "../data/shifts";
import { exampleWorkers } from "../data/workers";

describe("createShiftPlan", () => {
  it("should not assign a shift if no workers are available", () => {
    const shifts: Shift[] = exampleShifts.slice(0, 1);
    const workers: Worker[] = [];

    const updatedShifts = createShiftPlan(shifts, workers);

    expect(updatedShifts[0].worker).toBeNull();
  });

  it("should assign a shift to an available worker", () => {
    const shifts: Shift[] = exampleShifts.slice(3, 4);
    const workers: Worker[] = exampleWorkers.slice(1, 2);

    const updatedShifts = createShiftPlan(shifts, workers);

    expect(updatedShifts[0].worker).toEqual(workers[0]);
  });

  it("should not assign a shift to an unavailable worker", () => {
    const shifts: Shift[] = exampleShifts.slice(0, 1);
    const workers: Worker[] = exampleWorkers.slice(0, 1);

    const updatedShifts = createShiftPlan(shifts, workers);

    expect(updatedShifts[0].worker).toBeNull();
  });

  it("should return an empty array when given no shifts", () => {
    expect(createShiftPlan([], exampleWorkers)).toEqual([]);
  });
});
