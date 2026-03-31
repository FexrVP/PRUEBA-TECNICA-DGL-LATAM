const axios = require('axios');

const fetchAndTransformProducts = async () => {
    try {
        const response = await axios.get(process.env.EXTERNAL_API_URL);
        const products = response.data.products;

    if (!products || !Array.isArray(products)) {
        throw new Error('Datos inválidos desde la API externa');
    }

    const transformed = products.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
        finalPrice: +(product.price * 1.16).toFixed(2), // 16% IVA
        isLowStock: product.stock < 10
    }));

    return transformed.sort((a, b) => b.price - a.price);
    } catch (error) {
    // Lanzar error con contexto para manejarlo en el controlador
        throw new Error(`Error al obtener productos: ${error.message}`);
    }
};

module.exports = { fetchAndTransformProducts };