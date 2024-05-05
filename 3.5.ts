{
    class Bank {
        readonly id: number;
        name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.name = name;
            this.id = id;
            this._balance = balance
        }

        addDeposite(amont: number) {
            return this._balance = this._balance + amont;
        }

    }

    const bank = new Bank(220, "taz", 2000);
   const balance= bank.addDeposite(20);
    console.log(balance);
}