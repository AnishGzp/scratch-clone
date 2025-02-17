import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rotate } from "../../redux/motion/motion.js";

export default function Rotation({ comp_id }) {
  const change = useSelector((state) => state.motion.rotationAdd);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(rotate(newValue));
  };

  return (
    <div className="moveX" id={comp_id} draggable>
      <span>Rotate by: </span>
      <input type="number" value={change} onChange={handleChange} />
      <span>degree</span>
    </div>
  );
}
