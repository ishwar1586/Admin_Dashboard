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
const LifeInsurance = () => {
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
    NomineeName:"",
    PolicyTableNumber:"",
    Term:"",
    AccidentalRider:"",
    Policynumber:"",
    SumAssured:"",
    ModeOfPayment:"",
    MoneyBack:[{index: Math.random(),Date:""}],
    DOC:"",
    PremiumAmount:"",
    Tax:"",
    TotalAmount:"",
    LastPremium:"",
    MaturityDate:"",
    MaturityAmount:"",
    PremiumSubmit:"",
    bond:"",
  });
  const handleChange = (e,i) => {
    if(["Date"].includes(e.target.name)) {
      const MoneyBack = [...personal.MoneyBack];
      MoneyBack[i][e.target.name] = e.target.value;
      setPersonal({ ...personal, MoneyBack });
      console.log("MoneyBack", personal.MoneyBack);
    } else
{
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  }
  };
  const handleSubmit = () => {};
  const handelValue = () => {};
  const removeFormFields=(i)=>{
    const personalCopy = { ...personal };
    const currentpersonal=personalCopy.MoneyBack
    currentpersonal.splice(i, 1);
    setPersonal({ ...personal, [currentpersonal]: "" });
  }
  const Delete = () => {};
  const addFormFields =()=>{
    const personalCopy = { ...personal };
    const currentpersonal=personalCopy.MoneyBack
    personalCopy.MoneyBack=[...currentpersonal,{
      index: Math.random(),Date:""
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
              <h3>Life Insurance</h3>
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
                &nbsp; Add Life Insurance
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
                Add Life Insurance
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
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Nominee Name </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="NomineeName"
                      value={personal.NomineeName}
                      onChange={handleChange}
                      />
                   
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Policy Table Number</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="PolicyTableNumber"
                      value={personal.PolicyTableNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Term</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="Term"
                      value={personal.Term}
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
                      value={"true"}
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
                    <label>Mode Of Payment </label>
                  </div>
                  <div className="new_location_modal">
                    <select
                      type="text"
                      name="ModeOfPayment"
                      value={personal.ModeOfPayment}
                      onChange={handleChange}
                    >
                      <option value="#">Select Mode Payment</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="HalfYearly">Half Yearly</option>
                      <option value="Yearly">Yearly</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
              
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Date Of Commisment</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="DOC"
                      value={personal.DOC}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Premium Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="PremiumAmount"
                      value={personal.PremiumAmount}
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
                    <label>Date of Last Premium</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="LastPremium"
                      value={personal.LastPremium}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Maturity Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="MaturityDate"
                      value={personal.MaturityDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
              
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Maturity Amount (Approx)</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="MaturityAmount"
                      value={personal.MaturityAmount}
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
             {   Array.isArray(personal.MoneyBack) &&
                      personal.MoneyBack.map((ele,index) => {
                        return (<>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Money Back </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="Date"
                      value={personal.Date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
               
                  {
                    // <div className="dele">
                    index ? (
                      <button
                        type="button"
                        className="modal_import_btn1"
                        onClick={() =>
                          removeFormFields(index)
                        }
                      >
                        Remove
                      </button>
                   ) : null
                  }
               </> )
            })  }
             <div className ="button-section">
        <button
          className="modal_close_btn1"
          type="button"
          onClick={() => addFormFields()}
        >
          Add
        </button>
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

export default LifeInsurance;
