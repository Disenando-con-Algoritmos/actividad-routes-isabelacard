import Product from "../../components/Product";

export default function Catalog() {
    return (
        <div id="product-page" className="flex flex-col items-center justify-center min-h-screen bg-pink-200 text-pink-600 font-bold">
            <h1 className="text-4xl text-pink-600 mb-5">Catalog</h1>
            <Product />
        </div>
    );
}
