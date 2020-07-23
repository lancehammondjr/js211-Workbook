'use strict'

class BankAccount {
    accountNumber;
    owner;
    transaction;

    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transaction = [];
    }

    deposit(amt) {
        if (amt > 0) {
            let newTransaction = new Transaction(amt, "Deposit");
            this.transaction.push(newTransaction);
        }
    }


    balance() {
         let sum = 0;

         //Can use the reduce funcution
         for (let i = 0; i < this.transaction.length; i++) {
             let currentTransaction = this.transaction[i];
             sum = sum + currentTransaction.amount;
         }
         return sum;
    }

    charge(payee, amt) {
        //add code
        //if statmeant for over charges
        if (amt < this.balance()) {
        let newCharge = new Transaction(-amt,payee)
        this.transaction.push(newCharge);
        }
    }
}

class Transaction {
    amount;
    payee;
    date;

    constructor(amount,payee){
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }
}


/******************************** */

let acct1 = new BankAccount("5553429", "John Doe");

console.log(acct1.accountNumber); // 5553429
console.log(acct1.owner); // John Doe
console.log(acct1.balance()); // 0

acct1.deposit(100);
console.log(acct1.balance()); // 100

acct1.deposit(-200); // should not be allowed
console.log(acct1.balance()); // 100

acct1.charge('Target', 30.50);
acct1.charge('FreeBirds', 15.15);
console.log(acct1.balance()); // 54.35

acct1.charge('Diamond Shop', 1000) // should not be allowed
console.log(acct1.balance()) // 54.35

acct1.charge('Target', -20) // refund
console.log(acct1.balance()) // 74.35
