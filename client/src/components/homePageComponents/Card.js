import React from "react";

export default function Card({ text, image, color }) {
  const sectionStyle = {
    color: color,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };

  return (
    <div className="card" style={sectionStyle}>
      <div className="card-text">
        <h3>{text}</h3>
      </div>
    </div>
  );
}
