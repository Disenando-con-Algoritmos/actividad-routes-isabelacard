import type { Product } from "../types/ProductType";

export default function Product({ productToShow }: Product) {
    return (
        <div id="user-card" className="bg-pink-400 p-3 rounded-3xl m-3 shadow-2xl hover:bg-amber-400 hover:scale-110 transition-all">
            <h2 className="font-bold text-2xl">{productToShow.id}</h2>
            <h2 className="font-bold text-2xl">{productToShow.name}</h2>
            <h2 className="font-bold text-2xl">{productToShow.description}</h2>
            <h2 className="font-bold text-2xl">{productToShow.price}</h2>
            <h2 className="font-bold text-2xl">{productToShow.category}</h2>
            <h2 className="font-bold text-2xl">{productToShow.image}</h2>
            <h2 className="font-bold text-2xl">{productToShow.tags}</h2>
        </div>
    );
}
