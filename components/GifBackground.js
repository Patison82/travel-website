import React from "react";

const GifBackground = ({ children }) => {
  return (
    <div className="relative w-full hide  overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/200.gif')" }}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GifBackground;
