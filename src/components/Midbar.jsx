import React from "react";
import Message from "./looks/Message";

export default function Midbar() {
  return (
    <div className="midbar_container">
      <div className="heading">Midbar</div>
      <div className="task_container">
        <Message comp_id={2} />
      </div>
    </div>
  );
}
