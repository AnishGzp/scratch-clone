import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSize } from "../../redux/looks/looks";

export default function Size({ comp_id }) {
  const change = useSelector((state) => state.looks.size);
  const dispatch = useDispatch();

  const [size, setSize] = useState(0);

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  const handleClick = () => {
    dispatch(changeSize(size));
  };

  return (
    <div className="message" id={comp_id}>
      <div className="message_container">
        <span>Size</span>
        <input type="number" value={size} onChange={handleChange} />
      </div>
      <button onClick={handleClick}>Size {change}</button>
    </div>
  );
}
