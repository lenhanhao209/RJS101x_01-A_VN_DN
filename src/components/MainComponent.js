import React, { useState } from "react";
import DishDetail from "./DishDetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { connect } from "react-redux";
import { DISHES } from "../shared/dishes";
import { Routes, Route, Redirect } from "react-router-dom";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import "bootstrap/dist/css/bootstrap.min.css";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};

const Main = (props) => {
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [leaders, setLeaders] = useState(LEADERS);
  const [promotions, setPromotions] = useState(PROMOTIONS);

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
          element={<DishDetail dishes={dishes} comments={comments} />}
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About leaders={leaders} />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default connect(mapStateToProps)(Main);
