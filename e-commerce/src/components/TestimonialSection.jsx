import { useState } from "react";

const reviews = [
  {
    star: "⭐⭐⭐⭐",
    name: "Wisdom U. ✅",
    message: "This is such an excellent product"
  },

  {
    star: "⭐⭐",
    name: "Emmanuel U. ✅",
    message: "Fair enough"
  },

  {
    star: "⭐⭐⭐⭐⭐",
    name: "Sarah M. ✅",
    message: "Amazing quality and fast delivery!"
  },

  {
    star: "⭐⭐⭐⭐⭐",
    name: "Sarah M. ✅",
    message: "Amazing quality and fast delivery!"
  },

  {
    star: "⭐⭐⭐⭐⭐",
    name: "Sarah M. ✅",
    message: "Amazing quality and fast delivery!"
  },
  
];

function TestimonialsSection() {
  const [start, setStart] = useState(0);
  const visible = 3;

  const handlePrev = () => setStart(s => Math.max(0, s - visible));
  const handleNext = () => setStart(s => Math.min(reviews.length - visible, s + visible));

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">OUR HAPPY CUSTOMERS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.slice(start, start + visible).map((review, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6">
            <div className="text-yellow-400 text-lg mb-2">{review.star}</div>
            <div className="font-bold mb-1">{review.name}</div>
            <div className="text-gray-600">{review.message}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handlePrev}
          disabled={start === 0}
          className="px-4 py-2 rounded-full border border-black font-semibold disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={start + visible >= reviews.length}
          className="px-4 py-2 rounded-full border border-black font-semibold disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default TestimonialsSection;