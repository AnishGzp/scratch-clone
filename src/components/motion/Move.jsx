import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeX } from "../../redux/motion/motion.js";

export default function Move({ comp_id }) {
  const change = useSelector((state) => state.motion.moveX);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeX(newValue));
  };

  return (
    <div className="moveX" id={comp_id} draggable>
      <span>Move X</span>
      <input type="number" value={change} onChange={handleChange} />
      <span>steps</span>
    </div>
  );
}
