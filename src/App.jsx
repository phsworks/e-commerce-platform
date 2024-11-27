import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CreateBagPage from "./pages/CreateBagPage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailspage" element={<DetailsPage />} />
        <Route path="/createbag" element={<CreateBagPage />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
