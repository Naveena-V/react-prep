import React from "react";
export default React.memo(function Display({ displayLabel, items }) {
  console.log("Dispaly - ", displayLabel);
  return (
    <div>
      <p>Displaying - {displayLabel}</p>
      <div>
        {items?.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
});
