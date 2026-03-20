import type { Employee } from './employee.js';

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

  payEmployee(employee: Employee) {
    const employeeSalary = this.calculateSalary(employee.position);
    employee.balance = employeeSalary;
  }

  generateReport() {
    let report = this._employees.map((employee) => {
      return {
        name: employee.name,
        position: employee.position,
        salary: this.calculateSalary(employee.position),
      };
    });

    return JSON.stringify(report);
  }

  get employees() {
    return this._employees;
  }
}
