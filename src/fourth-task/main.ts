interface Payment {
  value: number;

  cashPayment(): void;
  onlinePayment(): void;
  chequePayment(): void;
}

class ChequePayment implements Payment {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  chequePayment(): void {
    console.log(`Payment of ${this.value} made by cheque.`);
  }

  cashPayment(): void {
    throw new Error('Cash payment not supported for cheque payments.');
  }

  onlinePayment(): void {
    throw new Error('Online payment not supported for cheque payments.');
  }
}

class CashPayment implements Payment {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  cashPayment(): void {
    console.log(`Payment of ${this.value} made by cash.`);
  }

  onlinePayment(): void {
    throw new Error('Online payment not supported for cash payments.');
  }

  chequePayment(): void {
    throw new Error('Cheque payment not supported for cash payments.');
  }
}

class OnlinePayment implements Payment {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  onlinePayment(): void {
    console.log(`Payment of ${this.value} made online.`);
  }

  cashPayment(): void {
    throw new Error('Cash payment not supported for online payments.');
  }

  chequePayment(): void {
    throw new Error('Cheque payment not supported for online payments.');
  }
}

const chequePayment = new ChequePayment(100);
chequePayment.chequePayment();

const cashPayment = new CashPayment(200);
cashPayment.cashPayment();

const onlinePayment = new OnlinePayment(300);
onlinePayment.onlinePayment();
