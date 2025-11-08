import type { Shift, Worker } from "./types";

export const createShiftPlan = (
  shifts: Shift[],
  workers: Worker[]
): Shift[] => {
  console.log({ shifts, workers });
  throw Error("not implemented yet");
};
