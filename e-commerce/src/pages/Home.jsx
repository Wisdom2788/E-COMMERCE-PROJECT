import heroImg from "../assets/hero.jpg";

function Home() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-gray">
            <div className="flex-1 flex flex-col items-start">
                <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
                    FIND CLOTHES <br/> THAT MATCHES <br/> YOUR STYLE
                </h1>
                <p className="text-gray-600 mt-4 mb-8 max-w-md">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className="bg-black rounded-full text-white py-4 px-8 font-bold text-lg hover:bg-gray-900 transition mb-8">
                    Shop Now
                </button>
                <div className="flex space-x-8">
                    <div>
                        <div className="text-2xl font-bold text-black">200+</div>
                        <div className="text-gray-600">International Brands</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-black">2,000+</div>
                        <div className="text-gray-600">High-Quality Products</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-black">30,000+</div>
                        <div className="text-gray-600">Happy Customers</div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex justify-center">
                <img src={heroImg} alt="hero" className="w-full max-w-md rounded-xl object-cover"/>
            </div>
        </section>
    );
}

export default Home;