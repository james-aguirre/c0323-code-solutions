/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    const account = new Account(this.nextAccountNumber, balance);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.holder;
  }
};
