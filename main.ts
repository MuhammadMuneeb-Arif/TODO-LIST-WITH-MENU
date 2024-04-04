#! /usr/bin/env node

import inquirer from "inquirer";
console.log("hello to the X.Y.Z restaurant!");

let todos = [];
let conditions = true;
while (conditions) {
  let menu = await inquirer.prompt([
    {
      name: "card",
      type: "list",
      message: "What would you like to order?",
      choices: ["starter", "fast food", "main course", "dessert", "drink"],
    },
  ]);
  todos.push(menu.card);
  if (menu.card === "starter") {
    let starterMenu = await inquirer.prompt([
      {
        name: "STARTER",
        type: "list",
        message: "What would you like to order in starter?",
        choices: [
          "Chapli kebab",
          "chicken tikka kebab",
          "Garlic bread",
          "Shami Kebab",
        ],
      },
      {
        name: "KEBAB",
        type: "list",
        message: "How many pieces do you want to order",
        choices: ["2 pieces", "4 pieces", "6 pieces", "8 pieces"],
      },
    ]);

    console.log(`${starterMenu.STARTER} with ${starterMenu.KEBAB}`);
    todos.push(`${starterMenu.STARTER} with ${starterMenu.KEBAB}`);
  } else if (menu.card === "main course") {
    let mainCourse = await inquirer.prompt([
      {
        name: "MAINCOURSE",
        type: "list",
        message: "What would you like to order in starter?",
        choices: ["chicken Karahi", "Nihari", "Koorma", "Dum ka keema", "Paya"],
      },
    ]);
    if (
      mainCourse.MAINCOURSE === "chicken Karahi" ||
      mainCourse.MAINCOURSE === "Nihari" ||
      mainCourse.MAINCOURSE === "Dum ka keema" ||
      mainCourse.MAINCOURSE === "Paya" ||
      mainCourse.MAINCOURSE === "Koorma"
    ) {
      let mainMenu = await inquirer.prompt({
        name: "mainMeal",
        type: "list",
        message: "How much do you want to order",
        choices: ["Half Plate", "full plate", "double plate"],
      });
      todos.push(`${mainMenu.mainMeal} of ${mainCourse.MAINCOURSE}`);
    }
  } else if (menu.card === "fast food") {
    let fastFood = await inquirer.prompt([
      {
        name: "FASTFOOD",
        type: "list",
        message: "What would you like to order in starter?",
        choices: [
          "burger",
          "pizza",
          "sandwiches",
          "chicken nuggets",
          "Shawarma",
        ],
      },
    ]);

    if (fastFood.FASTFOOD === "burger") {
      let burgerMenu = await inquirer.prompt({
        name: "burger",
        type: "list",
        message: "Which type of burger do you want to order",
        choices: [
          "Chicken burger",
          "Beef burger",
          "Zinger burger",
          "Rocket burger",
          "Double deaker",
          "BBQ burger",
        ],
      });
      todos.push(`${burgerMenu.burger}`);
    } else if (fastFood.FASTFOOD === "pizza") {
      let pizzaMenu = await inquirer.prompt([
        {
          name: "sizePizza",
          type: "list",
          message: "select size of pizza",
          choices: ["small", "regular", "large"],
        },
        {
          name: "pizza",
          type: "list",
          message: "Which type of pizza flavour do you want to order",
          choices: [
            "Chicken Tikka",
            "Fajita",
            "BBQ Chicken",
            "Afghani",
            "Spicy beef",
            "Hawaiian",
          ],
        },
      ]);
      todos.push(
        `${pizzaMenu.pizza} flavour of pizza  with ${pizzaMenu.sizePizza} size`
      );
    } else if (fastFood.FASTFOOD === "sandwiches") {
      let sandwichesMenu = await inquirer.prompt({
        name: "sandwiches",
        type: "list",
        message: "Which type of sandwiche do you want to order",
        choices: [
          "Chicken Tikka with mayo",
          "pulled chicken",
          "BBQ Chicken",
          "veg sandwich",
          "Spicy beef",
        ],
      });
      todos.push(`${fastFood.FASTFOOD} : ${sandwichesMenu.sandwiches}`);
    } else if (fastFood.FASTFOOD === "Shawarma") {
      let ShawarmaMenu = await inquirer.prompt({
        name: "Shawarma",
        type: "list",
        message: "Which type of Shawarma do you want to order",
        choices: [
          "Chicken shawarma",
          "Chicken cheese shawarma",
          "Double Chicken shawarma",
          "Arabic shawarma",
          "Spicy beef shawarma",
        ],
      });
      todos.push(`${fastFood.FASTFOOD} : ${ShawarmaMenu.Shawarma}`);
    } else if (fastFood.FASTFOOD === "chicken nuggets") {
      let nuggetsMenu = await inquirer.prompt({
        name: "nuggets",
        type: "list",
        message: "How many chicken nuggets do you want to order",
        choices: [
          "2 pieces",
          "4 pieces",
          "6 pieces",
          "8 pieces",
          "12 pieces",
          "16 pieces",
        ],
      });
      todos.push(`${fastFood.FASTFOOD}: ${nuggetsMenu.nuggets} `);
    }
  } else if (menu.card === "dessert") {
    let dessertMenu = await inquirer.prompt([
      {
        name: "DESSERT",
        type: "list",
        message: "What would you like to order in dessert?",
        choices: [
          "icecream",
          "Gulab jamun",
          "Jalebi",
          "ras malai",
          "kheer",
          "barfi",
        ],
      },
    ]);
    if (dessertMenu.DESSERT === "Gulab jamun") {
      let jamunMenu = await inquirer.prompt({
        name: "jamun",
        type: "list",
        message: ` how many Gulab jamun do you want to order`,
        choices: [
          "4 peices",
          "5 peices",
          "6 peices",
          "7 peices",
          "8 peices",
          "9 peices",
        ],
      });
      todos.push(`${dessertMenu.DESSERT} ${jamunMenu.jamun} of Gulab jamun`);
    } else if (dessertMenu.DESSERT === "Jalebi") {
      let jalebiMenu = await inquirer.prompt({
        name: "jalebi",
        type: "list",
        message: `how many Jalebi do you want to order`,
        choices: [
          "4 peices",
          "5 peices",
          "6 peices",
          "7 peices",
          "8 peices",
          "9 peices",
        ],
      });
      todos.push(`${dessertMenu.DESSERT} ${jalebiMenu.jalebi} of Jalebi`);
    } else if (dessertMenu.DESSERT === "barfi") {
      let barfiMenu = await inquirer.prompt({
        name: "barfi",
        type: "list",
        message: ` how many barfi do you want to order`,
        choices: [
          "4 peices",
          "5 peices",
          "6 peices",
          "7 peices",
          "8 peices",
          "9 peices",
        ],
      });
      todos.push(`${dessertMenu.DESSERT} ${barfiMenu.barfi} of barfi`);
    } else if (
      dessertMenu.DESSERT === "kheer" ||
      dessertMenu.DESSERT === "ras malai"
    ) {
      let kheerMenu = await inquirer.prompt({
        name: "kheer",
        type: "list",
        message: ` how much do you want to order`,
        choices: ["half plate", "full plate", "double plate"],
      });
      todos.push(`${kheerMenu.kheer} of ${dessertMenu.DESSERT} `);
    } else if (dessertMenu.DESSERT === "icecream") {
      let icecreamMenu = await inquirer.prompt([
        {
          name: "icecreamFlavour",
          type: "list",
          message: `which flavour of ice cream do you want to order`,
          choices: [
            "chocolate",
            "pista",
            "vanilla",
            "strawberry",
            "mint chocolate",
            "chocolate and vanilla",
            "plain",
            "strawberry and vanilla",
          ],
        },
        {
          name: "icecream",
          type: "list",
          message: `how many ice cream do you want to order`,
          choices: [
            "2 scoops",
            "4 scoops",
            "6 scoops",
            "8 scoops",
            "12 scoops",
          ],
        },
      ]);
      todos.push(
        ` ${icecreamMenu.icecream} of ${icecreamMenu.icecreamFlavour} ${dessertMenu.DESSERT}`
      );
    }
  } else if (menu.card === "drink") {
    let drinkMenu = await inquirer.prompt([
      {
        name: "DRINK",
        type: "list",
        message: "What would you like to order in dessert?",
        choices: [
          "water",
          "coca cola",
          "pepsi",
          "fants",
          "moutain dew",
          "7 up",
          "sting",
        ],
      },
    ]);
    if (drinkMenu.DRINK) {
      let drinkVolume = await inquirer.prompt({
        name: "bottle",
        type: "list",
        message: `what do you prefer?`,
        choices: ["bottle", "can", "glass"],
      });

      if (drinkVolume.bottle === "can" || drinkVolume.bottle === "glass") {
        let canMenu = await inquirer.prompt({
          name: "canVolume",
          type: "list",
          message: "which is the volume of your can or glass",
          choices: ["250 ml", "500 ml"],
        });
        todos.push(`${drinkMenu.DRINK} ${drinkVolume.bottle}`);
      } else if (drinkVolume.bottle === "bottle") {
      }
      let botMenu = await inquirer.prompt({
        name: "botVolume",
        type: "list",
        message: "which is the volume of your can or glass",
        choices: ["250 ml", "500 ml", "1 liter", "1.5 liter", "2.5 liter"],
      });

      todos.push(
        `${drinkMenu.DRINK} ${drinkVolume.bottle} ${botMenu.botVolume}`
      );
    }
  }

  console.log(todos);
  let addMenu = await inquirer.prompt([
    {
      name: "addMore",
      type: "confirm",
      message: "Would you like to add more?",
      default: "False",
    },
  ]);
  conditions = addMenu.addMore;
}
