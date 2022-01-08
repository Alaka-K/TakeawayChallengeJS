const Menu = require('./menu');

class Takeaway {
    constructor () {
      this.orders = []
      this.menu = new Menu()

    }

    getOrders () {
    return this.orders
    }

    addOrder (item) {
      return this.orders.push(item);
    }

    printMenu () {
      return this.menu.printDishes ()
    }
}

module.exports = Takeaway;