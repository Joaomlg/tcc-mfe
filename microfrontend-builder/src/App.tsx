import React from "react";

function App() {
  const AppStyles: React.CSSProperties = {
    textAlign: "center",
    height: "100%",
  };

  const AppContentStyles: React.CSSProperties = {
    backgroundColor: "#8eadf0",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  };

  return (
    <div style={AppStyles}>
      <div style={AppContentStyles}>
        Builder MFE
      </div>
    </div>
  );
}

export default App;
