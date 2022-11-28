import * as React from "react";
export const Button = () => {
  const handleClick = () => {
    alert("hi");
    console.log("Clicked !");
  };
  return <button onClick={handleClick}>i did a monorepo</button>;
};
