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

    // printOrders () {
    //   let menu = this.menu.dishes
    //   let orders = this.orders
    //   return Object.entries(menu).map(([key,value]) => {
    //     return orders.map((choice) => {
    //       if (choice === key) {
    //         return `You ordered ${key}: £${value}`;
    //       }
    //     }).toString
    //   });
    // }
    printOrders () {
      let menu = this.menu.dishes
      let orders = this.orders
      return orders.map((choice) => {
        return Object.entries(menu).filter(([key,value]) => {
          if (choice === key) {
            return `You ordered ${key}: £${value}`;
          }
        }).toString();
      });
    }

orderTotal () {
  let menu = this.menu.dishes
  let orders = this.orders
  let sum = 0
  for (let choice in orders) { 
    for(const [key, value] of Object.entries(menu)) {
      if (orders[choice] === key) {
        sum += value;
      }
    }
return sum
  }
}


}


module.exports = Takeaway;
