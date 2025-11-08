import type { OffTime, Shift, Worker } from "./types";

export const createShiftPlan = (
  shifts: Shift[] = [],
  workers: Worker[] = []
): Shift[] => {
  const updatedShifts = shifts.map((shift) => {
    for (const worker of workers) {
      if (isWorkerAvailable(shift, worker, true)) {
        return { ...shift, worker };
      }
    }
    return shift;
  });

  return updatedShifts;
};

const isWorkerAvailable = (
  shift: Shift,
  worker: Worker,
  respectRequestedOffTime = true
) => {
  const offTimes = respectRequestedOffTime
    ? [...worker.unavailable, ...worker.requested]
    : worker.unavailable;

  const hasNoOverlapWithShift = (offTime: OffTime) =>
    checkIfTimerangesAreDisjointed(
      shift.start,
      getShiftEnd(shift),
      offTime.start,
      offTime.end
    );

  if (offTimes.length > 0) {
    return offTimes.every((offTime) => hasNoOverlapWithShift(offTime));
  } else {
    return true;
  }
};

const checkIfTimerangesAreDisjointed = (
  start1: Date,
  end1: Date,
  start2: Date,
  end2: Date
): boolean => {
  return start1 >= end2 || start2 >= end1;
};

const getShiftEnd = (shift: Shift): Date =>
  new Date(shift.start.getTime() + shift.duration * 60 * 60 * 1000);
