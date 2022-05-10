/* eslint-disable no-unused-vars */
import React from "react";
import DishDetail from "./DishDetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Routes, Route } from "react-router-dom";
import { addComment } from "../redux/ActionCreators";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  const dishes = useSelector((state) => state.dishes);
  const comments = useSelector((state) => state.comments);
  const promotions = useSelector((state) => state.promotions);
  const leaders = useSelector((state) => state.leaders);

  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              dish={dishes[0]}
              promotion={promotions.filter((promo) => promo.featured)[0]}
              leader={leaders.filter((leader) => leader.featured)[0]}
            />
          }
        />
        <Route exact path="/menu" element={<Menu dishes={dishes} />} />
        <Route
          exact
          path="/menu/:id"
          element={
            <DishDetail
              dishes={dishes}
              comments={comments}
              addComment={addComment}
            />
          }
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About leaders={leaders} />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default Main;
