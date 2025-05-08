class BankAccount {
    #amount;
    #operations;

    constructor(owner, amount) {
        this.owner = owner;
        this.#amount = amount;

        this.#operations = [];
    };

    withdraw(number) {
        if(this.#amount - number < 0) {
            console.log(`Операція пройшла без успіху. Доступні для зняття кошти - ${this.#amount}грн`);
            return;
        };
        
        this.#amount = this.#amount - number;

        this.#operations.push(`Зняття - ${number}грн. Баланс - ${this.#amount}грн`);

        console.log(`Операція пройшла успішно. З балансу було знято - ${number}грн; залишилось - ${this.#amount}грн`);
    };

    replenishment(number) {
        this.#amount = this.#amount + number;

        this.#operations.push(`Поповнення - ${number}грн. Баланс - ${this.#amount}грн`);

        console.log(`Операція пройшла успішно. Баланс було поповнено на ${number}грн; баланс - ${this.#amount}грн`);
    };

    get amount() {
        return this.#amount;
    };

    showOperations() {
        for (let operation of this.#operations) {
            console.log(operation);
        };
    };
};

const vitaliyBank = new BankAccount('Процюк Віталій', 500);

console.log(vitaliyBank.amount);
vitaliyBank.replenishment(100);
console.log(vitaliyBank.amount);
vitaliyBank.withdraw(600);
console.log(vitaliyBank.amount);
vitaliyBank.withdraw(10);
vitaliyBank.replenishment(100);
console.log(vitaliyBank.amount);
vitaliyBank.showOperations();