import React, { useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

const RenderSalary = (salary) => {
  return (
    <Card>
      <CardTitle className="p-3 bg-white rounded m-2">
        {salary.salary.name}
      </CardTitle>
      <CardBody>
        <CardText>Mã nhân viên:{salary.salary.id}</CardText>
        <CardText>Hệ số lương:{salary.salary.salaryScale}</CardText>
        <CardText>Số giờ làm thêm:{salary.salary.overTime}</CardText>
      </CardBody>
    </Card>
  );
};

const Salary = (props) => {
  const salary = props.salarys.map((ss) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={ss.id}>
        <RenderSalary salary={ss} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="staff">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      {/* <button
        className="btn-btn-danger"
        onClick={() => setSortSalary(!sortSalary)}
      >
        Sắp xếp theo Hệ số lương
      </button> */}
      <div className="row shadow mb-3">{salary}</div>
    </div>
  );
};

export default Salary;
