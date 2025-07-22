import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";


function Footer() {
    return (
      <footer className="bg-gray-50">
        {/* Newsletter Section */}
        <div className="bg-black rounded-2xl w-full max-w-5xl mx-auto py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center md:text-left flex-1">
            STAY UP TO DATE ABOUT<br></br>OUR LATEST OFFERS
          </h3>
          <div>
          <form className="flex flex-col  items-center gap-4 flex-1 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="px-12 py-3 rounded-full text-black w-full sm:w-72 focus:outline-none items-center "
              />
            <button
              type="submit"
              className="bg-white text-black px-12 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Subscribe to Newsletter
            </button>
          </form>
          </div>
        </div>
  
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-black mb-4">SHOP.CO</h3>
              <p className="text-gray-600 mb-4">
                We have clothes that suits your style and which you're proud to wear. From women to men.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                  <FaFacebook />
                </a>
                <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                  <FaGithub />
                </a>
              </div>
            </div>
  
            {/* Navigation Columns */}
            <div>
              <h4 className="font-bold text-black mb-4">COMPANY</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black">About</a></li>
                <li><a href="#" className="hover:text-black">Features</a></li>
                <li><a href="#" className="hover:text-black">Works</a></li>
                <li><a href="#" className="hover:text-black">Career</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-bold text-black mb-4">HELP</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black">Customer Support</a></li>
                <li><a href="#" className="hover:text-black">Delivery Details</a></li>
                <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-bold text-black mb-4">FAQ</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black">Account</a></li>
                <li><a href="#" className="hover:text-black">Manage Deliveries</a></li>
                <li><a href="#" className="hover:text-black">Orders</a></li>
                <li><a href="#" className="hover:text-black">Payments</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-bold text-black mb-4">RESOURCES</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black">Free eBooks</a></li>
                <li><a href="#" className="hover:text-black">Development Tutorial</a></li>
                <li><a href="#" className="hover:text-black">How to - Blog</a></li>
                <li><a href="#" className="hover:text-black">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-600">VISA</span>
              <span className="text-sm text-gray-600">Mastercard</span>
              <span className="text-sm text-gray-600">PayPal</span>
              <span className="text-sm text-gray-600">Apple Pay</span>
              <span className="text-sm text-gray-600">Google Pay</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;