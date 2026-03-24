import { CalculateSalary } from './calculate-salary.js';
import { Employee } from './employee.js';

export class GenerateReport {
  constructor(
    private employees: Employee[],
    private calculateSalary: CalculateSalary,
  ) {}

  generate() {
    let report = this.employees.map((employee) => {
      return {
        name: employee.name,
        position: employee.position,
        salary: this.calculateSalary.calculate(employee.position),
      };
    });

    return JSON.stringify(report);
  }
}
