const Menu = require('./menu');

class Takeaway {
    constructor () {
      this.orders = []
    }

    getOrders () {
      return this.orders
    }
}

module.exports = Takeaway;