/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && typeof balance === 'number' && balance === Math.round(balance)) {
    const account = new Account(this.nextAccountNumber, balance);
    account.deposit(balance);
    account.holder = holder;
    this.accounts.push(account);
    this.nextAccountNumber += 1;
    return account.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (let i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  } return null;
};

Bank.prototype.getTotalAssets = function () {
  let total = 0;
  if (this.accounts === undefined) {
    return 0;
  } else {
    for (let i = 0; i < this.accounts.length; i++) {
      total += this.accounts[i].getBalance();
    }
  }
  return total;
};
