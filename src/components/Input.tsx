import React from "react";


interface InputProps {
    title: string;
    children?: React.JSX.Element;
}
  
export const Input = (props: InputProps) => {
    const {title} = props;
    const defaultClass =
      "flex input items-center h-[40px] w-[100px] px-4 py-2 cursor-pointer";
    return (
      <div
        className={
          defaultClass +
          " rounded-[100px] bg-white-100"
        }
      >
        <span className={"text-black"}>{title}</span>
      </div>
    );
  };