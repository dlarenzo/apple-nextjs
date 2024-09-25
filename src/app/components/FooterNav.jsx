"use client";
import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const section1s = {
  "Shop and Learn": [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "AirTag",
    "Accessories",
    "Gift Cards",
  ],

  "Apple Wallet": ["Apple Card", "Apple Pay", "Apple Cash"],
};

const section2s = {
  Account: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],

  Entertainment: [
    "Apple One",
    "Apple TV+",
    "Apple Music",
    "Apple Arcade",
    "Apple Fitness+",
    "Apple News+",
    "Apple Podcasts",
    "Apple Books",
  ],
};

const section3s = {
  "Apple Store": [
    "Find a Store",
    "Genius Bar",
    "Today at Apple",
    "Group Reservations",
    "Apple Camp",
    "Apple Store App",
    "Certified Refurbished",
    "Apple Trade In",
    "Financing",
    "Carrier Deals at Apple",
    "Order Status",
    "Shopping Help",
  ],
};

const section4s = {
  "For Business": ["Apple and Business", "Shop for Business"],

  "For Education": ["Apple and Education", "Shop for K-12", "Shop for College"],

  "For Healthcare": [
    "Apple in Healthcare",
    "Mac in Healthcare",
    "Health on Apple Watch",
    "Health Records on iPhone and iPad",
  ],
  "For Government": ["Shop for Government", "Shop for Veterans and Military"],
};

const section5s = {
  "Apple Values": [
    "Accessibility",
    "Education",
    "Environment",
    "Inclusion and Diversity",
    "Privacy",
    "Racial Equity and Justice",
    "Supply Chain",
  ],

  "About Apple": [
    "Newsroom",
    "Apple Leadership",
    "Career Opportunities",
    "Investors",
    "Ethics & Compliance",
    "Events",
    "Contact Apple",
  ],
};

const FooterNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarOpen2, setNavbarOpen2] = useState(false);
  const [navbarOpen3, setNavbarOpen3] = useState(false);
  const [navbarOpen4, setNavbarOpen4] = useState(false);
  const [navbarOpen5, setNavbarOpen5] = useState(false);

  return (
    <div className="w-full bg-[#F5F5F7] text-slate-500 text-xs px-5 lg:px-0">
      <div className="max-w-[950px] mx-auto grid grid-cols-1 lg:grid-cols-5">
        {/* SECTION 1 */}
        <div>
          {Object.keys(section1s).map((section1) => (
            <div key={section1} className="mb-6 border-b-2 lg:border-b-0">
              <div className="flex justify-between text-black font-semibold">
                <h2 className="text-xs mb-2">{section1}</h2>
                <div className="mobile-menu block lg:hidden">
                  {!navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)}>
                      <ChevronDownIcon className="h-5 w-5" />
                    </button>
                  ) : (
                    <button onClick={() => setNavbarOpen(false)}>
                      <ChevronUpIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>

              <ul
                className={`list-disc ${
                  navbarOpen ? "block" : "hidden"
                } lg:block md:w-auto`}
              >
                {section1s[section1].map((option) => (
                  <li key={option} className="text-gray-700 list-none mb-2">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SECTION 2 */}
        <div>
          {Object.keys(section2s).map((section2) => (
            <div key={section2} className="mb-6 border-b-2 lg:border-b-0">
              <div className="flex justify-between text-black font-semibold">
                <h2 className="text-xs mb-2">{section2}</h2>
                <div className="mobile-menu block lg:hidden">
                  {!navbarOpen2 ? (
                    <button onClick={() => setNavbarOpen2(true)}>
                      <ChevronDownIcon className="h-5 w-5" />
                    </button>
                  ) : (
                    <button onClick={() => setNavbarOpen2(false)}>
                      <ChevronUpIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
              <ul
                className={`list-disc ${
                  navbarOpen2 ? "block" : "hidden"
                } lg:block md:w-auto`}
              >
                {section2s[section2].map((option) => (
                  <li key={option} className="text-gray-700 list-none mb-2">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SECTION 3 */}
        <div>
          {Object.keys(section3s).map((section3) => (
            <div key={section3} className="mb-6 border-b-2 lg:border-b-0">
              <div className="flex justify-between text-black font-semibold">
                <h2 className="text-xs mb-2">{section3}</h2>
                <div className="mobile-menu block lg:hidden">
                  {!navbarOpen3 ? (
                    <button onClick={() => setNavbarOpen3(true)}>
                      <ChevronDownIcon className="h-5 w-5" />
                    </button>
                  ) : (
                    <button onClick={() => setNavbarOpen3(false)}>
                      <ChevronUpIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
              <ul
                className={`list-disc ${
                  navbarOpen3 ? "block" : "hidden"
                } lg:block md:w-auto`}
              >
                {section3s[section3].map((option) => (
                  <li key={option} className="text-gray-700 list-none mb-2">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SECTION 4 */}
        <div>
          {Object.keys(section4s).map((section4) => (
            <div key={section4} className="mb-6 border-b-2 lg:border-b-0">
              <div className="flex justify-between text-black font-semibold">
                <h2 className="text-xs mb-2">{section4}</h2>
                <div className="mobile-menu block lg:hidden">
                  {!navbarOpen4 ? (
                    <button onClick={() => setNavbarOpen4(true)}>
                      <ChevronDownIcon className="h-5 w-5" />
                    </button>
                  ) : (
                    <button onClick={() => setNavbarOpen4(false)}>
                      <ChevronUpIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
              <ul
                className={`list-disc ${
                  navbarOpen4 ? "block" : "hidden"
                } lg:block md:w-auto`}
              >
                {section4s[section4].map((option) => (
                  <li key={option} className="text-gray-700 list-none mb-2">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SECTION 5 */}
        <div>
          {Object.keys(section5s).map((section5) => (
            <div key={section5} className="mb-6 border-b-2 lg:border-b-0">
              <div className="flex justify-between text-black font-semibold">
                <h2 className="text-xs mb-2">{section5}</h2>
                <div className="mobile-menu block lg:hidden">
                  {!navbarOpen5 ? (
                    <button onClick={() => setNavbarOpen5(true)}>
                      <ChevronDownIcon className="h-5 w-5" />
                    </button>
                  ) : (
                    <button onClick={() => setNavbarOpen5(false)}>
                      <ChevronUpIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
              <ul
                className={`list-disc ${
                  navbarOpen5 ? "block" : "hidden"
                } lg:block md:w-auto`}
              >
                {section5s[section5].map((option) => (
                  <li key={option} className="text-gray-700 list-none mb-2">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
