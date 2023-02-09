export const dummyData = {
  goat: {
    eartag_code: 'A1234',

    cempek: false,
    birth_weight: 5,
    birth_condition: 'healthy',
    colostrum: 1,

    gender: 'female',
    type: 'Sapera',
    origin: 'Garut',
    arrival_date: new Date().toString(),
    weight: 20,
    birth_date: new Date().toString(),
    age: 3,
    purchase_price: 1000000,
    female_parent_origin: 'Impor',
    male_parent_origin: 'Impor',
    certificate: 'http//...',
    description: 'desc',

    shed_code: '1111',

    feed_price: 20000,
    other_price: 10000,
    hpp: 1000000,
    sell_price: 1200000,
    status: 'alive',

    milk_amount: '3',
    milk_status: true,
    income_date: new Date().toString(),
    total_income: 1200000,
  },
  sheep: {
    eartag_code: 'B1234',

    cempek: false,
    birth_weight: 5,
    birth_condition: 'healthy',
    colostrum: 1,

    gender: 'female',
    type: 'Sapera',
    origin: 'Garut',
    arrival_date: new Date().toString(),
    weight: 20,
    birth_date: new Date().toString(),
    age: 3,
    purchase_price: 1000000,
    female_parent_origin: 'Impor',
    male_parent_origin: 'Impor',
    certificate: 'http//...',
    description: 'desc',

    shed_code: '1111',

    feed_price: 20000,
    other_price: 10000,
    hpp: 1000000,
    sell_price: 1200000,
    status: 'alive',

    milk_amount: '3',
    milk_status: true,
    income_date: new Date().toString(),
    total_income: 1200000,
  },
  cow: {
    eartag_code: 'C1234',

    gender: 'female',
    type: 'Sapera',
    origin: 'Garut',
    arrival_date: new Date().toString(),
    weight: 20,
    birth_date: new Date().toString(),
    age: 3,
    purchase_price: 1000000,
    female_parent_origin: 'Impor',
    male_parent_origin: 'Impor',
    certificate: 'http//...',
    description: 'desc',

    shed_code: '1111',

    feed_price: 20000,
    other_price: 10000,
    hpp: 1000000,
    sell_price: 1200000,
    status: 'alive',

    milk_amount: '3',
    milk_status: true,
    income_date: new Date().toString(),
    total_income: 1200000,
  },
  shed: {
    shed_code: '1111',
    animal_type: 'sheep',
    animal_weight: '50-60',
    feed: 'rumput',
    feed_weight: 1,
    age_range: '5-6',
    description: 'desc',
  },
}

export const goatsData = [dummyData.goat]
for (let i = 0; i < 20; i++) {
  goatsData.push(dummyData.goat)
}

export const sheepsData = [dummyData.sheep]
for (let i = 0; i < 20; i++) {
  sheepsData.push(dummyData.sheep)
}

export const cowsData = [dummyData.cow]
for (let i = 0; i < 20; i++) {
  cowsData.push(dummyData.cow)
}

export const shedData = [dummyData.shed]
for (let i = 0; i < 20; i++) {
  shedData.push(dummyData.shed)
}
