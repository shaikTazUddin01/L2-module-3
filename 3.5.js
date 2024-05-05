"use strict";
{
    class Bank {
        constructor(id, name, balance) {
            this.name = name;
            this.id = id;
            this.balance = balance;
        }
        addDeposite(amont) {
            return this.balance = this.balance + amont;
        }
    }
    const bank = new Bank(220, "taz", 2000);
    const balance = bank.addDeposite(20);
    console.log(balance);
}
