'use strict'
/*
Implement an inventory lookup function for a car dealership.

Given a list of cars ordered by brands, each brand having models from different years,
implement a `findCarsByYear` function that will log to console all models from the inventory
with matching year.

Example:
  findCarsByYear(2013);

Console output for the example:
  Škoda Fabia 2013
  Toyota Corolla 2013

const INVENTORY = [{
  brand: 'Škoda',
  models: [{
    name: 'Fabia',
    years: [2011, 2012, 2013]
  }, {
    name: 'Kamiq',
    years: [2019, 2020, 2021]
  }]
}, {
  brand: 'Toyota',
  models: [{
    name: 'Corolla',
    years: [2011, 2013]
  }, {
    name: 'Prius',
    years: [2019, 2020, 2021]
  }]
}, {
  brand: 'Nissan',
  models: [{
    name: 'Micra',
    years: [2011]
  }, {
    name: 'GTR',
    years: [2019]
  }]
}]

Bonus: implement a `findCars` function that could accept year, model name, or manufacturer name.
  Example:
    findCars('GTR');

  Console output for the example:
    Nissan GTR 2019

*/

const INVENTORY = [
  {
    brand: 'Škoda',
    models: [
      {
        name: 'Bomba',
        years: [2011, 2012, 2013],
      },
      {
        name: 'Fabia',
        years: [2011, 2012, 2013],
      },
      {
        name: 'Kamiq',
        years: [2019, 2020, 2021, 2013],
      },
    ],
  },
  {
    brand: 'Toyota',
    models: [
      {
        name: 'Corolla',
        years: [2011, 2013],
      },
      {
        name: 'Prius',
        years: [2019, 2020, 2021],
      },
    ],
  },
  {
    brand: 'Nissan',
    models: [
      {
        name: 'Micra',
        years: [2011],
      },
      {
        name: 'GTR',
        years: [2019, 2013],
      },
      {
        name: 'FOO',
        years: [2019, 2013],
      },
    ],
  },
]

function findCarsByYear(year) {
  // create models array
  const models = []
  // store Objects.values of INVENTORY to values constant
  const values = Object.values(INVENTORY)
  // loop through values
  for (const item of values) {
    // push in each iteration item's brand and the brand's models array
    // of this brand to models array as an array of each of those pair,
    // instead of an object, as in the values array
    models.push([item.brand, item.models])
  }

  // initialize i as 1
  let i = 1
  // initialize j as 0
  let j = 0

  // loop through models array
  for (const item of models) {
    // while j equals to 0 up to models.length - 1
    while (j <= models.length - 1) {
      // check if there is an item[0][j] and if item[0][j].years includes given year
      if (item[i][j] && item[i][j].years.includes(year)) {
        console.log(`${item[0]} ${item[i][j].name} ${year}`)
      }
      // increment j by 1
      j++
    }
    // reset j to 0
    j = 0
  }
}

findCarsByYear(2013)

const findCarsByYear2 = (year) => {
  // loop through INVENTORY
  INVENTORY.forEach((car) => {
    // destructure brand out of each car element
    const { brand } = car
    // loop through each car's models array
    car.models.forEach((model) => {
      // check if models.years includes given year
      if (model.years.includes(year)) {
        console.log(`${brand} ${model.name} ${year}`)
      }
    })
  })
}

// findCarsByYear2(2013)
