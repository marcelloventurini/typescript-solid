abstract class Member {
  name: string;
  workload: number;
  salary: number;

  constructor(name: string, workload: number, salary: number) {
    this.name = name;
    this.workload = workload;
    this.salary = salary;
  }

  abstract showWorkload(): void;
  abstract calculateNetSalary(): number;
  abstract calculateProfitSharing(profit: number): number;
}

class Employee extends Member {
  constructor(name: string, workload: number, salary: number) {
    super(name, workload, salary);
  }

  showWorkload(): void {
    console.log(
      `${this.name} has a workload of ${this.workload} hours per week.`,
    );
  }

  calculateNetSalary(): number {
    const TAX_RATE = 0.2;
    const discount = this.salary * TAX_RATE;
    return this.salary - discount;
  }

  calculateProfitSharing(profit: number): number {
    return profit * this.salary;
  }
}

class Volunteer extends Member {
  advisor: Member;

  constructor(name: string, workload: number, advisor: Member) {
    super(name, workload, null as unknown as number);
    this.advisor = advisor;
  }

  writeReport(): void {
    console.log(`${this.name} is writing a report to ${this.advisor.name}.`);
  }

  showWorkload(): void {
    console.log(
      `${this.name} has a workload of ${this.workload} hours per week as a volunteer.`,
    );
  }

  calculateNetSalary(): number {
    return 0;
  }

  calculateProfitSharing(profit: number): number {
    return 0;
  }
}

const employee = new Employee('Alice', 40, 5000);
const volunteer = new Volunteer('Bob', 20, employee);

console.log('Nome:', employee.name);
console.log('Salário bruto:', employee.salary);
console.log('Salário líquido:', employee.calculateNetSalary());
console.log('Participação nos lucros:', employee.calculateProfitSharing(2.5));

console.log('Nome:', volunteer.name);
console.log('Salário bruto:', volunteer.salary);
console.log('Salário líquido:', volunteer.calculateNetSalary());
console.log('Participação nos lucros:', volunteer.calculateProfitSharing(2.5));
