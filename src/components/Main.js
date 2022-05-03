import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";
import Department from "./Department";
import Salary from "./Salary";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../shared/constants";
import "bootstrap/dist/css/bootstrap.min.css";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    department: state.department,
  };
};

const Main = (props) => {
  const [staffs, setStaffs] = useState(STAFFS);
  const [departments, setDepartments] = useState(DEPARTMENTS);

  const addStaff = (staff) => {
    const newList = this.props.staffs;
    const id = this.props.staffs.length;

    const newStaff = {
      id: id,
      name: staff.username,
      doB: staff.doB,
      salaryScale: staff.salaryScale,
      startDate: staff.startDate,
      department: staff.department,
      annualLeave: staff.annualLeave,
      overTime: staff.overTime,
      image: "/assets/images/alberto.png",
    };
    if (staff.department === "Sale") newStaff.department = props.department[0];
    else if (staff.department === "HR")
      newStaff.department = props.department[1];
    else if (staff.department === "Marketing")
      newStaff.department = props.department[2];
    else if (staff.department === "IT")
      newStaff.department = props.department[3];
    else newStaff.department = props.department[4];

    newList.push(newStaff);
    this.setState({
      staffs: newList,
    });
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/staff"
          element={
            <StaffList
              staffs={staffs}
              onStaffSelect={<StaffDetail staffs={staffs} />}
            />
          }
        />
        <Route
          exact
          path="/staff/:id"
          element={<StaffDetail staffs={staffs} />}
        />

        <Route
          path="/department"
          element={<Department departments={departments} />}
        />
        <Route path="/salary" element={<Salary salarys={staffs} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps)(Main);
