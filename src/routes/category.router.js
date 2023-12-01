const { getAll, create, getOne, remove, update } = require('../controllers/category.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT')

const caterogyRouer = express.Router();

caterogyRouer.route('/')
    .get(getAll)
    .post(verifyJWT, create);

caterogyRouer.route('/:id')
    .get(getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = caterogyRouer;