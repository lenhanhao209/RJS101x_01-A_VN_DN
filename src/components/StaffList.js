import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";

const StaffList = (props) => {
  const [state, setState] = useState({
    nameF: "",
  });

  const timNhanVien = (event) => {
    const target = event.target;
    event.preventDefault();
    const nameS = target.nameS.value;
    setState({ nameF: nameS });
  };

  const listNhanvien = props.staffs
    .filter((val) => {
      if (state.nameF === "") return val;
      else if (val.name.toLowerCase().includes(state.nameF.toLowerCase()))
        return val;
      return 0;
    })
    .map((val) => {
      return (
        <div
          key={val.id}
          className="col-lg-2 col-md-4 col-sm-12"
          style={{ justifyContent: "center" }}
        >
          <Link to={"/nhanvien/" + val.id}>
            <div onClick={() => props.onStaffSelect(val.id)}></div>
            <img src={val.image} alt={val.name} />
            <p>{val.name}</p>
          </Link>
        </div>
      );
    });
  return (
    <div className="container mb-1">
      <div className="row">
        <div className="col-12 col-md-6 mt-3">
          <div className="row">
            <div className="col-10 col-md-10">
              <h3>Nhân viên</h3>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <form onSubmit={timNhanVien} className="form-group row">
            <div className="col-8 col-md-8">
              <Input
                type="text"
                className="form-control"
                name="nameS"
                placeholder="Tìm kiếm nhân viên..."
              />
            </div>
            <div className="col-4 col-md-4">
              <button className="btn btn-success" type="submit">
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="row">{listNhanvien}</div>
    </div>
  );
};

export default StaffList;
