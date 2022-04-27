import React, { useState } from "react";
import DishDetail from "./DishDetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { DISHES } from "../shared/dishes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Navbar, NavbarBrand } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = (props) => {
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [leaders, setLeaders] = useState(LEADERS);
  const [promotions, setPromotions] = useState(PROMOTIONS);

  const HomePage = () => {
    return (
      <Home
        dish={dishes.dish}
        promotion={promotions.promo}
        leader={leaders.leader}
      />
    );
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={HomePage} />
        <Route path="/menu" element={<Menu dishes={dishes} />} />
        <Route exact path="/contact" element={Contact} />
      </Routes>
      <Footer />
    </div>
  );
};
export default Main;
