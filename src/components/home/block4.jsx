import { useState } from "react";

function Block4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      style={{ display: "flex", flexDirection: "row", backgroundColor: "light blue" }}
    >
      <div style={{ display: "flex", flexDirection: "coloumn" }}>
        <div>Let's discuss on something cool together</div>
        <div>I'm interested in</div>
        <div>Ecom</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          placeholder="Your Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          placeholder="Your Email"
        />
        <textarea
          type="text"
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
          placeholder="Your Message"
        />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Block4;
