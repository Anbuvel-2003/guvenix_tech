import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-[#1B75BB] "
    : "text-[#1B75BB] hover:border-[#1B75BB] border-white ";
  return (
    <button
      className={`${buttonStyles} rounded-[10px] border-2 md:!px-6 md:!py-3 !px-3 !py-1 md:text-xl text-[16px] cursor-pointer  `}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;