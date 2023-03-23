import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faSearch,
  faTrash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { MdAddLocation } from "react-icons/md";
const GeneralInsurance = () => {
  const { Id } = useParams();

  const navigate = useNavigate();
  const [user1, setUser1] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleCloses = () => setShow(false);
  const [personal, setPersonal] = useState({
    date: "",
    Login: "",
    AgentName: "",
    ReferenceName: "",
    CompanyName: "",
    ProductName:"",
    OwnerName: "",
    VehicleNumber: "",
    MCompanyName:"",
    ModelNumber:"",
    Variant:"",
    Vehicletype:"",
    Policynumber:"",
    start:"",
    end:"",
    OwnDamagePremium:"",
    Tax:"",
    TotalOwnDamagePremium:"",
    BasicThirdParty:"",
    Owner:"",
    Driver:"",
    Condector:"",
    Cleaner:"",
    TotalPremium:"",
    bond:"",
    GVW:""
    });
  const handleChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {};
  const handelValue = () => {};
  const removeFormFields=()=>{

  }
  

  const Delete = () => {};
  const addFormFields =()=>{}

  return (
    <>
      <section id="ele_ment_lead">
        {/* <div className="container-fluid"> */}
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="text_react">
              <h3>General Insurancee</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="react_search_btn">
              <input
                icon="search"
                className="form-control"
                name="search"
                placeholder="Search"
                // value={value}
                // onChange={Searchs}
                // onClick={handleSearch}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="react_pop_up_btn">
              <Button
                className="btn btn-primary pop_up_btn"
                variant="primary"
                onClick={handleShow}
              >
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; Add General Insurance
              </Button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Entry Date</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Reference Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {user1 &&
                user1.map((user, index) => {
                  return (
                    <tr key={user.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.FirstName}</td>
                      <td>{user.MPhoneNo}</td>
                      <td>{user.Status}</td>
                      <td>{user.Remarks}</td>
                      {/* <button type="button" name="show" className="btn_show">
                       <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                      </button> */}

                      <Link
                        type="button"
                        name="edit"
                        className="btn_edit"
                        to={`/edit/${user.Id}`}
                      >
                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                      </Link>
                      <button
                        type="button"
                        name="delete"
                        className="btn_delete"
                        onClick={() => Delete(user.Id)}
                      >
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                      </button>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div>
          <Modal size={"md"} show={show} onHide={handleCloses}>
            <Modal.Header>
              <Modal.Title className="Header_Modal">
                <MdAddLocation className="Fa_icons" />
                Add General Insurance
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label> Entry Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="date"
                      value={personal.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Login</label>
                  </div>
                  <div className="new_location_modal">
                    <select
                      type="Text"
                      name="Login"
                      value={personal.Login}
                      onChange={handleChange}
                    >
                      <option>DSA</option>
                      <option>Agent</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Agent Name</label>
                  </div>
                  <div className="new_location_modal">
                    <select
                      type="Text"
                      name="AgentName"
                      value={personal.AgentName}
                      onChange={handleChange}
                    >
                      <option value="DSA">DSA</option>
                      <option value="Agent">Agent</option>
                      <option value="other">Other</option>
                    </select>
                    {personal.AgentName === "other" && (
                      <div className="new_location_modal">
                        <input
                          type="Text"
                          name="AgentName"
                          // value={personal.AgentName}
                          // onChange={handleChange}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Reference Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="ReferenceName"
                      value={personal.ReferenceName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Company Name</label>
                  </div>
                  <div className="new_location_modal">
                    <select
                      type="Text"
                      name="CompanyName"
                      value={personal.CompanyName}
                      onChange={handleChange}
                    >
                      <option>Select Company name</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Product Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="ProductName"
                      value={personal.ProductName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Owner Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="OwnerName"
                      value={personal.OwnerName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Vehicle Number</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="VehicleNumber"
                      value={personal.VehicleNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Manufacturing Company Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="MCompanyName"
                      value={personal.MCompanyName}
                      onChange={handleChange}
                    />
               
                  </div>
                </div>
              
              
                
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Model Number </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="ModelNumber"
                      value={personal.ModelNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Variant</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="Variant"
                      value={personal.Variant}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Vehicle type</label>
                  </div>
                   <div className="new_location_modal">
                    <input
                    type="text"
                     name="Vehicletype"
                      value={personal.Vehicletype}
                      onChange={handleChange}
                       />              
                  </div>
                </div>

              </div>

             <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Fuel Type</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="FuelType"
                      value={personal.FuelType}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>GVW</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="GVW"
                      value={personal.GVW}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Registration Number</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="RegistrationNumber"
                      value={personal.RegistrationNumber}
                      onChange={handleChange}
                    />
                     
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Engine number</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="Enginenumber"
                      value={personal.Enginenumber}
                      onChange={handleChange}
                    />
                     
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Chassis Number</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="ChassisNumber"
                      value={"personal.ChassisNumber"}
                      onChange={handelValue}
                       />
                   </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Vehicle Value</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="VehicleValue"
                      value={"personal.VehicleValue"}
                      onChange={handelValue}
                      />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Insurance Type</label>
                  </div>
                  <div className="new_location_modal">
                    <select
                      type="text"
                      name="InsuranceType"
                      value={personal.InsuranceType}
                      onChange={handleChange}
                    >
                      <option value="#">Select Insurance Type</option>
                      <option value="Full">Full</option>
                      <option value="ThirdParty">Third Party</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Policy Number</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="PolicyNumber"
                      value={personal.PolicyNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Period of Policy Start </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="start"
                      value={personal.start}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Period of Policy End</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="end"
                      value={personal.end}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Own  Damage Premium </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="OwnDamagePremium "
                      value={personal.OwnDamagePremium}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Tax</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="Tax"
                      value={personal.Tax}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                           
              </div>
              <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Net Greoss Premium </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="TotalOwnDamagePremium "
                      value={personal.TotalOwnDamagePremium}
                      onChange={handleChange}
                    />
                  </div>
                </div> 
              <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Basic Third Party</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="BasicThirdParty"
                      value={personal.BasicThirdParty}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>P.A Cover for</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="checkbox"
                      className="chk_bx"
                      name="Owner"
                      value={personal.Owner}
                      onChange={handelValue}
                      placeholder="Role Name"
                    />
                    &nbsp;&nbsp; <label>Owner</label>&nbsp;&nbsp; &nbsp;&nbsp;
                    <input
                      type="checkbox"
                      className="chk_bx"
                      name="Driver"
                      value={personal.Driver}
                      onChange={handelValue}
                      placeholder="Role Name"
                    />
                    &nbsp;&nbsp; <label>Driver</label>&nbsp;&nbsp;
                    <br/>
                    <input
                      type="checkbox"
                      className="chk_bx"
                      name="Cleaner"
                      value={personal.Cleaner}
                      onChange={handelValue}
                      placeholder="Role Name"
                    />
                    &nbsp;&nbsp; <label>Cleaner</label>&nbsp;&nbsp;&nbsp;
                    <input
                      type="checkbox"
                      className="chk_bx"
                      name="Condector"
                      value={personal.Condector}
                      onChange={handelValue}
                      placeholder="Role Name"
                    />
                    &nbsp;&nbsp;<label>Condector</label>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Total Premium </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="TotalPremium "
                      value={personal.TotalPremium}
                      onChange={handleChange}
                    />
                  </div>
                </div>                
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Bond Upload </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="file"
                      name="bond "
                      value={personal.bond}
                      onChange={handleChange}
                    />
                  </div>
                </div>                
              </div>
              
            
            </Modal.Body>
            <Modal.Footer className="foot_img">
              <Button
                type="button"
                className="modal_import_btn"
                onClick={handelValue}
              >
                Add
              </Button>
              <Button
                type="button"
                className="modal_close_btn"
                onClick={handleCloses}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    </>
  );
};



export default GeneralInsurance