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
          <button
            onClick={() => {
              console.log("scroll to form");
            }}
            className="txt-sp-1"
          >
            Let's talk!
          </button>
        </div>
        {/* <div>Photo Area</div> */}
      </div>

      <div className="b1-f">
        <div className="b1-fc">
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
              PROJECTS
              <br /> COMPLETED
            </div>
          </div>
        </div>
        <div className="image-gallery">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
}

export default Block1;
