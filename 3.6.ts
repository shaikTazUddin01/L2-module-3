{
    //geeter setter
    class Bank {
        readonly id: number;
        name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.name = name;
            this.id = id;
            this._balance = balance
        }

        set addDeposite(amont: number) {
            this._balance = this._balance + amont;
        }
        get getDeposite() {
            return this._balance
        }

    }

    const bank = new Bank(220, "taz", 2000);
    bank.addDeposite = 50;
    const myBalance = bank.getDeposite
    console.log(myBalance);
}