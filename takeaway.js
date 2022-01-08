const Menu = require('./menu');

class Takeaway {
    constructor () {
      this.orders = []

    }

    getOrders () {
    return this.orders
    }

    addOrder (item) {
      return this.orders.push(item);
    }
}

module.exports = Takeaway;