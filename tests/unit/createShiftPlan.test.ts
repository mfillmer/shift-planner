import { describe, it, expect } from "vitest";
import { createShiftPlan, ShiftPlan } from "../../src/logic/createShiftPlan";
import type { Shift, Worker } from "../../src/logic/types";
import { exampleShifts } from "../data/shifts";
import { exampleWorkers } from "../data/workers";

describe("createShiftPlan", () => {
  it("should not modify input data", () => {
    const shiftsSnapshot = JSON.stringify(exampleShifts);
    const workersSnapshot = JSON.stringify(exampleWorkers);

    createShiftPlan(exampleShifts, exampleWorkers);

    expect(JSON.stringify(exampleShifts)).toEqual(shiftsSnapshot);
    expect(JSON.stringify(exampleWorkers)).toEqual(workersSnapshot);
  });

  it("should not assign a shift if no workers are available", () => {
    const shifts: Shift[] = exampleShifts.slice(0, 1);
    const workers: Worker[] = [];

    const { shifts: assignedShifts } = createShiftPlan(shifts, workers);

    expect(assignedShifts[0].worker).toBeNull();
  });

  it("should assign a shift to an available worker", () => {
    const shifts: Shift[] = exampleShifts.slice(3, 4);
    const workers: Worker[] = exampleWorkers.slice(1, 2);

    const { shifts: assignedShifts } = createShiftPlan(shifts, workers);

    expect(assignedShifts[0].worker?.name).toEqual(workers[0].name);
  });

  it("should update the hourBalance of an assigned worker by shift duration", () => {
    const shifts: Shift[] = exampleShifts.slice(3, 4);
    const workers: Worker[] = exampleWorkers.slice(1, 2);

    const { shifts: assignedShifts } = createShiftPlan(shifts, workers);

    expect(assignedShifts[0].worker?.hourBalance).toEqual(
      workers[0].hourBalance + assignedShifts[0].duration
    );
  });

  it("should not assign a shift to an unavailable worker", () => {
    const shifts: Shift[] = exampleShifts.slice(0, 1);
    const workers: Worker[] = exampleWorkers.slice(0, 1);

    const { shifts: assignedShifts } = createShiftPlan(shifts, workers);

    expect(assignedShifts[0].worker).toBeNull();
  });

  it("should not assign workers without shifts", () => {
    const { shifts } = createShiftPlan([], exampleWorkers);
    expect(shifts).toEqual([]);
  });

  it("should update the workers hoursBalance", () => {
    const shiftPlan = createShiftPlan(exampleShifts, exampleWorkers);

    const unassignedShifts = shiftPlan.shifts.filter(
      (shift) => shift.worker === null
    );
    console.log({ unassignedShifts });

    expect(unassignedShifts).toHaveLength(0);

    for (const worker of shiftPlan.workers) {
      const originalWorker = exampleWorkers.find((w) => w.name === worker.name);
      expect(worker.hourBalance).not.equal(originalWorker?.hourBalance);
    }
  });
});
