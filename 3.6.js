"use strict";
{
    //geeter setter
    class Bank {
        constructor(id, name, balance) {
            this.name = name;
            this.id = id;
            this._balance = balance;
        }
        set addDeposite(amont) {
            this._balance = this._balance + amont;
        }
        get getDeposite() {
            return this._balance;
        }
    }
    const bank = new Bank(220, "taz", 2000);
    bank.addDeposite = 50;
    const myBalance = bank.getDeposite;
    console.log(myBalance);
}
