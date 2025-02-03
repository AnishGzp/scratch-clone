import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Event({ comp_id }) {
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const handleClick = () => {
    toast.success(msg);
  };

  return (
    <div className="message event">
      <div className="message_container">
        <span>Message</span>
        <input type="text" value={msg} onChange={handleChange} />
      </div>
      <button onClick={handleClick}>Say {msg}</button>
    </div>
  );
}
