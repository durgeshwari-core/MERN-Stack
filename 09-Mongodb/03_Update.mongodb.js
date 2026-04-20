use('Ecommerce')

//update one $set
db.products.updateOne(
{ name: "Wireless Mouse" },
{ $set: { price: 899 } }  // set-> changed
)


//update many $inc
db.products.updateMany(
{ category: "Electronics" },
{ $inc: { stock: 10 } }// inc -> increase by 
)

// to push in array directly $push
db.products.updateOne(
{ name: "Wireless Mouse" },
{ $push: { tags: "new" } }
)

