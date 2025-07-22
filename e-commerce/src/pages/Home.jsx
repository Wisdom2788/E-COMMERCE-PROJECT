

function Home() {
    return (
        <section className="max-w-7xl max-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap 8">
            <div className="flex-1 flex flex-col items-start">
                <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
                    FIND CLOTHES <br/> THAT MATCHES <br/> YOUR STYLE
                </h1>
                <p className="text-gray-600 mt-4 mb-8 max-w-wd">
                    Browse through our diverse range of meticulously crafted garments, designed <br/> to bring out your individuality and cater to youer sense of style.
                </p>
                <button className="bg-black rounded-full text-white py-4 px-8">
                    Shop Now
                </button>
                <div className="flex space-x-8">
                    <div>
                        <div className="text-2xl font-bold text">200+</div>
                        <div className="text-gray-600">International Brands</div>
                    </div>
                    <div>
                        <div>2000+</div>
                        <div>High-Quality Products</div>
                    </div>
                    <div>
                        <div>30000+</div>
                        <div>Happy Customers</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;