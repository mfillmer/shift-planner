import { Shift, Worker } from "../../src/logic/types";

export const workers: Worker[] = [];

/**
 * A list of example shifts for one week. Shifts can overlap and there are 24 hour shifts, 8 hour shifts and 2 hour shifts (appointments)
 *
 * * This dataset is feasable with the dataset in ./workers.ts
 */
export const exampleShifts: Shift[] = [
  {
    start: new Date("2024-01-01T13:00:00"),
    duration: 24,
    recoveryTime: 24,
    worker: null,
  },
  {
    start: new Date("2024-01-01T13:00:00"),
    duration: 8,
    recoveryTime: 12,
    worker: null,
  },
  {
    start: new Date("2024-01-02T11:00:00"),
    duration: 2,
    recoveryTime: 0,
    worker: null,
  },
  {
    start: new Date("2024-01-02T13:00:00"),
    duration: 24,
    recoveryTime: 24,
    worker: null,
  },
  {
    start: new Date("2024-01-02T13:00:00"),
    duration: 8,
    recoveryTime: 8,
    worker: null,
  },
  {
    start: new Date("2024-01-03T13:00:00"),
    duration: 24,
    recoveryTime: 24,
    worker: null,
  },
  {
    start: new Date("2024-01-03T13:00:00"),
    duration: 8,
    recoveryTime: 8,
    worker: null,
  },
  {
    start: new Date("2024-01-04T13:00:00"),
    duration: 24,
    recoveryTime: 24,
    worker: null,
  },
  {
    start: new Date("2024-01-04T13:00:00"),
    duration: 8,
    recoveryTime: 8,
    worker: null,
  },
  {
    start: new Date("2024-01-05T13:00:00"),
    duration: 24,
    recoveryTime: 24,
    worker: null,
  },
  {
    start: new Date("2024-01-05T13:00:00"),
    duration: 8,
    recoveryTime: 8,
    worker: null,
  },
  {
    start: new Date("2024-01-06T13:00:00"),
    duration: 24,
    recoveryTime: 24,
    worker: null,
  },
  {
    start: new Date("2024-01-06T13:00:00"),
    duration: 8,
    recoveryTime: 8,
    worker: null,
  },
  {
    start: new Date("2024-01-07T13:00:00"),
    duration: 24,
    recoveryTime: 24,
    worker: null,
  },
  {
    start: new Date("2024-01-07T13:00:00"),
    duration: 8,
    recoveryTime: 8,
    worker: null,
  },
  {
    start: new Date("2024-01-08T13:00:00"),
    duration: 24,
    recoveryTime: 24,
    worker: null,
  },
  {
    start: new Date("2024-01-08T13:00:00"),
    duration: 8,
    recoveryTime: 8,
    worker: null,
  },
  {
    start: new Date("2024-01-09T13:00:00"),
    duration: 24,
    recoveryTime: 24,
    worker: null,
  },
  {
    start: new Date("2024-01-09T13:00:00"),
    duration: 8,
    recoveryTime: 8,
    worker: null,
  },
];
