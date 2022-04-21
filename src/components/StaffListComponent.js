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
  const Staff = () => {
    if (selectedStaff !== null) {
      return (
        <div className="col-4">
          <Card>
            <CardImg
              width="100%"
              src={selectedStaff.image}
              alt={selectedStaff.name}
            />
            <CardBody>
              <CardTitle>{`Họ và tên: ${selectedStaff.name}`}</CardTitle>
              <CardText>{`Ngày sinh: ${dateFormat(
                selectedStaff.doB,
                "dd/mm/yyyy"
              )}`}</CardText>
              <CardText>{`Ngày vào công ty: ${dateFormat(
                selectedStaff.startDate,
                "dd/mm/yyyy"
              )}`}</CardText>
              <CardText>{`Phòng ban: ${selectedStaff.department.name}`}</CardText>
              <CardText>{`Số ngày nghỉ còn lại: ${selectedStaff.annualLeave}`}</CardText>
              <CardText>{`Số ngày đã làm thêm: ${selectedStaff.overTime}`}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
};
