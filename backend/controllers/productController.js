const { fetchAndTransformProducts } = require('../services/productService');

const getProducts = async (req, res, next) => {
    try {
        const products = await fetchAndTransformProducts();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

module.exports = { getProducts };