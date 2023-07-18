import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        background: "white",
      }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
