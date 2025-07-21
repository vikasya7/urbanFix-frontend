import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] pt-12 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* App CTA Section */}
          <div className="bg-lime-500/10 border border-lime-400 rounded-xl p-6 mb-12 text-center backdrop-blur-md">
            <p className="mb-4 font-semibold text-white text-xl">📸 Get the App and Start Snapping</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12"
              />
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold mb-3 text-lime-300">About Us</h3>
              <ul className="space-y-2">
                <li className="hover:text-lime-400 cursor-pointer">About Us</li>
                <li className="hover:text-lime-400 cursor-pointer">In the News</li>
                <li className="hover:text-lime-400 cursor-pointer">How it Works</li>
                <li className="hover:text-lime-400 cursor-pointer">Our Business Model</li>
                <li className="hover:text-lime-400 cursor-pointer">Collaborate with us</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold mb-3 text-lime-300">Snappers</h3>
              <ul className="space-y-2">
                <li className="hover:text-lime-400 cursor-pointer">What is a Snapper?</li>
                <li className="hover:text-lime-400 cursor-pointer">What to Snap</li>
                <li className="hover:text-lime-400 cursor-pointer">Where to Snap</li>
                <li className="hover:text-lime-400 cursor-pointer">Events</li>
                <li className="hover:text-lime-400 cursor-pointer">Snapper Kit</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold mb-3 text-lime-300">Solvers</h3>
              <ul className="space-y-2">
                <li className="hover:text-lime-400 cursor-pointer">Who are our Solvers?</li>
                <li className="hover:text-lime-400 cursor-pointer">Local Government</li>
                <li className="hover:text-lime-400 cursor-pointer">Utilities</li>
                <li className="hover:text-lime-400 cursor-pointer">Universities</li>
                <li className="hover:text-lime-400 cursor-pointer">Solver Kit</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-semibold mb-3 text-lime-300">Support</h3>
              <ul className="space-y-2">
                <li className="hover:text-lime-400 cursor-pointer">Help Centre</li>
                <li className="hover:text-lime-400 cursor-pointer">Contact Us</li>
                <li className="hover:text-lime-400 cursor-pointer">Release Notes</li>
                <li className="hover:text-lime-400 cursor-pointer">Solver Portal</li>
                <li className="hover:text-lime-400 cursor-pointer">Refer a Friend</li>
              </ul>
            </div>
          </div>

          {/* Award Logos */}
          <div className="flex justify-center md:justify-end items-center gap-6 mt-12">
            <img
              src="https://seeklogo.com/images/G/good-design-award-logo-B48117D6C1-seeklogo.com.png"
              alt="Good Design Award"
              className="h-10"
            />
            <img
              src="https://seeklogo.com/images/G/good-design-award-logo-B48117D6C1-seeklogo.com.png"
              alt="Good Design Award Gold"
              className="h-10"
            />
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 mt-8">
            © 2025 UrbanFix. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;


