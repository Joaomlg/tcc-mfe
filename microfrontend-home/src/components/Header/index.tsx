import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const AppHeaderStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    padding: "16px",
    justifyContent: "center",
  };

  const AppHeaderItemStyles: React.CSSProperties = {
    cursor: "pointer",
  };

  return (
    <div style={AppHeaderStyles}>
      <div style={AppHeaderItemStyles} onClick={() => navigate('page1')}>Página 1</div>
      <div style={AppHeaderItemStyles} onClick={() => navigate('page2')}>Página 2</div>
      <div style={AppHeaderItemStyles} onClick={() => navigate('page3')}>Página 3</div>
    </div>
  );
}

export default App;
