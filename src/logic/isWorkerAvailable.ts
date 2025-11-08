import { getShiftEnd } from "./getShiftEnd";
import { checkIfTimerangesAreDisjointed } from "./checkIfTimerangesAreDisjointed";
import type { Shift, Worker, OffTime } from "./types";

export const isWorkerAvailable = (
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
      offTime.from,
      offTime.to
    );

  if (offTimes.length > 0) {
    return offTimes.every((offTime) => hasNoOverlapWithShift(offTime));
  } else {
    return true;
  }
};
