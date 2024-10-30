// src/components/Footer.jsx
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-purple-primary pt-[235px]">
      <div className="mx-auto px-[252px] grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        {/* Logo and Email Section */}
        <div className="md:col-span-4">
          <Logo />
          <div className="text-xs text-gray-400 mb-6">
            Brand Boldly, Market Smartly
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full bg-white rounded px-4 py-2 text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Services Links */}
        <div className="md:col-span-4">
          <h3 className="text-white text-4xl font-semibold mb-4">
            Our Services
          </h3>
          <div className="grid grid-cols-2 text-md gap-x-24 gap-y-2">
            <a href="#" className="text-gray-300 hover:text-white">
              Brand Identity
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Meta Ads
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Social Media Marketing
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Lead Generation
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Influencer Marketing
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              PR And Publicity
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Political Campaigns
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Brand Films And Advertising
            </a>
          </div>
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-white text-3xl font-medium mb-4">About</h3>
              </div>
              <div>
                <h3 className="text-white text-3xl font-medium mb-4">
                  Why Choose Us?
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t bg-purple-dark border-gray-800">
        <p className="text-gray-400 text-center footer-text">
          Copyright © Purple Haze Media. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
