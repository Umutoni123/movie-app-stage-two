import React from "react";
import instagram from "./../img/fa-brands_instagram.png";
import twitter from "./../img/fa-brands_twitter.png";
import youtube from "./../img/fa-brands_youtube.png";
import facebook from "./../img/Vector.png";
import '../css/Footer.css'

function Footer() {
  return (
    <div className="container flex flex-col justify-center items-center space-y-3 py-24">
      <ul className="flex space-x-5">
        <li>
          <img src={facebook} alt="facebook" />
        </li>
        <li>
          <img src={instagram} alt="instagram" />
        </li>
        <li>
          <img src={twitter} alt="twitter" />
        </li>
        <li>
          <img src={youtube} alt="youtube" />
        </li>
      </ul>
      <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-3 font-bold">
        <li className="hover:underline">Conditions of Use</li>
        <li className="hover:underline">Privacy & Policy</li>
        <li className="hover:underline">Press Room</li>
      </ul>
      <p className="text-base text-[#6B7280] text-center">
        © 2021 MovieBox by Adriana Eka Prayudha
      </p>
    </div>
  );
}

export default Footer;