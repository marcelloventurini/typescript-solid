const fullTimeHourlyRate = 24;
const fullTimeDailyHours = 8;

const internHourlyRate = 14;
const internDailyHours = 4;

const businessDaysInMonth = 22;

class FullTimeContract {
  role = 'Full Time';
}

class InternContract {
  role = 'Intern';
}

class Payroll {
  static calculateMonthlySalary(
    contract: FullTimeContract | InternContract,
  ): number {
    if (contract instanceof FullTimeContract) {
      return fullTimeHourlyRate * fullTimeDailyHours * businessDaysInMonth;
    } else if (contract instanceof InternContract) {
      return internHourlyRate * internDailyHours * businessDaysInMonth;
    }
    return 0;
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
