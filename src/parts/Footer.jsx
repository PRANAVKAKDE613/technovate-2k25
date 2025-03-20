import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNavigate = (platform) => {
    const urls = {
      Instagram: 'https://www.instagram.com/technovate_pccoer/',
      Twitter: 'https://www.X.com/technovate_pccoer/'
    };
    window.location.href = urls[platform] || "#";
  };

  const handleSubscribe = () => {
    if (email) {
      alert("You Will Get Notifications");
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleEvent = (event) => {
    const routes = {
      Calender: "/",
      Categories: "/Categories",
      Register: "/Register",
      Past_Events: "/"
    };
    navigate(routes[event] || "/");
  };

  return (
    <div className="bg-purple-950 text-white py-10 px-6 mt-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Navigation Links */}
        <section >
          <h3 className="text-lg font-semibold text-gray-200">Explore</h3>
          <ul className="list-none space-y-2 text-gray-400 ">
            {["Calender", "Categories", "Register", "Past_Events"].map((item) => (
              <li key={item} onClick={() => handleEvent(item)} className="cursor-pointer hover:text-purple-300 transition">
                 {item.replace("_", " ")}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact & Subscription */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-200">Contact Us</h3>
          <p className="text-gray-400">Email: college@pccoer.in</p>
          <p className="text-gray-400 mb-4">Phone: +91 73683583</p>
          <input
            type="email"
            className="w-full px-3 py-2 rounded-lg bg-purple-800 text-gray-200 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button 
            onClick={handleSubscribe} 
            className="w-full mt-3 bg-gradient-to-r from-purple-600 to-purple-400 px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            Subscribe
          </button>
        </section>

        {/* Social & Sponsors */}
        <section className="justify-flex-end">
          <h3 className="text-lg font-semibold text-gray-200">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <span onClick={() => handleNavigate("Instagram")} className="cursor-pointer hover:text-purple-300 transition hover:scale-110">
              <InstagramIcon fontSize="large"/>
            </span>
            <span onClick={() => handleNavigate("Twitter")} className="cursor-pointer hover:text-purple-300 transition hover:scale-110">
              <XIcon fontSize="large"/>
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-200 mt-6">Sponsors & Partners</h3>
          <h5>Name of person</h5>
          <h5>Name of person</h5>
          <p onClick={() => handleEvent('sponser')} className="text-gray-400 cursor-pointer hover:text-purple-300 transition">
            [Sponsor Logo]
          </p>
        </section>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        <span>Privacy Policy</span> | <span> Terms of Use</span> | <span>Code of Conduct</span>
        <p className="mt-1">© 2023 PCCOER. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
