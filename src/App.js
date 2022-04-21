import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import StaffList from "./components/StaffListComponent.js";
import { STAFFS } from "./shared/constants";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  const [staffs, setStaffs] = useState(STAFFS);
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </div>
      </Navbar>
      <StaffList staffs={staffs} />
    </div>
  );
};

export default App;
