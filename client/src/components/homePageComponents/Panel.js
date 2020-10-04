import React from "react";

export default function Panel({ text, image, color }) {
  const sectionStyle = {
    color: color,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };

  return (
    <div className="panel" style={sectionStyle}>
      <div className="panel-text">
        <h2>{text}</h2>
      </div>
    </div>
  );
}
