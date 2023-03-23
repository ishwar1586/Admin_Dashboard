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
const HealthInsurance = () => {
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
    PHName: "",
    DOB: "",
    PortBy:"",
    OPCHistory:"",
    PreviousDisease:"",
    NumberofMember:"",
    RNumberofMember:[{index: Math.random(),RName:"",RDOB:"",RPreviousDisease:"",Relation:""}],
    Policynumber:"",
    SumAssured:"",
    Policyperiodfrom:"",
    PolicyperiodTo:"",
    AccidentalRider:"",
    ProtectorRider:"",
    RestoreRefillingBenefit:"",
    HospitalCashBenefit:"",
    NoClamedBonus:"",
    BasicPremium:"",
    Tax:"",
    TotalAmount:"",
    bond:"",
  });
  const handleChange = (e,i) => {
    if (
      [
        "RName","RDOB","RPreviousDisease","Relation"
      ].includes(e.target.name)
    ) {
      const RNumberofMember = [...personal.RNumberofMember];
      RNumberofMember[i][e.target.name] = e.target.value;
      setPersonal({ ...personal, RNumberofMember });
      console.log("Wife", personal.RNumberofMember);
    }
    else{
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  }
  };
  const handleSubmit = () => {};
  const handelValue = () => {};

  const removeFormFields=(i)=>{
    const personalCopy = { ...personal };
    const currentpersonal=personalCopy.RNumberofMember
    currentpersonal.splice(i, 1);
    setPersonal({ ...personal, [currentpersonal]: "" });
  }
  

  const Delete = () => {};
  const addFormFields =()=>{
    const personalCopy = { ...personal };
    const currentpersonal=personalCopy.RNumberofMember
    personalCopy.RNumberofMember=[...currentpersonal,{
      index: Math.random(),RName:"",RDOB:"",RPreviousDisease:"",Relation:""
    }]
    setPersonal(personalCopy);
  }

  return (
    <>
      <section id="ele_ment_lead">
        {/* <div className="container-fluid"> */}
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="text_react">
              <h3>Health Insurancee</h3>
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
                &nbsp; Add Health Insurance
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
                Add Health Insurance
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
                    <label>Policy Holder Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="PHName"
                      value={personal.PHName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>D.O.B</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="DOB"
                      value={personal.DOB}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Port By</label>
                  </div>
                  <div className="new_location_modal">
                    <select
                      type="text"
                      name="PortBy"
                      value={personal.PortBy}
                      onChange={handleChange}
                    >
                   <option>Select Company</option>

                    </select>
                  </div>
                </div>
              
              
                
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Old Policy Clamed History</label>
                  </div>
                  <div className="new_location_modal">
                    <textarea
                      type="text"
                      name="OPCHistory"
                      value={personal.OPCHistory}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Previous  Disease</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="PreviousDisease"
                      value={personal.PreviousDisease}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Number of Member</label>
                  </div>
                   <div className="new_location_modal">
                    <select
                     name="NumberofMember"
                      value={personal.NumberofMember}
                      onChange={handleChange}
                       >
                      <option value="#">Secect Member</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                
                  </div>
                </div>

              </div>

             {personal.NumberofMember !=="" ?
            Array.isArray(personal.RNumberofMember) &&
                      personal.RNumberofMember.map((ele,index) => {
                        return (<>
             <div className="row"  key={index}>
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="RName"
                      value={ele.RName}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>D.O.B</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="RDOB"
                      value={ele.RDOB}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>RPreviousDisease </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="RPreviousDisease"
                      value={ele.RPreviousDisease}
                      onChange={(e) => handleChange(e, index)}
                    />                 
                  </div>
                </div>             
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Relation </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="Relation"
                      value={ele.Relation}
                      onChange={(e) => handleChange(e, index)}
                    />                 
                  </div>
                </div>             
              
                
              </div>
               {
                // <div className="dele">
                index ? (
                  <button
                    type="button"
                    className="modal_import_btn"
                    onClick={() =>
                      removeFormFields(index)
                    }
                  >
                    Remove
                  </button>
               ) : null
                //</div>
              }
           </> )
        })    : "" } 
          {personal.NumberofMember !=="" ?
      <div className ="button-section">
        <button
          className="modal_close_btn"
          type="button"
          onClick={() => addFormFields()}
        >
          Add
        </button>
      </div>
    :"" }

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Policy Number</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="Policynumber"
                      value={personal.Policynumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Sum Assured</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="SumAssured"
                      value={personal.SumAssured}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Policy period from  </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="Policyperiodfrom"
                      value={personal.Policyperiodfrom}
                      onChange={handleChange}
                    />
                     
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Policy period To  </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="PolicyperiodTo"
                      value={personal.PolicyperiodTo}
                      onChange={handleChange}
                    />
                     
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Accidental Rider</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="checkbox"
                      className="chk_bx"
                      name="AccidentalRider"
                      value={"true"}
                      onChange={handelValue}
                      placeholder="Role Name"
                    />
                    &nbsp;&nbsp; <label>Yes</label>&nbsp;&nbsp; &nbsp;&nbsp;
                    <input
                      type="checkbox"
                      className="chk_bx"
                      name="AccidentalRider"
                      value={"falsh"}
                      onChange={handelValue}
                      placeholder="Role Name"
                    />
                    &nbsp;&nbsp; <label>No</label>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Protector Rider</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="checkbox"
                      className="chk_bx"
                      name="ProtectorRider"
                      value={"true"}
                      onChange={handelValue}
                      placeholder="Role Name"
                    />
                    &nbsp;&nbsp; <label>Yes</label>&nbsp;&nbsp; &nbsp;&nbsp;
                    <input
                      type="checkbox"
                      className="chk_bx"
                      name="ProtectorRider"
                      value={"falsh"}
                      onChange={handelValue}
                      placeholder="Role Name"
                    />
                    &nbsp;&nbsp; <label>No</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Restore/Refilling Benefit  </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="RestoreRefillingBenefit"
                      value={personal.RestoreRefillingBenefit}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>HospitalCashBenefit</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="HospitalCashBenefit"
                      value={personal.HospitalCashBenefit}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>No Clamed Bonus</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="NoClamedBonus"
                      value={personal.NoClamedBonus}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Basic Premium</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="BasicPremium"
                      value={personal.BasicPremium}
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
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Total Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="TotalAmount"
                      value={personal.TotalAmount}
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


export default HealthInsurance