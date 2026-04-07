interface Payment {
  value: number;

  pay(): void;
}

class ChequePayment implements Payment {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  pay(): void {
    console.log(`Payment of ${this.value} made by cheque.`);
  }
}

class CashPayment implements Payment {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  pay(): void {
    console.log(`Payment of ${this.value} made by cash.`);
  }
}

class PixPayment implements Payment {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  pay(): void {
    console.log(`Payment of ${this.value} made by pix.`);
  }
}

const chequePayment = new ChequePayment(100);
chequePayment.pay();

const cashPayment = new CashPayment(200);
cashPayment.pay();

const pixPayment = new PixPayment(300);
pixPayment.pay();
