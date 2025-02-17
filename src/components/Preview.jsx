import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Preview() {
  // motion
  const valueX = useSelector((state) => state.motion.moveX);
  const valueY = useSelector((state) => state.motion.moveY);
  const rotation = useSelector((state) => state.motion.rotationAdd);

  // looks
  const message = useSelector((state) => state.looks.message);
  const displayMessage = useSelector((state) => state.looks.displayMessage);
  const think = useSelector((state) => state.looks.think);
  const size = useSelector((state) => state.looks.size);

  const dispatch = useDispatch();

  const sprite_container_styles = {
    // Motion styles
    transform: `translateX(${valueX}px) translateY(${valueY}px)`,
  };

  const sprite_styles = {
    transform: `rotate(${rotation}deg)`,
    scale: `${size}`,
  };

  return (
    <div className="preview_container">
      <div className="heading">Preview</div>
      <div className="sprite_container" style={sprite_container_styles}>
        {displayMessage ? <div className="message_box">{message}</div> : null}
        {think ? <div className="think"></div> : null}

        <div className="sprite" style={sprite_styles}>
          <img src="/sprite.svg" alt="sprite" />
        </div>
      </div>
    </div>
  );
}
