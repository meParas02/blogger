import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Index from "./Index";
import Error from "./404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App
