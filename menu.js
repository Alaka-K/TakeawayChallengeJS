class Menu {
    constructor () {
      this.dishes = { Rice: 3, Chicken: 2,
                      Kimchi: 3, Burger: 2, 
                      Pizza: 4, Noodles: 2 }
    };
  
    getDishes () {
      return this.dishes
    }

    printDishes () {
        let dishes = this.dishes
        return Object.entries(dishes).map(([key, value]) => {
        return `The ${key} cost £${value}`})
    }
}
  
module.exports = Menu;