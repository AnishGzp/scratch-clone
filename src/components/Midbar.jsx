import React, { useState } from "react";
import { getMidbarComponents } from "./getMidbarComponents";

export default function Midbar() {
  const [categories, setCategories] = useState([
    {
      id: 0,
      components: ["MOVE"],
    },
  ]);

  const handleAddTask = () => {
    setCategories((prev) => {
      const addCategory = { id: categories.length, components: [] };

      const updatedCategory = [...prev, addCategory];

      return updatedCategory;
    });
  };

  return (
    <div className="midbar_container">
      <div className="midbar_heading">
        <div className="heading">Midbar</div>
        <div className="button" onClick={handleAddTask}>
          Add task+
        </div>
      </div>
      <div className="task_container">
        {categories.map(({ id, components }, index) => (
          <div key={index} className="task_content" id={id}>
            <button>Run</button>
            {components.map((x, index) => getMidbarComponents(x, index))}
          </div>
        ))}
      </div>
    </div>
  );
}
