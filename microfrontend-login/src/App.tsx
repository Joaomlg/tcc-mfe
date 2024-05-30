import React, { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { emitLoginEvent } from "./utils/events";

function App() {
  const AppStyles: React.CSSProperties = {
    textAlign: "center",
    height: "100%",
  };

  const AppContentStyles: React.CSSProperties = {
    backgroundColor: "#282c34",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    gap: "24px",
  };

  const LoginButtonStyles: React.CSSProperties = {
    padding: "12px 24px",
    borderRadius: "12px",
    border: "none",
    fontWeight: "bold",
    color: "white",
    background: "blue",
    cursor: "pointer",
  };

  const handleButtonClick = useCallback(async () => {
    const sessionId = uuidv4();
    emitLoginEvent(sessionId);
  }, []);

  return (
    <div style={AppStyles}>
      <div style={AppContentStyles}>
        <span>Login MFE</span>
        <button style={LoginButtonStyles} onClick={handleButtonClick}>
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
