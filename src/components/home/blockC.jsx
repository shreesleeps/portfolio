import { useState } from "react";
import { IoIosSend } from "react-icons/io";
function Block3() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const interests = ["web", "ecommerce", "sas", "cloud"];

  return (
    <div className="b3">
      <div className="b3-1">
        <div className="b3-1-1">
          <p className="b3-h1">Let's discuss</p>
          <div className="b3-1-1-2">
            <p className="b3-h1">on something</p> <p className="b3-h2">cool</p>{" "}
            <p className="b3-h1">together</p>
          </div>
        </div>
        <div className="b3-1-2">
          <p>I'm interested in</p>
          <div className="b3-1-2-1">
            {interests.map((item, index) => {
              return (
                <div className={index === 0 ? "b3-sp b3-sp0" : "b3-sp"}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="b3-2">
        <input
          className="b3-i"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Your Name"
        />
        <input
          className="b3-i"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Your Email"
        />
        <textarea
          className="b3-ta"
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Your Message"
        />
        <button className="b3-b">
          <IoIosSend size={18} />
          Submit
        </button>
      </div>
    </div>
  );
}

export default Block3;
