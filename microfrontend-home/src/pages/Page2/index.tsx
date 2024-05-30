import React from "react";

function Page2() {
  const PageStyles: React.CSSProperties = {
    backgroundColor: "#e6e6e6",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
  };

  return <div style={PageStyles}>Home MFE - Page 2</div>;
}

export default Page2;
