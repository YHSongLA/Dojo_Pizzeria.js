function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var dojoPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(dojoPizza);

var ninjaPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(ninjaPizza);

var codedPizza = pizzaOven("thin crust", "bbq sauce", ["cojita"], ["chicken", "onion", "parsely"])
console.log(codedPizza);

var devPizza = pizzaOven("gluten-free", "traditonal", ["mozzarella"], ["olives", "onions", "tomatoes", "basil"])
console.log(devPizza);

var crustType = [
    "deep dish",
    "thin crust",
    "hand tossed",
    "gluten-free"
];

var sauceType = [
    "tradtional",
    "marinara",
    "bbq sauce",
    "alfredo"
];

var cheese = [
    "mozzarella",
    "cojita",
    "feta",
    "blue cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "mushrooms",
    "olives",
    "onions",
    "parsely",
    "tomatoes",
    "basil"
];

function randomPizzaType(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomSelections(arr) {
    var i = Math.floor(arr.length * Math.random())
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = [];
    pizza.sauceType = [];
    pizza.cheese = [];
    pizza.toppings = [];

    for(var i = 0; i < randomPizzaType(5, 3); i++) {
        pizza.crustType.push(randomSelections(crustType));
    }

    for(var i = 0; i < randomPizzaType(5, 1); i++) {
        pizza.sauceType.push(randomSelections(sauceType));
    }

    for (var i = 0; i < randomPizzaType(4, 2); i++) {
        pizza.cheese.push(randomSelections(cheese));
    }

    for (var i = 0; i < randomPizzaType(5, 0); i++) {
        pizza.toppings.push(randomSelections(toppings));
    }
    return pizza;
}
console.log(randomPizza());