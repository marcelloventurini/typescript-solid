import { CalculateSalary } from './calculate-salary.js';
import { Employee } from './employee.js';

export class Payment {
  constructor(private calculateSalary: CalculateSalary) {}

  pay(employee: Employee) {
    const employeeSalary = this.calculateSalary.calculate(employee.position);
    employee.balance = employeeSalary;
  }
}
