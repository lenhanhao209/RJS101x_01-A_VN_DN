import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = (props) => {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };
  return (
    <div>
      <Header />
      <Menu dishes={dishes} onDishSelect={onDishSelect} />
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
      <Footer />
    </div>
  );
};

export default Main;
