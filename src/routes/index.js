const express = require('express');
const userRouter = require('./user.router');
const caterogyRouer = require('./category.router');
const productRouter = require('./product.router');
const imagesRouter = require('./image.router');
const cartRouter = require('./cart.router');
const purchaseRouter = require('./purchase');
const router = express.Router();


// colocar las rutas aquí
router.use('/users', userRouter);

router.use('/categories', caterogyRouer);

router.use('/products', productRouter);

router.use('/images', imagesRouter);

router.use('/cart', cartRouter)

router.use('/purchases', purchaseRouter)


module.exports = router;