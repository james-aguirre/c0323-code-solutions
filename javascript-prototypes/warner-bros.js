/* exported yakko, wakko, dot */

const yakko = {
  age: 14,
  name: 'Yakko',
  role: 'brother'
};

const wakko = {
  age: 11,
  name: 'Wakko',
  role: 'brother'
};

const dot = {
  age: 10,
  name: 'Dot',
  role: 'sister'
};

const prototype = {
  describe: function () {
    const description = this.name + ' is a ' +
      this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};

Object.setPrototypeOf(yakko, prototype);
Object.setPrototypeOf(wakko, prototype);
Object.setPrototypeOf(dot, prototype);
