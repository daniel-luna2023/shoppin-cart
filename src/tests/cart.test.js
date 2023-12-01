const request = require('supertest');
const app = require('../app');
require('../models');

let token;
let id;

beforeAll(async () => {
  const user = {
    email:'test1@gmail.com',
    password:'test1234',
  };
  const res = await request(app).post("/users/login").send(user);
  token = res.body.token;
  console.log(res.body);
});


test("GET /cart", async () => {
  const res = await request(app)
  .get("/cart")
  .set('Authorization', `Bearer ${token}`);
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test("POST / cart", async () => {
  const cart = {
    quantity: 5,
  };

  const res = await request(app)
  .post("/cart")
  .send(cart)
  .set("Authorization", `Bearer ${token}`);
  id = res.body.id
  expect(res.status).toBe(201);
  expect(res.body.quantity).toBe(cart.quantity);
  expect(res.body.id).toBeDefined();
});

test("DELETE /cart", async () => {
  const res = await request(app)
    .delete(`/cart/${id}`)
    .set('Authorization', `Bearer ${token}`);
    
  expect(res.status).toBe(204);
});
