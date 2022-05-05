import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";
import Department from "./Department";
import Salary from "./Salary";
import { Route, Routes } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../shared/constants";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = (props) => {
  const [state, setState] = useState({
    staffs: STAFFS,
    departments: DEPARTMENTS,
  });

  // const [staffs, setStaffs] = useState(STAFFS);
  // const [departments, setDepartments] = useState(DEPARTMENTS);

  const addStaff = (staff) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newStaff = { id, ...staff };
    setState({
      staffs: [...props.staffs, newStaff],
    });
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/nhanvien"
          element={
            <StaffList
              staffs={<staffs />}
              onAdd={addStaff}
              onStaffSelect={<StaffDetail staffs={<staffs />} />}
            />
          }
        />
        <Route
          exact
          path="/nhanvien/:id"
          element={<StaffDetail staffs={<staffs />} />}
        />

        <Route
          path="/phongban"
          element={<Department departments={<departments />} />}
        />
        <Route path="/luong" element={<Salary salarys={<staffs />} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
