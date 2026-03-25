import { Positions } from "./enums/positions.enum.js";

export class Employee {
  public readonly name: string;
  private _position: Positions;
  private _balance: number;

  constructor(name: string, position: Positions) {
    this.name = name;
    this._position = position;
    this._balance = 0;
  }

  get position() {
    return this._position;
  }

  set position(position: Positions) {
    this._position = position;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount: number) {
    this._balance += amount;
  }
}
