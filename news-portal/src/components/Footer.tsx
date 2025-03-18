import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              Providing the latest and most reliable news from around the world. Stay updated with our exclusive articles and insights.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-sm text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest news updates delivered directly to your inbox.
            </p>
            <form>
              <input
                type="email"
                className="w-full p-2 rounded-lg text-gray-800"
                placeholder="Enter your email"
              />
              <button type="submit" className="mt-2 w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© 2025 NewsPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
