import React from "react";
import { socials } from "../data/dummy";
import headset from "../data/headset.svg";
const Footer = () => (
  <footer className="relative container mx-auto px-3 sm:px-0">
    <div className="footer-gradient" />
    <div className="py-10">
      <div className="flex-between flex-wrap gap-5 py-10">
        <p className="font-bold md:text-6xl text-4xl text-gray-200">
          Enter the <span className="text-gradient">Info Pro</span>
        </p>
        <button
          type="button"
          className="flex-center h-fit py-4 px-6 bg-purple-500 rounded-full gap-5"
        >
          <img src={headset} alt="headset" className="w-10 object-contain" />
          <span className="font-semibold text-lg text-gray-200">
            Enter Pro Info
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-20 h-[2px] bg-gray-200 opacity-10" />
        <div className="flex-between flex-col md:flex-row md:flex-between gap-5">
          <h4 className="font-bold text-2xl text-gray-200">Pro Info</h4>
          <p className="font-normal text-lg text-gray-200 text-center md:text-left">
            Copyright © 2022 - 2023 Pro Info. All rights reserved.
          </p>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-6 h-6 object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
