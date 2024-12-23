import clsx from "clsx";
import React from "react";
import Marker from "./Marker";

const Button = ({ icon, children, href, containerClassName, onClick, markerFill }) => {
  const Inner = () => {
    return (
      <>
        <span className="flex items-center relative min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
          <span className="absolute -left-0">
            <Marker markerFill={markerFill}/>
          </span>
          {icon && (
            <img
              src={icon}
              alt="circle"
              className="size-10 mr-5 object-contain z-10"
            />
          )}
          <span className="z-2 font-poppins uppercase base-bold text-p1">
            {children}
          </span>
        </span>
        <span className="glow-before glow-after" />
      </>
    );
  };


  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    >
        <Inner/>
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner/> 
    </button>
  );
};

export default Button;
