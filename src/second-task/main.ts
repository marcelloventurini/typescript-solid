const BUSINESS_DAYS_IN_MONTH = 22;

interface Contract {
  role: string;
  compensation(): number;
}

class FullTimeContract implements Contract {
  private FULL_TIME_HOURLY_RATE = 24;
  private FULL_TIME_DAILY_HOURS = 8;

  role = 'Full Time';
  compensation(): number {
    return this.FULL_TIME_HOURLY_RATE * this.FULL_TIME_DAILY_HOURS;
  }
}

class InternContract implements Contract {
  private INTERN_HOURLY_RATE = 14;
  private INTERN_DAILY_HOURS = 4;

  role = 'Intern';
  compensation(): number {
    return this.INTERN_HOURLY_RATE * this.INTERN_DAILY_HOURS;
  }
}

class Payroll {
  static calculateMonthlySalary(contract: Contract): number {
    return contract.compensation() * BUSINESS_DAYS_IN_MONTH;
  }
}

const fullTimeEmployee = new FullTimeContract();
const internEmployee = new InternContract();

console.log(
  `Sou ${fullTimeEmployee.role} e meu salário é R$ ${Payroll.calculateMonthlySalary(fullTimeEmployee)}`,
);

console.log(
  `Sou ${internEmployee.role} e meu salário é R$ ${Payroll.calculateMonthlySalary(internEmployee)}`,
);
