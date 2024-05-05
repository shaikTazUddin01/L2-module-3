"use strict";
{
    class Bank {
        constructor(id, name, balance) {
            this.name = name;
            this.id = id;
            this._balance = balance;
        }
        addDeposite(amont) {
            return this._balance = this._balance + amont;
        }
    }
    const bank = new Bank(220, "taz", 2000);
    const balance = bank.addDeposite(20);
    console.log(balance);
}
