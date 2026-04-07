interface Member {
  name: string;
  workload: number;

   showWorkload(): void;
}

interface Employee extends Member {
  salary: number;
 
  calculateNetSalary(): number;
  calculateProfitSharing(profit: number): number;
}

interface Volunteer extends Member {
  advisor: Member;

  writeReport(): void;
}

class Employee implements Member {
  constructor(name: string, workload: number, salary: number) {
    this.name = name;
    this.workload = workload;
    this.salary = salary;
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

class Volunteer implements Member {
  constructor(name: string, workload: number, advisor: Member) {
    this.name = name;
    this.workload = workload;
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
}

const employee = new Employee('Alice', 40, 5000);
const volunteer = new Volunteer('Bob', 20, employee);

console.log('Nome:', employee.name);
console.log('Salário bruto:', employee.salary);
console.log('Salário líquido:', employee.calculateNetSalary());
console.log('Participação nos lucros:', employee.calculateProfitSharing(2.5));

console.log('Nome:', volunteer.name);
volunteer.showWorkload();
volunteer.writeReport();
