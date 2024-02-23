import { AiFillGithub } from "react-icons/ai";

import { MdOnlinePrediction } from "react-icons/md";
import p1 from "./project-images/p1.png";
import ImageGallery from "./logo/image";

function Block2() {
  const projectArray = [
    {
      image: p1,
      heading: "Heading dasdgfdf",
      subHeading: "SubHeading sdfsdf dsfsdf sdfsdfds sdfsdfsd fsdfsd ddfdfg",
      liveLink: "jiya jiya",
      codeLink: "moye moye",
    },
    {
      image: p1,
      heading: "Heading dasdgfdf",
      subHeading: "SubHeading sdfsdf dsfsdf sdfsdfds sdfsdfsd fsdfsd ddfdfg",
      liveLink: "jiya jiya",
      codeLink: "moye moye",
    },
    {
      image: p1,
      heading: "Heading dasdgfdf",
      subHeading: "SubHeading sdfsdf dsfsdf sdfsdfds sdfsdfsd fsdfsd ddfdfg",
      liveLink: "jiya jiya",
      codeLink: "moye moye",
    },
    {
      image: p1,
      heading: "Heading dasdgfdf",
      subHeading: "SubHeading sdfsdf dsfsdf sdfsdfds sdfsdfsd fsdfsd ddfdfg",
      liveLink: "jiya jiya",
      codeLink: "moye moye",
    },
    {
      image: p1,
      heading: "Heading dasdgfdf",
      subHeading: "SubHeading sdfsdf dsfsdf sdfsdfds sdfsdfsd fsdfsd ddfdfg",
      liveLink: "jiya jiya",
      codeLink: "moye moye",
    },
    {
      image: p1,
      heading: "Heading dasdgfdf",
      subHeading: "SubHeading sdfsdf dsfsdf sdfsdfds sdfsdfsd fsdfsd ddfdfg",
      liveLink: "jiya jiya",
      codeLink: "moye moye",
    },
    {
      image: p1,
      heading: "Heading dasdgfdf",
      subHeading: "SubHeading sdfsdf dsfsdf sdfsdfds sdfsdfsd fsdfsd ddfdfg",
      liveLink: "jiya jiya",
      codeLink: "moye moye",
    },
    {
      image: p1,
      heading: "Heading dasdgfdf",
      subHeading: "SubHeading sdfsdf dsfsdf sdfsdfds sdfsdfsd fsdfsd ddfdfg",
      liveLink: "jiya jiya",
      codeLink: "moye moye",
    },
  ];
  return (
    <div className="b2">
      <div className="b2-1">
        <div className="b2-0-b">
          <div className="b2-h">About Me</div>
          <div className="b2-txt">
            I am a creative designer and developer, who aims to work with small
            businesses and marginalized communities to bring their passions to
            life. I offer both design and development services of web
            applications or websites!
          </div>
        </div>
      </div>
      <div className="b2-2">
        <div className="b2-0-b">
          <div className="b2-h">My Skills</div>
          <div className="b2-txt">Technologies I've been working with</div>
          <div className="image-gallery2">
            <ImageGallery count={10}/>
          </div>
        </div>
      </div>
      <div className="b2-3">
        <div className="b2-h">My Projects</div>
        <div className="b2-txt">Some Things I've built so far.</div>
        <div className="cardContainer">
          <div className="cC2">
            {projectArray.map((item) => {
              return projectCard(
                item.image,
                item.heading,
                item.subHeading,
                item.liveLink,
                item.codeLink
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function projectCard(
  src = "",
  heading = "",
  discription = "",
  liveLink = "",
  codeLink = ""
) {
  return (
    <div className="pCardBox">
      <div className="pCB1">
        <img
          src={src}
          className="pCardImage"
          hidden={src === "" ? true : false}
        />
        <div className="b2-h2">{heading}</div>
        <div className="b2-txt2">{discription}</div>
      </div>
      <div className="pCB2">
        <button
          onClick={() => {
            console.log(liveLink);
          }}
          className="pCBB"
          style={{ display: liveLink === "" ? "none" : "flex" }}
        >
          <MdOnlinePrediction size={20} /> <div>View Live</div>
        </button>
        <button
          onClick={() => {
            console.log(codeLink);
          }}
          className="pCBB"
          style={{ display: codeLink === "" ? "none" : "flex" }}
        >
          <AiFillGithub size={18} /> <div>View Code</div>
        </button>
      </div>
    </div>
  );
}

export default Block2;
