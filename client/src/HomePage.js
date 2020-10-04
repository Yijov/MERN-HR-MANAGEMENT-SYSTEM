import React from "react";
import Card from "./components/homePageComponents/Card";
import Panel from "./components/homePageComponents/Panel";

import Image2 from "./images/image2.jpg";
import Image5 from "./images/image5.png";

export default function HomePage() {
  return (
    <div className="page">
      <h1>Welcome</h1>

      <div className="cards-section">
        <Card text="Attendance" image={Image2} color="white" />
        <Card text="Payroll" image={Image2} color="white" />
        <Card text="Reports" image={Image2} color="white" />
        <Card text="Vacants" image={Image2} color="white" />
      </div>
      <div className="panels-section">
        <Panel text="Projects" image={Image5} color="white" />
        <Panel text="Management" image={Image2} color="white" />
        <Panel text="Users" image={Image5} color="white" />
      </div>
    </div>
  );
}
