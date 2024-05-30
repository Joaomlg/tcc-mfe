import React from "react";

function App() {
  const AppStyles: React.CSSProperties = {
    textAlign: "center",
    height: "100%",
  };

  const AppHeaderStyles: React.CSSProperties = {
    backgroundColor: "#282c34",
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
        Header MFE
      </header>
    </div>
  );
}

export default App;
