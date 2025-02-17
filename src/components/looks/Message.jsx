import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeDisplayMessage,
  changeMessage,
  changeThink,
} from "../../redux/looks/looks.js";

export default function Message({ comp_id }) {
  const change = useSelector((state) => state.looks.message);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeMessage(e.target.value));
  };

  const handleClick = () => {
    dispatch(changeDisplayMessage(true));
    dispatch(changeThink(false));
  };

  return (
    <div className="message" id={comp_id}>
      <div className="message_container">
        <span>Message</span>
        <input type="text" value={change} onChange={handleChange} />
      </div>
      <button onClick={handleClick}>Say {change}</button>
    </div>
  );
}
