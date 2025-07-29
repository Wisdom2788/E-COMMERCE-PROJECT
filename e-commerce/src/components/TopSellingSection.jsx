import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function TopSellingSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://dummyjson.com/products?limit=20")
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const displayedProducts = viewAll ? products : products.slice(0, 5);

  if (loading) {
    return <div className="text-center py-12">Loading top selling products...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <section id="topSelling" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">TOP SELLING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
          <div className="flex justify-center mt-8">
            <button
              className="border border-black rounded-full px-8 py-2 font-semibold hover:bg-black hover:text-white transition"
              onClick={() => setViewAll(prev => !prev)}
              aria-expanded={viewAll}
            >
              {viewAll ? "Show less" : "View all"}
            </button>
          </div>
        <hr className="border-t border-gray-300 my-10 w-11/12 mx-auto"/>
      </section>
    </>
  );
}

export default TopSellingSection;