/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import DishDetail from "./DishDetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchComments,
  fetchDishes,
  fetchPromos,
} from "../redux/ActionCreators";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  const dishes = useSelector((state) => state.dishes);
  const comments = useSelector((state) => state.comments);
  const promotions = useSelector((state) => state.promotions);
  const leaders = useSelector((state) => state.leaders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPromos());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route
          exact
          path="/menu/:id"
          element={<DishDetail dishes={dishes} comments={comments} />}
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About leaders={leaders} />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default Main;
