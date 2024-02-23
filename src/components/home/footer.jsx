import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";

function Footer() {
  const links = {
    twitter: "",
    github: "",
    linkedIn: "",
    leetcode: "",
  };
  return (
    <div className="bf">
      <div className="bf-1">Hi Dev</div>
      <div className="bf-2">
        <p>Desinged and built by</p>
        <p style={{ color: "#F58EED" }}>ShreeV.</p>
        <p>with</p>
        <p style={{ color: "#836CA3" }}>Flex</p>
        <p>and</p>
        <p style={{ color: "#836CA3" }}>#331c52</p>
      </div>
      <div className="bf-3">
        <button
          className="bf-3-b"
          onClick={() => {
            console.log(links.twitter);
          }}
        >
          <AiOutlineTwitter size={20} />
        </button>
        <button
          className="bf-3-b"
          onClick={() => {
            console.log(links.github);
          }}
        >
          <AiFillGithub size={20} />
        </button>
        <button
          className="bf-3-b"
          onClick={() => {
            console.log(links.linkedIn);
          }}
        >
          <AiFillLinkedin size={20} />
        </button>
        <button
          className="bf-3-b"
          onClick={() => {
            console.log(links.leetcode);
          }}
        >
          <TbBrandLeetcode size={20} />
        </button>
      </div>
    </div>
  );
}

export default Footer;
