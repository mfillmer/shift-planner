export interface Shift {
  start: Date;
  duration: number;
  recoveryTime: number;
  worker: null | Worker;
}

export interface Worker {
  name: string;
  hoursPerWeek: number; // Workers have a weekly hour quota.
  hourBalance: number; // Workers can start a time period with an overtime or negative hour balance.
  unavailable: OffTime[]; // Times when a worker is unavailable.
  requested: OffTime[]; // Workers can request times off
}

export interface OffTime {
  start: Date;
  end: Date;
}
