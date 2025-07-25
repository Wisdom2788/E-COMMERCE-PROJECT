import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function NewArrivalsSection() {
  const [products, setProducts] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  // Show 15 by default, all if viewAll is true
  const displayedProducts = viewAll ? products : products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {displayedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!viewAll && (
        <div className="flex justify-center mt-8">
          <button
            className="border border-black rounded-full px-8 py-2 font-semibold hover:bg-black hover:text-white transition"
            onClick={() => setViewAll(true)}
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
}

export default NewArrivalsSection;