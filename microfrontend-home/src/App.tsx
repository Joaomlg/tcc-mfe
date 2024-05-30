import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./pages/router";

function App() {
  const AppStyles: React.CSSProperties = {
    textAlign: "center",
    height: "100%",
  };

  return (
    <div style={AppStyles}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
