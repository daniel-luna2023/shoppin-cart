const sequelize = require('../utils/connection');
const request = require('supertest');
const app = require('../app')


const main = async() => {
    try{
        // Acciones a ejecutar antes de los tests
        const user = {
            email:'test1@gmail.com',
            password:'test1234',
            firstName:'test',
            lastName:'test',
            phone:'123456788'
        }
        await request(app).post('/users').send(user)

        sequelize.sync();
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();