import React from "react";
import { logout, navigate } from "./utils/events";

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
    color: "white",
    gap: "12px",
  };

  const TitleStyles: React.CSSProperties = {
    fontSize: "calc(10px + 2vmin)",
  };

  const NavigationStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "24px",
  };

  const NavigationItemStyles: React.CSSProperties = {
    cursor: "pointer",
  };

  const NavigationLogoutItemStyles: React.CSSProperties = {
    cursor: "pointer",
    color: "#ce0101",
  };

  return (
    <div style={AppStyles}>
      <header style={AppHeaderStyles}>
        <div style={TitleStyles}>Header MFE</div>
        <div style={NavigationStyles}>
          <div style={NavigationItemStyles} onClick={() => navigate("/home")}>
            Home
          </div>
          <div
            style={NavigationItemStyles}
            onClick={() => navigate("/builder")}
          >
            Builder
          </div>
          <div
            style={NavigationItemStyles}
            onClick={() => navigate("/attendance")}
          >
            Atendimento
          </div>
          <div
            style={NavigationItemStyles}
            onClick={() => navigate("/analytics")}
          >
            Análise
          </div>
          <div style={NavigationLogoutItemStyles} onClick={() => logout()}>
            Sair
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
