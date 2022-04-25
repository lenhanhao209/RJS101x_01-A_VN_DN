import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const DishDetail = ({ dish }) => {
  const renderDish = (dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} value={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

  const renderComments = (comments) => {
    if (comments != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return dish ? (
    <div className="container">
      <div className="row">
        {renderDish(dish)}
        {renderComments(dish.comments)}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default DishDetail;
