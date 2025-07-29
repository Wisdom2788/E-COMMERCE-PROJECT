import { useParams } from "react-router";
import { useEffect, useState } from "react";
import TestimonialsSection from "../components/TestimonialSection";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setSelectedImage(data.thumbnail);
        setSelectedColor(data.colors ? data.colors[0] : "#444");
        setSelectedSize(data.sizes ? data.sizes[0] : "Large");
      });
  }, [productId]);

  if (!product) return <div>loading</div>;

  return (
    <>
      <div className="flex gap-8 p-8">
        {/* Gallery */}
        <div className="flex flex-col gap-4">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={product.title}
              className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${selectedImage === img ? "border-black" : "border-transparent"}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        {/* Main Image */}
        <div className="flex-1 flex items-center justify-center">
          <img src={selectedImage} alt={product.title} className="w-96 h-96 object-contain rounded-lg" />
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold mb-2">{product.title}</h1>
          <div className="flex items-center mb-2">
            <p className="text-yellow-500 text-xl mr-2">
              {"★".repeat(Math.round(product.rating))}
            </p>
            <span className="text-gray-500 text-lg">{product.rating}/5</span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="line-through text-gray-400 text-lg">${product.price + Math.round(product.price * product.discountPercentage / 100)}</span>
            <span className="text-red-500 text-lg">-{product.discountPercentage}%</span>
          </div>
          <p className="mb-4 text-gray-700">{product.description}</p>
          {/* Color Selector */}
          <div className="mb-4">
            <div className="font-semibold mb-1">Select Colors</div>
            <div className="flex gap-3">
              {(product.colors || ["#444", "#223", "#2a3b4c"]).map((color, idx) => (
                <button
                  key={idx}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-300"}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
          {/* Size Selector */}
          <div className="mb-4">
            <div className="font-semibold mb-1">Choose Size</div>
            <div className="flex gap-3">
              {(product.sizes || ["Small", "Medium", "Large", "X-Large"]).map((size, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-full border ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mb-6">
            <button
              className="w-8 h-8 rounded-full border flex items-center justify-center"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >-</button>
            <span className="text-lg">{quantity}</span>
            <button
              className="w-8 h-8 rounded-full border flex items-center justify-center"
              onClick={() => setQuantity(q => q + 1)}
            >+</button>
          </div>
          {/* Add to Cart Button */}
          <button
            className="bg-black text-white w-full py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
            onClick={() => setShowModal(true)}
          >
            Add to Cart 
          </button>
          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Added to Cart!</h2>
                <p className="mb-4">{product.title} ({selectedSize}, {selectedColor}) x{quantity}</p>
                <button
                  className="bg-black text-white px-6 py-2 rounded-full"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <TestimonialsSection/>
    </>
  );
}

export default ProductDetail;