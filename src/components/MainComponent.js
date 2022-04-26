import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Main = (props) => {
  const [dishes, setDishes] = useState(DISHES);
  const HomePage = () => {
    return <Home />;
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={HomePage} />
        <Route path="/menu" element={<Menu dishes={dishes} />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default Main;
