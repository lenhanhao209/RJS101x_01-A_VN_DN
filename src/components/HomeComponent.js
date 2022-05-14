import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchDishes } from "../redux/ActionCreators";
import { Loading } from "./LoadingComponent";

const RenderCard = ({ item }) => {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
};

const Home = (props) => {
  const dishes = useSelector((state) => state.dishes);
  const promotions = useSelector((state) => state.promotions);
  const leaders = useSelector((state) => state.leaders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          {dishes.isLoading ? (
            <Loading />
          ) : (
            <RenderCard item={dishes.dishes[0]} />
          )}
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotions[0]} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leaders[0]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
