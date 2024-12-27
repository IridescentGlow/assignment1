import React from "react";
import "./GroupList.css"; // Assuming CSS is in the same directory

const groups = ["Developers", "Designers", "Product Managers", "QA Engineers", "Marketing Team"];

const GroupList = () => {
  return (
    <div className="group-list-container">
      <h1 className="title">Group Names</h1>
      <ul className="group-list">
        {groups.map((group, index) => (
          <li key={index} className="group-item">
            {group}
          </li>
        ))}
      </ul>
      <img 
        src="/Image/PngItem_4377099.png" 
        alt="Placeholder" 
        className="group-image"
      />
    </div>
  );
};

export default GroupList;
