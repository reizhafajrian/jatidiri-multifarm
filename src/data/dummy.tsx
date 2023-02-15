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
  shedDetail: {
    data_id: '123',
    shed_code: '1111',

    updatedAt: new Date().toString(),

    feed_date: new Date().toString(),
    feed_type: 'rumput',
    feed_price: 5000,
    feed_stock: 50,

    vitamin_date: new Date().toString(),
    vitamin_type: 'vit C',
    vitamin_price: 7500,

    vaccine_date: new Date().toString(),
    vaccine_type: 'rabies',
    vaccine_price: 10000,

    anthelmintic_date: new Date().toString(),
    anthelmintic_type: 'test',
    anthelmintic_price: 10000,
  },
  hpp: {
    eartag_code: '111',
    type: 'Sapera',
    origin: 'Garut',
    weight: 20,
    age: 3,
    purchase_price: 1000000,
    feed_price: 1000000,
    other_price: 0,
    hpp: 1000000,
    selling_price: 1000000,
    status: { name: 'Terjual', value: 'sold' },
  },
  milk: {
    eartag_code: '111',
    type: 'Sapera',
    origin: 'Garut',
    weight: 20,
    age: 3,
    milk: 1,
    status: { name: 'Aktif', value: 'active' },
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

export const shedDetailData = [dummyData.shedDetail]
for (let i = 0; i < 5; i++) {
  shedDetailData.push(dummyData.shedDetail)
}

export const hppData = [dummyData.hpp]
for (let i = 0; i < 5; i++) {
  hppData.push({ ...dummyData.hpp, eartag_code: `11${i + 2}` })
}

export const milkData = [dummyData.milk]
for (let i = 0; i < 5; i++) {
  milkData.push(dummyData.milk)
}
