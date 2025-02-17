import React from "react";
import { looks, motion, event } from "./sidebarComponent";
import { getComponent } from "./getComponents";

export default function Sidebar() {
  const categories = [
    { title: "Motion", id: "motion", components: motion },
    { title: "Looks", id: "look", components: looks },
    { title: "Event", id: "event", components: event },
  ];

  return (
    <div className="sidebar_container">
      <div className="heading">Sidebar</div>
      <div className="motion_container">
        {categories.map(({ title, id, components }, index) => (
          <div className="motion" key={index}>
            <div className="motion_heading">{title}</div>
            {components.map((x, i) => (
              <div className="motion_control" key={i}>
                {getComponent(x, x)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
