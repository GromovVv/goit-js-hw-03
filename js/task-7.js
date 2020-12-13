const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let id = 0;
const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
      id += 1;
      return {
          id, amount, type
      }
  },

  deposit(amount) {
      this.transactions.push(this.createTransaction(amount, 'deposit'));
      this.balance += amount;
      return this.transactions;
  },
 
  withdraw(amount) {
    if (amount <= this.balance) {
      this.transactions.push(this.createTransaction(amount, 'withdraw'));
      this.balance -= amount;
      return this.transactions;
    } else {
      return 'снятие такой суммы не возможно, недостаточно средств';
    }
  },
  
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    return this.transactions[id-1]
  },
 
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return `Общий оборот средств на счету по операциям типа ${type} : ${total}` ;
  },
};
console.log(account.createTransaction(100, 'deposit'))
console.log(account.deposit(400));
console.log(account.deposit(500));
console.log(account.withdraw(100));
console.log(account.withdraw(300));
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
