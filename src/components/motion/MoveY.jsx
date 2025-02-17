import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeY } from "../../redux/motion/motion.js";

export default function Move({ comp_id }) {
  const change = useSelector((state) => state.motion.moveY);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeY(newValue));
  };

  return (
    <div className="moveY" id={comp_id} draggable>
      <span>Move Y</span>
      <input type="number" value={change} onChange={handleChange} />
      <span>steps</span>
    </div>
  );
}
