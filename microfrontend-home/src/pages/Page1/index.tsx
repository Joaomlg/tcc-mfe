import React from "react";

function Page1() {
  const PageStyles: React.CSSProperties = {
    backgroundColor: "#cdcfd0",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
  };

  return <div style={PageStyles}>Home MFE - Page 1</div>;
}

export default Page1;
