import React from "react";
export default React.memo(function Title() {
  console.log("Title");
  return (
    <div>
      <p>Title: Products and Users</p>
    </div>
  );
});
