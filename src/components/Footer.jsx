// src/components/Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social Media Icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-2">Event Explorer</h3>
            <p className="text-sm">
              Discover the best events in your area, from tech expos to local art
              festivals. Join us today!
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-center lg:text-left">
            <div>
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/terms" className="hover:text-primary transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-primary transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-primary transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-primary transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-primary transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2025 Event Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
