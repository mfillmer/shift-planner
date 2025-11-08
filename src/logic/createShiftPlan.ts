import { getShiftEnd } from "./getShiftEnd";
import { isWorkerAvailable } from "./isWorkerAvailable";
import { sortShifts } from "./sortShifts";
import { sortWorkers } from "./sortWorkers";
import type { OffTime, Shift, Worker } from "./types";

export interface ShiftPlan {
  shifts: Shift[];
  workers: Worker[];
}

export const createShiftPlan = (
  shifts: Shift[] = [],
  workers: Worker[] = []
): ShiftPlan => {
  const workersCopy = JSON.parse(JSON.stringify(workers));
  const sortedShifts = sortShifts(shifts);
  const updatedShifts = sortedShifts
    .map((shift) => {
      for (const worker of sortWorkers(workersCopy)) {
        if (isWorkerAvailable(shift, worker, true)) {
          const updatedShift = assignWorkerToShift(shift, worker);
          return updatedShift;
        }
      }
      return shift;
    })
    .map((shift) => {
      if (shift.worker !== null) {
        return shift;
      }
      for (const worker of sortWorkers(workersCopy)) {
        if (isWorkerAvailable(shift, worker, false)) {
          const updatedShift = assignWorkerToShift(shift, worker);
          return updatedShift;
        }
      }
      return shift;
    });
  return { shifts: updatedShifts, workers: workersCopy };
};

const assignWorkerToShift = (shift: Shift, worker: Worker) => {
  const recoveryOffTime: OffTime = {
    from: shift.start,
    to: getShiftEnd(shift),
  };
  const updatedShift = { ...shift, worker };

  worker.hourBalance += shift.duration;
  worker.unavailable.push(recoveryOffTime);

  return updatedShift;
};
