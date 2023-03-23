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
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { MdAddLocation } from "react-icons/md";
const ClaimHistory = () => {
  const { Id } = useParams();

  const navigate = useNavigate();
  const [user1, setUser1] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleCloses = () => setShow(false);
  const [personal, setPersonal] = useState({
    date: "",
    CompanyName:"",
    ProductName:"",
    PPName:"",
    PatientName:"",
    RiderCondition:"",
    Patientcondition:"",
    SumAssured:"",
    HospitalName:"",
    Dateofadmission:"",
    DateofDischarge:"",
    Billamount:"",
    MOUdiscount:"",
    COpaymentAmount:"",
    RabbetAmount:"",
    FinalPassAmount:"",
    SeattleAmount:"", 
  });
  const[life,setLife]=useState({
    date: "",
    PHName: "",
    ReferenceName: "",
    SumAssured:"",
    Policynumber:"",
    Claimsubmitdate:"",
    ProductName:"",
    DOC:"",
    PremiumAmount:"",
    NomineeName:"",
    PODdate:"",
    deathreason:"",
    Riderdeath:"",
    Document:"",
    ClaimAmount:"",
    ClaimsettleAmount:"",
    Claimsettledate:"",
    survivalbenefitAmount:"",
    MaturityDate:"",
  })
  const[gernal1,setGernal1]=useState({
    date: "",
    OwnerName: "",
    ReferenceName: "",
    Variant:"",
    AccidentDate:"",
    AccidentClaimNumber:"",
    VehicleNumber:"",
    AccidentPlace:"",
    AccidentVehiclePhoto:"",
    surveyorReport:"",
    surveyorDocument:"",
    ServiceCenterName:"",
    CompleteVehicleDate:"",
    FinalServeyDate:"",
    ClaimAmount:"",
    DiscussionNote:"",
    QueryNote:"",
    FinalSettleAmount:"",
    FinalSettleDate:"",



  })
  const handleChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };
  const handleChanges = (e) => {
    setLife({ ...life, [e.target.name]: e.target.value });
  };
  const handleChangea = (e) => {
    setGernal1({ ...gernal1, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {};
  const handelValue = () => {};
  const removeFormFields=()=>{

  }
  const [add, setAdd] = useState();
  const Medical=()=>{
    setAdd("medical");
  }
  const Life=()=>{
    setAdd('life');
  }
  const Gernal =()=>{
    setAdd('gernal');
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
              <h3>Claim History</h3>
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
                &nbsp; Add Claim History
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
                Add Claim History
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-4">
                  <button className="medical" onClick={Medical}>Medical Claim History</button>
                </div>
                <div className="col-4">
                <button className="life" onClick={Life}>Life Insurance Claim History</button>
                </div>
                <div className="col-4">
                <button className="gernal" onClick={Gernal}>Gernal Insurance Claim History</button>
                </div>
              </div>
              <br/>
              <br/>
              <br/>
             { add=="medical"?
             <>
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
                    <label>Company Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="CompanyName"
                      value={personal.CompanyName}
                      onChange={handleChange}
                    />
                     
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
                    <label>Policy proposer  Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="PPName"
                      value={personal.PPName}
                      onChange={handleChange}
                    />
                  </div>
                </div>     
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Patient Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="PatientName"
                      value={personal.PatientName}
                      onChange={handleChange}
                    />
                  </div>
                </div>     
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Rider Condition</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="RiderCondition"
                      value={personal.RiderCondition}
                      onChange={handleChange}
                    />
                  </div>
                </div>     
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Patient Disease</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="Patientcondition"
                      value={personal.Patientcondition}
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
                    <label>Hospital Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="HospitalName"
                      value={personal.HospitalName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Date of admission</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="Dateofadmission"
                      value={personal.Dateofadmission}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Date of Discharge</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="DateofDischarge"
                      value={personal.DateofaDischarge}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Bill amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="Billamount"
                      value={personal.Billamount}
                      onChange={handleChange}
                    />
                  </div>
                </div>
            
               
                </div>
              <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>MOU discount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="MOUdiscount"
                      value={personal.MOUdiscount}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>CO-payment Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="COpaymentAmount"
                      value={personal.COpaymentAmount}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Rebate  Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="RabbetAmount"
                      value={personal.RabbetAmount}
                      onChange={handleChange}
                    />
                  </div>
                </div>                
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Final Pass Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="FinalPassAmount"
                      value={personal.FinalPassAmount}
                      onChange={handleChange}
                    />
                  </div>
                </div>                
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>T.P.A Final Settle Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="SeattleAmount"
                      value={personal.SeattleAmount}
                      onChange={handleChange}
                    />
                  </div>
                </div>                
              </div></>:
              add=="life"? <> 
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label> Entry Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="date"
                      value={life.date}
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Policy Holder Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="PHName"
                      value={life.PHName}
                      onChange={handleChanges}
                    />
                     
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Reference Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="ReferenceName"
                      value={life.ReferenceName}
                      onChange={handleChanges}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Sum Assured</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="SumAssured"
                      value={life.SumAssured}
                      onChange={handleChanges}
                    />
                  </div>
                </div>     
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Policy Number</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="Policynumber"
                      value={life.Policynumber}
                      onChange={handleChanges}
                    />
                  </div>
                </div>     
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Claim Submit Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="Claimsubmitdate"
                      value={life.Claimsubmitdate}
                      onChange={handleChanges}
                    />
                  </div>
                </div>     
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Product Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="ProductName"
                      value={life.ProductName}
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>DOC</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="DOC"
                      value={life.DOC}
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Premium Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="PremiumAmount"
                      value={life.PremiumAmount}
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Nominee Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="NomineeName"
                      value={life.NomineeName}
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Policy Holder Death Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="PODdate"
                      value={life.PODdate}
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Death Reason</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="deathreason"
                      value={life.deathreason}
                      onChange={handleChanges}
                    />
                  </div>
                </div>
            
               
                </div>
              <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Rider Death</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="Riderdeath"
                      value={life.Riderdeath}
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Document</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="file"
                      name="Document"
                      value={life.Document}
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Claim Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="ClaimAmount"
                      value={life.ClaimAmount}
                      onChange={handleChanges}
                    />
                  </div>
                </div>  
                </div>  
                <div className="row">            
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Claim Settle Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="ClaimsettleAmount"
                      value={life.ClaimsettleAmount}
                      onChange={handleChanges}
                    />
                  </div>
                </div>                
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Claim Settle Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="Claimsettledate"
                      value={life.Claimsettledate}
                      onChange={handleChanges}
                    />
                  </div>
                </div>                
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Survival Benefit Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="survivalbenefitAmount"
                      value={life.survivalbenefitAmount}
                      onChange={handleChanges}
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
                      value={life.MaturityDate}
                      onChange={handleChanges}
                    />
                  </div>
                </div>                
              </div>
              </>:add=="gernal"? <> 
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label> Entry Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="date"
                      value={gernal1.date}
                      onChange={handleChangea}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Reference Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="Text"
                      name="ReferenceName"
                      value={gernal1.ReferenceName}
                      onChange={handleChangea}
                    />
                     
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Variant</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="Variant"
                      value={gernal1.Variant}
                      onChange={handleChangea}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Accident Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="AccidentDate"
                      value={gernal1.AccidentDate}
                      onChange={handleChangea}
                    />
                  </div>
                </div>     
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Accident Claim Number</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="AccidentClaimNumber"
                      value={gernal1.AccidentClaimNumber}
                      onChange={handleChangea}
                    />
                  </div>
                </div>     
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="new_location_modal">
                    <label>Vehicle Number</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="VehicleNumber"
                      value={gernal1.VehicleNumber}
                      onChange={handleChangea}
                    />
                  </div>
                </div>     
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Accident Place</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="AccidentPlace"
                      value={gernal1.AccidentPlace}
                      onChange={handleChangea}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Accident Vehicle Photo</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="file"
                      name="AccidentVehiclePhoto"
                      value={gernal1.AccidentVehiclePhoto}
                      onChange={handleChangea}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Surveyor Report Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="surveyorReport"
                      value={gernal1.surveyorReport}
                      onChange={handleChangea}
                    />
                  </div>
                </div>
                </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Surveyor Document</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="file"
                      name="surveyorDocument"
                      value={gernal1.surveyorDocument}
                      onChange={handleChangea}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Service Center Name</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="ServiceCenterName"
                      value={gernal1.ServiceCenterName}
                      onChange={handleChangea}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Complete Vehicle Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="CompleteVehicleDate"
                      value={gernal1.CompleteVehicleDate}
                      onChange={handleChangea}
                    />
                  </div>
                </div>
            
               
                </div>
              <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Final Servey Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="FinalServeyDate"
                      value={gernal1.FinalServeyDate}
                      onChange={handleChangea}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Claim Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="ClaimAmount"
                      value={gernal1.ClaimAmount}
                      onChange={handleChangea}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Discussion Note</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="DiscussionNote"
                      value={gernal1.DiscussionNote}
                      onChange={handleChangea}
                    />
                  </div>
                </div>  
                </div>  
                <div className="row">            
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Query Note</label>
                  </div>
                  <div className="new_location_modal">
                    <textarea
                      type="text"
                      name="QueryNote"
                      value={gernal1.QueryNote}
                      onChange={handleChangea}
                      row="10"
                      cols="20"
                    />
                  </div>
                </div>                
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Final Settle Amount</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="number"
                      name="FinalSettleAmount"
                      value={gernal1.FinalSettleAmount}
                      onChange={handleChangea}
                    />
                  </div>
                </div>                
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Final Settle Date</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="FinalSettleDate"
                      value={gernal1.FinalSettleDate}
                      onChange={handleChangea}
                    />
                  </div>
                </div>                              
              </div>
              </>:""}
            
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


export default ClaimHistory