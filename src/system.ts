import type { Employee } from './employee.js';
import { Positions } from './enums/positions.enum.js';

export class System {
  private _employees: Employee[];
  protected baseSalary: number;

  constructor(baseSalary: number = 1000) {
    this._employees = [];
    this.baseSalary = baseSalary;
  }

  hireEmployee(employee: Employee) {
    this._employees.push(employee);
  }

  fireEmployee(employee: Employee) {
    this._employees = this._employees.filter((e) => e !== employee);
  }

  calculateSalaries(position: Positions) {
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

  getEmployee(employee: Employee) {
    const employeeSalary = this.calculateSalaries(employee.position);
    employee.balance = employeeSalary;
  }

  generateReport() {
    let report = this._employees.map((employee) => {
      return {
        name: employee.name,
        position: employee.position,
        salary: this.calculateSalaries(employee.position),
      };
    });

    return JSON.stringify(report);
  }

  get employees() {
    return this._employees;
  }
}
