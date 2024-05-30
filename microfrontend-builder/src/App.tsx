import React from "react";

function App() {
  const AppStyles: React.CSSProperties = {
    textAlign: "center",
    height: "100%",
  };

  const AppHeaderStyles: React.CSSProperties = {
    backgroundColor: "#b35f15",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  };

  return (
    <div className="App" style={AppStyles}>
      <header className="App-header" style={AppHeaderStyles}>
        Builder MFE
      </header>
    </div>
  );
}

export default App;
