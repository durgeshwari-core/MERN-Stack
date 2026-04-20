use('Ecommerce')

//to delete one thing
db.contacts.deleteOne({ name: "Alice" })

//delete many 
db.orders.deleteMany({ status: "Delivered" })
