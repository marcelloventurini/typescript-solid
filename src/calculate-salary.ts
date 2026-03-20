import { Positions } from './enums/positions.enum.js';

export class CalculateSalary {
  protected baseSalary: number;

  constructor(baseSalary: number = 1000) {
    this.baseSalary = baseSalary;
  }

  calculateSalary(position: Positions) {
    if (position === Positions.Intern) {
      return this.baseSalary * 1.2;
    } else if (position === Positions.Junior) {
      return this.baseSalary * 3;
    } else if (position === Positions.MidLevel) {
      return this.baseSalary * 5;
    } else if (position === Positions.Senior) {
      return this.baseSalary * 7;
    } else {
      return 0;
    }
  }
}
