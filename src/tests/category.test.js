const request = require("supertest");
const app = require("../app");


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

test("GET /categories", async () => {
  const res = await request(app).get("/categories");
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test("POST / categories", async () => {
  const category = {
    name: 'Ropa de bebes'
  };

  const res = await request(app)
  .post("/categories")
  .send(category)
  .set("Authorization", `Bearer ${token}`);
  id = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.name).toBe(category.name);
  expect(res.body.id).toBeDefined();
});

test("DELETE /categories", async () => {
  const res = await request(app)
    .delete(`/categories/${id}`)
    .set('Authorization', `Bearer ${token}`);
    console.log(res.body)
  expect(res.status).toBe(204);
});
