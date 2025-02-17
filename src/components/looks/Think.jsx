import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeDisplayMessage,
  changeMessage,
  changeThink,
} from "../../redux/looks/looks.js";

export default function Think({ comp_id }) {
  const change = useSelector((state) => state.looks.message);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeMessage(e.target.value));
  };

  const handleClick = () => {
    dispatch(changeDisplayMessage(true));
    dispatch(changeThink(true));
  };

  return (
    <div className="message" id={comp_id}>
      <div className="message_container">
        <span>Think</span>
        <input type="text" value={change} onChange={handleChange} />
      </div>
      <button onClick={handleClick}>Think {change}</button>
    </div>
  );
}
