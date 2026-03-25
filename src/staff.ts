import { Employee } from './employee.js';

export class Staff {
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

  get employees() {
    return this._employees;
  }
}
