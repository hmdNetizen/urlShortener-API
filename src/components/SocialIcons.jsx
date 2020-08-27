import React, { useState } from "react";

const SocialIcons = ({ d }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      width="24"
      height="24"
    >
      <path fill={isHovered ? "hsl(180, 66%, 49%)" : "#fff"} d={d} />
    </svg>
  );
};

export default SocialIcons;
