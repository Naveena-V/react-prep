import React from "react";
export default React.memo(function Button({ btnLable, handleClick }) {
  console.log("Button - ", btnLable);
  const item = btnLable === "addProduct-button" ? "Product_" : "User_";
  return <button onClick={() => handleClick(item)}>{btnLable}</button>;
});
