import { Employee } from "./employee.js";
import { Positions } from "./enums/positions.enum.js";
import { System } from "./system.js";

const system = new System();

const employee1 = new Employee("Alice", Positions.Intern);
const employee2 = new Employee("Bob", Positions.Junior);
const employee3 = new Employee("Charlie", Positions.MidLevel);

system.hireEmployee(employee1);
system.hireEmployee(employee2);
system.hireEmployee(employee3);

console.log(system.generateReport());
