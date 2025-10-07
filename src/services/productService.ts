const getProducts = async () => {
    const response = await fetch("../data/products.json");
    const data = await response.json();
    return data;
};

export { getProducts };
