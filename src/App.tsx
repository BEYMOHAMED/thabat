import React, { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import AlbanPage from "./pages/AlbanPage/AlbanPage";

function App() {
  const [currentPage, setCurrentPage] = useState("Aseeb");
  return (
    <div>
      {currentPage === "Aseeb" ? (
        <HomePage setCurrentPage={setCurrentPage} />
      ) : (
        <AlbanPage setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
