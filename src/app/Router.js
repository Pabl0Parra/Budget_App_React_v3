import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BudgetApp from "../pages/BudgetApp";
import NavBar from "../components/NavBar";

const Router = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/BudgetApp/" element={<BudgetApp />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
