import { CalculateSalary } from './calculate-salary.js';
import { Employee } from './employee.js';
import { Positions } from './enums/positions.enum.js';
import { GenerateReport } from './generate-report.js';
import { Payment } from './payment.js';
import { Staff } from './staff.js';

const staff = new Staff();
const calculateSalary = new CalculateSalary();
const generateReport = new GenerateReport(staff.employees, calculateSalary);
const payment = new Payment(calculateSalary);

const employee1 = new Employee('Alice', Positions.Intern);
const employee2 = new Employee('Bob', Positions.Junior);
const employee3 = new Employee('Charlie', Positions.MidLevel);

staff.hireEmployee(employee1);
staff.hireEmployee(employee2);
staff.hireEmployee(employee3);

console.log(generateReport.generate());
console.log(employee1);

payment.pay(employee1);
console.log(employee1);
