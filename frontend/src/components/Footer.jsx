import React from "react";
import {} from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">CPI Timeline</h2>
          <ul>
            <li className="mb-2 text-sm">
              <a
                href="mailto:techcluder@gmail.com"
                className="flex items-center"
              >
                <span className="mr-2">✉️</span> techcluder@gmail.com
              </a>
            </li>
            <li>
              <p className="flex items-center text-sm">
                <span className="mr-2">📍</span> CPI, 2 no gate, Chattogram
              </p>
            </li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">
                News
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">
                Gallery
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">
                Subscribe
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTelegram />
              </a>
            </div>
          </div>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">
                Support
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">
                Archive News
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="mt-10" />
      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8">
        &copy; 2024 CPI Timeline | All Rights Reserved By{" "}
        <a
          href="https://techcluder-college-project.netlify.app/"
          target="_blank"
          className=" text-blue-500"
        >
          TechCluder
        </a>
      </div>
    </footer>
  );
};

export default Footer;
