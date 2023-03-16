export const dummyData = {
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
    updatedAt: new Date(),

    feed_date: new Date(),
    feed_type: 'rumput',
    feed_price: 5000,
    feed_stock: 50,

    vitamin_date: new Date(),
    vitamin_type: 'vit C',
    vitamin_price: 7500,

    vaccine_date: new Date(),
    vaccine_type: 'rabies',
    vaccine_price: 10000,

    anthelmintic_date: new Date(),
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
    milk_date: new Date(),
    status: { name: 'Aktif', value: 'active' },
  },
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
