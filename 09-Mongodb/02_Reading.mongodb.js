use('Ecommerce')
// db.products.find({categor: 'Electronics'})

// db.products.find().pretty()

// db.products.find({ price: { $gt: 1000 } }) // greater than 1000
// db.products.find({ price: { $gte: 1000, $lte: 50000 } })

// db.products.find({}, { name: 1, price: 1, _id: 0 })

// projection-> specific data
// db.products.find({}, { name: 1, price: 1, _id: 0 })

// sorting and limiting -> for pagenation

db.products.find().sort({ price: -1 }).limit(1)
