import { useEffect, useState } from "react";

import type { Producttype } from "../../types/ProductType";
import { getProducts } from "../../services/productService";
import ProductCard from "../../components/ProductCard";

export default function Catalog() {
    const [products, setProducts] = useState<Producttype[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchData();
    }, []);

    return (
        <div id="catalog-page" className="flex flex-col items-center min-h-screen bg-pink-200 text-pink-600 font-bold">
            <h1 className="text-4xl text-pink-600 mb-10 mt-20">Catalog</h1>
            <div id="products-container" className="flex flex-wrap gap-8 m-4">
                {products.map((product: Producttype) => {
                    return <ProductCard key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
}
