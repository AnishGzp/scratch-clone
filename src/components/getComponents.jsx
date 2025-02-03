import React from "react";
import Move from "./motion/Move";
import MoveY from "./motion/MoveY";
import Rotation from "./motion/Rotation";
import Message from "./looks/Message";
import Think from "./looks/Think";
import Size from "./looks/Size";
import HideMessage from "./looks/HideMessage";
import Event from "./event/Event";

// Fetch components based on the key
export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE":
      return <Move comp_id={id} />;

    case "MOVE_Y":
      return <MoveY comp_id={id} />;

    case "ROTATE":
      return <Rotation comp_id={id} />;

    case "MESSAGE":
      return <Message comp_id={id} />;

    case "THINK":
      return <Think comp_id={id} />;

    case "SIZE":
      return <Size comp_id={id} />;

    case "HIDE_MESSAGE":
      return <HideMessage comp_id={id} />;

    case "DISPLAY":
      return <Event comp_id={id} />;

    default:
      return null;
  }
};
