import React from "react";
import ImageGallery from "./logo/image";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";

function Block1() {
  return (
    <div className="" style={{ display: "flex", flexDirection: "column" }}>
      <div className="b1">
        <div className="b1-1">
          <div className="txt1">Hello 👋,</div>
          <div className="txt2">I'm a web</div>
          <div className="txt2">Developer</div>
          <div className="txt3">I build things for web</div>
          <div className="icons1">
            <AiOutlineTwitter />
            <AiFillGithub />
            <AiFillLinkedin />
            <TbBrandLeetcode />
          </div>
        </div>
        {/* <div>Photo Area</div> */}
      </div>

      <div className="b1-f">
        <div className="b1-f1">
          <div className="txt4">1</div>
          <div className="txt5">
            YEAR OF
            <br /> EXPERIENCE
          </div>
        </div>
        <div className="b1-f1">
          <div className="txt4">5</div>
          <div className="txt5">
            PROJECTS COMPLETED
            <br /> AROUND THE WORLD
          </div>
        </div>
        <ImageGallery  />
      </div>
    </div>
  );
}

export default Block1;
