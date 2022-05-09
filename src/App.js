import React from "react";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Header />
        }
      />
    </Routes>
  );
}

export default App;
