import { Worker } from "../../src/logic/types";

/**
 * A list of example workers resembling a team of five people. Three fulltime and two part time workers with 20 and eight hours a week. A few offtimes are saved for the time of one week. Some workers have non zero hourBalances.
 */
export const exampleWorkers: Worker[] = [
  {
    name: "Alice",
    hoursPerWeek: 40,
    hourBalance: 0,
    unavailable: [
      {
        from: new Date("2024-01-01T08:00:00"),
        to: new Date("2024-01-01T17:00:00"),
      },
    ],
    requested: [],
  },
  {
    name: "Bob",
    hoursPerWeek: 40,
    hourBalance: 10,
    unavailable: [],
    requested: [],
  },
  {
    name: "Charlie",
    hoursPerWeek: 40,
    hourBalance: -5,
    unavailable: [
      {
        from: new Date("2024-01-03T12:00:00"),
        to: new Date("2024-01-03T18:00:00"),
      },
    ],
    requested: [],
  },
  {
    name: "Diana",
    hoursPerWeek: 20,
    hourBalance: 0,
    unavailable: [],
    requested: [],
  },
  {
    name: "Eve",
    hoursPerWeek: 8,
    hourBalance: 2,
    unavailable: [
      {
        from: new Date("2024-01-05T09:00:00"),
        to: new Date("2024-01-05T13:00:00"),
      },
    ],
    requested: [],
  },
];
