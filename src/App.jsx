import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CreateBagPage from "./pages/CreateBagPage.jsx";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";

function App() {
  const [selectedBag, setSelectedBag] = useState("");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/detailspage"
          element={
            <DetailsPage selectedBag={selectedBag} isDisabled={isDisabled} colorsSelectionArray= {colorsSelectionArray} />
          }
        />
        <Route
          path="/createbag"
          element={
            <CreateBagPage
              selectedBag={selectedBag}
              setSelectedBag={setSelectedBag}
              isDisabled={isDisabled}
              setIsDisabled={setIsDisabled}
              colorsSelectionArray = {colorsSelectionArray}
              setColorsSelectionArray = {setColorsSelectionArray}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
