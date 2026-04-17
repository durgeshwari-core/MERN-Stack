const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Alpha_app',
  password: 'root',
});

try {
    connection.query("SHOW TABLES",(err, results) => {
    if(err) throw err;
    console.log(results);})
}
catch (err) {
    console.error( err);
}



 let createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };}

  connection.end();

