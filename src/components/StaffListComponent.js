import React, { useState } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import dateFormat from "dateformat";

const StaffList = (props) => {
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [columDefault, setColumDefault] = useState(
    "col-12 col-md-6 col-lg-4 mt-3"
  );
  const columnSelect = (col) => {
    setColumDefault(col);
  };
};
