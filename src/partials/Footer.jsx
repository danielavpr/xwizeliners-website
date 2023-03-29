import React from "react";
import { Link } from "react-router-dom";
import slack from "../images/slack.svg";
import linkedin from "../images/linkedin.svg";
import xwizeliners from "../images/xwizeliners.png";

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <img src={xwizeliners} alt="xwizeliners" className="w-40" />
              </div>
              <div className="text-gray-400">
                Connect, share and grow together.
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7">

              {/* 2nd block */}
              <div className="text-sm text-right">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="#"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Manifesto
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Rules of the game
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="https://forms.gle/TXFyr3pQf5QaGjKK7"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Join the community
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="https://forms.gle/hnXi95xpM5uz78ni6"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Become an ambassador
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="https://forms.gle/UuhBzbqEQ96zmGJ47"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Organize an event
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">Created by Cobud</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
