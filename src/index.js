import React from "react";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("mainContainer");
const root = createRoot(domNode);

const App = () => {
  return (
    <div>
      <h1>Hello, webpack!</h1>
      <h1>Hello, React!</h1>
    </div>
  );
};

root.render(<App />);
