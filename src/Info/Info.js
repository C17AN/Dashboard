import React from "react";
import Weather from "./Weather";
import Clock from "./Clock";
import Air from "./Air";

const Info = () => {
  return (
    <div>
      <Air></Air>
      <Clock></Clock>
      <Weather></Weather>
    </div>
  );
};

export default Info;
