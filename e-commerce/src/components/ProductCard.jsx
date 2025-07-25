function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col items-center">
        <img src={product.thumbnail} alt={product.title} className="w-40 h-40 object-contain mb-4" />
        <div className="font-semibold text-lg mb-2">{product.title}</div>
        <div className="flex items-center mb-2">
          {/* Render stars based on product.rating */}
          <span className="text-yellow-400 mr-1">★</span>
          <span className="text-gray-600 text-sm">{product.rating}/5</span>
        </div>
        <div className="font-bold text-xl">${product.price}</div>
        {/* Optionally show discount badge if product.discountPercentage */}
        {product.discountPercentage > 0 && (
          <div className="text-red-500 text-xs mt-1">-{product.discountPercentage}%</div>
        )}
        
      </div>
    );
  }
  
  export default ProductCard;