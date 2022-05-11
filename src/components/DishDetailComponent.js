/* eslint-disable react/jsx-pascal-case */

import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
  Input,
} from "reactstrap";
import { Control, Errors, LocalForm } from "react-redux-form";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addComment } from "../redux/ActionCreators";
import { useDispatch } from "react-redux";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function CommentForm(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [newComment, setNewComment] = useState({
    rating: "",
    name: "",
    comment: "",
  });
  const dispatch = useDispatch();
  const toggleModal = () => setIsOpen(!isOpen);
  const handleInputChange = (e) => {
    const comment = { ...newComment };
    const target = e.target;
    comment[target.name] = target.value;
    setNewComment(comment);
  };

  const handleSubmit = (e) => {
    // dispatch({
    //   type: ActionTypes.ADD_COMMENT,
    //   payload: {
    //     dishId: props.dishId,
    //     rating: newComment.rating,
    //     author: newComment.name,
    //     comment: newComment.comment,
    //   },
    // });
    dispatch(
      addComment(
        props.dishId,
        newComment.rating,
        newComment.name,
        newComment.comment
      )
    );
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <Button color="secondary" onClick={toggleModal}>
        <i className="fa fa-pencil"></i>Submit Comment{" "}
      </Button>
      <Modal isOpen={isOpen}>
        <ModalHeader onClick={toggleModal}>
          {/* <h3>Submit Comment</h3> */}
        </ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={handleSubmit}>
            <Row className="form-group">
              <Label className="mt-3" htmlFor="select" md={2}>
                Rating
              </Label>
              <Col md={10}>
                <Input className="mt-3" type="select" name="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="name" md={2}>
                Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  placeholder=""
                  className="form-control"
                  value={this}
                  onChange={handleInputChange}
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(30),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 30 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label className="mt-3" htmlFor="comment">
                Comment
              </Label>
              <Col md={12}>
                <Input
                  className="mt-2"
                  model=".comment"
                  type="textarea"
                  name="comment"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Button
              onClick={handleSubmit}
              color="primary"
              className="mt-3 mb-3"
            >
              Submit
            </Button>
          </LocalForm>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

const DishDetail = ({ dishes, comments }) => {
  const { id } = useParams();
  let dish = dishes.find((dish) => dish.id === parseInt(id));
  comments = comments.filter((comment) => comment.dishId === parseInt(id));

  const renderDish = (dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={"/" + dish.image} value={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

  const RenderComments = ({ comments, addComment, dishId }) => {
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
          <CommentForm dishId={dishId} addComment={addComment} />
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return dish ? (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        {renderDish(dish)}
        <RenderComments
          comments={comments}
          // addComment={addComment}
          dishId={dish.id}
        />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default DishDetail;
