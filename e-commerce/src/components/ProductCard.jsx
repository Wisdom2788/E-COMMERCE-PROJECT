import {Link} from "react-router";

function ProductCard({ product }) {
    return (
      <Link to={`/product/${product.id}`}>
          <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col items-center">
        <img src={product.thumbnail} alt={product.title} className="w-40 h-40 object-contain mb-4" />
        <div className="font-semibold text-lg mb-2">{product.title}</div>
        <div className="flex items-center mb-2">
          {/* Render stars based on product.rating */}
          <p className="text-yellow-500 text-sm">
          {"★".repeat(Math.round(product.rating))}
        </p>
        </div>
        <div className="font-bold text-xl">${product.price}</div>
        {/* Optionally show discount badge if product.discountPercentage */}
        {product.discountPercentage > 0 && (
          <div className="text-red-500 text-xs mt-1">-{product.discountPercentage}%</div>
        )}

        <div className="py-3">
          <button className="bg-black text-white rounded-full px-3 py-2 hover:bg-red-700">Add to Cart</button>
        </div>

      </div>
      </Link>
    );
  }
  
  export default ProductCard;