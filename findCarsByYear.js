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
  const models = []
  const values = Object.values(INVENTORY)
  for (const item of values) {
    models.push([item.brand, item.models])
  }

  let i = 1
  let j = 0

  for (const item of models) {
    while (j <= models.length - 1) {
      if (item[i][j] && item[i][j].years.includes(year)) {
        console.log(`${item[0]} ${item[i][j].name} ${year}`)
      }
      j++
    }
    j = 0
  }
}

findCarsByYear(2013)

const findCarsByYear2 = (year) => {
  INVENTORY.forEach((car) => {
    const { brand } = car
    car.models.forEach((model) => {
      if (model.years.includes(year)) {
        console.log(`${brand} ${model.name} ${year}`)
      }
    })
  })
}

// findCarsByYear2(2013)
