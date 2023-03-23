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
import axios from "axios";
const Personal = () => {
  const { Id } = useParams();

  const navigate = useNavigate();
  const [user1, setUser1] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleCloses = () => setShow(false);

  const [name, setName] = useState({
    Entrydate: "",
    ReferenceName: "",
    ReferenceName: "",
    FileNumber: "",
    PDOB: "",
    PQualification: "",
    Job: "",
    Income: "",
    Address: "",
    PFatherName: "",
    PMotherName: "",
    PMobile: "",
    POtherMobileNumber: "",
    PEmailId: "",
    PWeight: "",
    PHeight: "",
    PCertificate: "",
    PIdProof: "",
    PAddressProof: "",
    PPhoto: "",
    Wife: [
      {
        index: Math.random(),
        Name: "",
        DOB: "",
        Qualification: "",
        FatherName: "",
        MotherName: "",
        Mobile: "",
        OtherMobileNumber: "",
        EmailId: "",
        Weaight: "",
        Height: "",
        Certificate: "",
        IdProof: "",
        AddressProof: "",
        Photo: "",
      },
    ],
    // Brother: [
    //   {
    //     index: Math.random(),
    //     BName: "",
    //     BDOB: "",
    //     BQualification: "",
    //     BFatherName: "",
    //     BMotherName: "",
    //     BMobile: "",
    //     BOtherMobileNumber: "",
    //     BEmailId: "",
    //     BWeaight: "",
    //     BHeight: "",
    //     BCertificate: "",
    //     BIdProof: "",
    //     BAddressProof: "",
    //     BPhoto: "",
    //   },
    // ],
    // Sister: [
    //   {
    //     index: Math.random(),
    //     SiName: "",
    //     SiDOB: "",
    //     SiQualification: "",
    //     SiFatherName: "",
    //     SiMotherName: "",
    //     SiMobile: "",
    //     SiOtherMobileNumber: "",
    //     SiEmailId: "",
    //     SiWeaight: "",
    //     SiHeight: "",
    //     SiCertificate: "",
    //     SiIdProof: "",
    //     SiAddressProof: "",
    //     SiPhoto: "",
    //   },
    // ],
    // Sun: [
    //   {
    //     index: Math.random(),
    //     sName: "",
    //     sDOB: "",
    //     sQualification: "",
    //     sFatherName: "",
    //     sMotherName: "",
    //     sMobile: "",
    //     sOtherMobileNumber: "",
    //     sEmailId: "",
    //     sWeaight: "",
    //     sHeight: "",
    //     sCertificate: "",
    //     sIdProof: "",
    //     sAddressProof: "",
    //     sPhoto: "",
    //   },
    // ],
    // Daughter: [
    //   {
    //     index: Math.random(),
    //     DName: "",
    //     DDOB: "",
    //     DQualification: "",
    //     DFatherName: "",
    //     DMotherName: "",
    //     DMobile: "",
    //     DOtherMobileNumber: "",
    //     DEmailId: "",
    //     DWeaight: "",
    //     DHeight: "",
    //     DCertificate: "",
    //     DIdProof: "",
    //     DAddressProof: "",
    //     DPhoto: "",
    //   },
    // ],
    // Insurance: [
    //   {
    //     index: Math.random(),
    //     LPolicyhName:"",
    //     LPolicyTableNumber:"",
    //     LTerm:"",
    //     LProductName:"",
    //     LModeOfPayment:"",
    //     LPremiumAmount:"",
    //     LCompanyName: "",
    //     LPolicyNumber: "",
    //     LSumAssured: "",
    //     LDateofMaturity: "",
    //     LDateofCommencement: "",
    //   },
    // ],
    // Medical: [
    //   {
    //     index: Math.random(),
    //     MPersonal: "",
    //     MCompany: "",
    //     MPersonalCompanyName: "",
    //     MCompanyCompanyName: "",
    //     MPersonalPolicyNumber: "",
    //     MPersonalSumAssured: "",
    //     MCompanyPolicyNumber: "",
    //     MCompanySumAssured: "",
    //     CPolicyperiodTo:"",
    //     CPolicyperiodfrom:"",
    //     PPolicyperiodfrom:"",
    //     PPolicyperiodTo:"",
    //        },
    // ],
    // Gernal: [
    //   {
    //     index: Math.random(),
    //     GVehicleNumber: "",
    //     GPolicyNumber: "",
    //     GVehicletype: "",
    //     GDateofCommencement: "",
    //   },
    // ],
  });

  const handleInputChange = (event, index, type) => {
    const { name, value } = event.target;
    setName(prevState => ({
      ...prevState,
      [type]: prevState[type].map((item, i) => i === index ? { ...item, [name]: value } : item)
    }));
  };
  const handleFileChange = (event, index, type) => {
    const { name } = event.target;
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setName(prevState => ({
        ...prevState,
        [type]: prevState[type].map((item, i) => i === index ? { ...item, [name]: reader.result } : item)
      }));
    };
  };
  
  const addField = (type) => {
    setName(prevState => ({
      ...prevState,
      [type]: [...prevState[type], { [`${type.toLowerCase()}Name`]: "", [`${type.toLowerCase()}Age`]: "", [`${type.toLowerCase()}Image`]: "" }]
    }));
  };
  
  const removeField = (index, type) => {
    setName(prevState => ({
      ...prevState,
      [type]: prevState[type].filter((item, i) => i !== index)
    }));
  };

  const handleSubmit = () => {};

  const handelValue = async(e) => {
    e.preventDefault();
    let formData = new FormData();
    // setUser1(personal);
console.log('user1',name)
// setShow(false);
    formData.set('Entrydate',name.Entrydate)
    formData.set('ReferenceName',name.ReferenceName)
    formData.set('PName',name.PName)
    formData.set('FileNumber',name.FileNumber)
    formData.set('PDOB',name.PDOB)
    formData.set('PQualification',name.PQualification)
    formData.set('Job',name.Job)
    formData.set('Income',name.Income)
    formData.set('Address',name.Address)
    formData.set('PFatherName',name.PFatherName)
    formData.set('PMotherName',name.PMotherName)
    formData.set('PMobile',name.PMobile)
    formData.set('POtherMobileNumber',name.POtherMobileNumber)
    formData.set('PEmailId',name.PEmailId)
    formData.set('PWeight',name.PWeight)
    formData.set('PHeight',name.PHeight)
    formData.set('PCertificate',name.PCertificate)
    formData.set('PIdProof',name.PIdProof)
    formData.set('PAddressProof',name.PAddressProof)
    formData.set('PPhoto',name.PPhoto)
    // personal.Wife.forEach((Wife, index) => {
    //   formData.append(`Wife[${index}][name]`, Wife.Name);
    //   formData.append(`Wife[${index}][DOB]`, Wife.DOB);
    //   formData.append(`Wife[${index}][Qualification]`,Wife.Qualification);
    //   formData.append(`Wife[${index}][FatherName]`,Wife.FatherName);
    //   formData.append(`Wife[${index}][MotherName]`,Wife.MotherName);
    //   formData.append(`Wife[${index}][Mobile]`,Wife.Mobile);
    //   formData.append(`Wife[${index}][OtherMobileNumber]`, Wife.OtherMobileNumber);
    //   formData.append(`Wife[${index}][EmailId]`, Wife.EmailId);
    //   formData.append(`Wife[${index}][Weaight]`, Wife.Weaight);
    //   formData.append(`Wife[${index}][Height]`, Wife.Height);
    //   formData.append(`Wife[${index}][Certificate]`, Wife.Certificate);
    //   formData.append(`Wife[${index}][IdProof]`, Wife.IdProof);
    //   formData.append(`Wife[${index}][AddressProof]`, Wife.AddressProof);
    //   formData.append(`Wife[${index}][Photo]`, Wife.Photo);
    // });
    // personal.Brother.forEach((Brother, index) => {
    //   formData.append(`Brother[${index}][name]`, Brother.BName);
    //   formData.append(`Brother[${index}][DOB]`, Brother.BDOB);
    //   formData.append(`Brother[${index}][Qualification]`,Brother.BQualification);
    //   formData.append(`Brother[${index}][FatherName]`,Brother.BFatherName);
    //   formData.append(`Brother[${index}][MotherName]`,Brother.BMotherName);
    //   formData.append(`Brother[${index}][Mobile]`,Brother.BMobile);
    //   formData.append(`Brother[${index}][OtherMobileNumber]`, Brother.BOtherMobileNumber);
    //   formData.append(`Brother[${index}][EmailId]`, Brother.BEmailId);
    //   formData.append(`Brother[${index}][Weaight]`, Brother.BWeaight);
    //   formData.append(`Brother[${index}][Height]`, Brother.BHeight);
    //   formData.append(`Brother[${index}][Certificate]`, Brother.BCertificate);
    //   formData.append(`Brother[${index}][IdProof]`, Brother.BIdProof);
    //   formData.append(`Brother[${index}][AddressProof]`, Brother.BAddressProof);
    //   formData.append(`Brother[${index}][Photo]`, Brother.BPhoto);
    // });
    // personal.Sister.forEach((Sister, index) => {
    //   formData.append(`Sister[${index}][name]`, Sister.SiName);
    //   formData.append(`Sister[${index}][DOB]`, Sister.SiDOB);
    //   formData.append(`Sister[${index}][Qualification]`,Sister.SiQualification);
    //   formData.append(`Sister[${index}][FatherName]`,Sister.SiFatherName);
    //   formData.append(`Sister[${index}][MotherName]`,Sister.SiMotherName);
    //   formData.append(`Sister[${index}][Mobile]`,Sister.SiMobile);
    //   formData.append(`Sister[${index}][OtherMobileNumber]`, Sister.SiOtherMobileNumber);
    //   formData.append(`Sister[${index}][EmailId]`, Sister.SiEmailId);
    //   formData.append(`Sister[${index}][Weaight]`, Sister.SiWeaight);
    //   formData.append(`Sister[${index}][Height]`, Sister.SiHeight);
    //   formData.append(`Sister[${index}][Certificate]`, Sister.SiCertificate);
    //   formData.append(`Sister[${index}][IdProof]`, Sister.SiIdProof);
    //   formData.append(`Sister[${index}][AddressProof]`, Sister.SiAddressProof);
    //   formData.append(`Sister[${index}][Photo]`, Sister.SiPhoto);
    // });
    // personal.Sun.forEach((Sun, index) => {
    //   formData.append(`Sun[${index}][name]`, Sun.sName);
    //   formData.append(`Sun[${index}][DOB]`, Sun.sDOB);
    //   formData.append(`Sun[${index}][Qualification]`,Sun.sQualification);
    //   formData.append(`Sun[${index}][FatherName]`,Sun.sFatherName);
    //   formData.append(`Sun[${index}][MotherName]`,Sun.sMotherName);
    //   formData.append(`Sun[${index}][Mobile]`,Sun.sMobile);
    //   formData.append(`Sun[${index}][OtherMobileNumber]`, Sun.sOtherMobileNumber);
    //   formData.append(`Sun[${index}][EmailId]`, Sun.sEmailId);
    //   formData.append(`Sun[${index}][Weaight]`, Sun.sWeaight);
    //   formData.append(`Sun[${index}][Height]`, Sun.sHeight);
    //   formData.append(`Sun[${index}][Certificate]`, Sun.sCertificate);
    //   formData.append(`Sun[${index}][IdProof]`, Sun.sIdProof);
    //   formData.append(`Sun[${index}][AddressProof]`, Sun.sAddressProof);
    //   formData.append(`Sun[${index}][Photo]`, Sun.sPhoto);
    // });
    // //  Array.isArray(personal)&&personal.map((file)=>
    // //  {
    //   //  formData.append(`personal`,personal)
    //   personal.Daughter.forEach((Daughter, index) => {
    //     formData.append(`Daughter[${index}][name]`, Daughter.DName);
    //     formData.append(`Daughter[${index}][DOB]`, Daughter.DDOB);
    //     formData.append(`Daughter[${index}][Qualification]`,Daughter.DQualification);
    //     formData.append(`Daughter[${index}][FatherName]`,Daughter.DFatherName);
    //     formData.append(`Daughter[${index}][MotherName]`,Daughter.DMotherName);
    //     formData.append(`Daughter[${index}][Mobile]`,Daughter.DMobile);
    //     formData.append(`Daughter[${index}][OtherMobileNumber]`, Daughter.DOtherMobileNumber);
    //     formData.append(`Daughter[${index}][EmailId]`, Daughter.DEmailId);
    //     formData.append(`Daughter[${index}][Weaight]`, Daughter.DWeaight);
    //     formData.append(`Daughter[${index}][Height]`, Daughter.DHeight);
    //     formData.append(`Daughter[${index}][Certificate]`, Daughter.DCertificate);
    //     formData.append(`Daughter[${index}][IdProof]`, Daughter.DIdProof);
    //     formData.append(`Daughter[${index}][AddressProof]`, Daughter.DAddressProof);
    //     formData.append(`Daughter[${index}][Photo]`, Daughter.DPhoto);
    //   }); 
    //   personal.Insurance.forEach((Insurance, index) => {
    //     formData.append(`Insurance[${index}][LPolicyhName]`, Insurance.LPolicyhName);
    //     formData.append(`Insurance[${index}][LPolicyTableNumber]`, Insurance.LPolicyTableNumber);
    //     formData.append(`Insurance[${index}][LTerm]`,Insurance.LTerm);
    //     formData.append(`Insurance[${index}][LProductName]`,Insurance.LProductName);
    //     formData.append(`Insurance[${index}][LModeOfPayment]`,Insurance.LModeOfPayment);
    //     formData.append(`Insurance[${index}][LPremiumAmount]`,Insurance.LPremiumAmount);
    //     formData.append(`Insurance[${index}][LCompanyName]`,Insurance.LCompanyName);
    //     formData.append(`Insurance[${index}][LPolicyNumber]`,Insurance.LPolicyNumber);
    //     formData.append(`Insurance[${index}][LSumAssured]`,Insurance.LSumAssured);
    //     formData.append(`Insurance[${index}][LDateofMaturity]`,Insurance.LDateofMaturity);
    //     formData.append(`Insurance[${index}][LDateofCommencement]`,Insurance.LDateofCommencement);
       
    //   });
    //   personal.Medical.forEach((Medical, index) => {
    //     formData.append(`Medical[${index}][MPersonal]`, Medical.MPersonal);
    //     formData.append(`Medical[${index}][MCompany]`, Medical.MCompany);
    //     formData.append(`Medical[${index}][MPersonalCompanyName]`, Medical.MPersonalCompanyName);
    //     formData.append(`Medical[${index}][MCompanyCompanyName]`, Medical.MCompanyCompanyName);
    //     formData.append(`Medical[${index}][MPersonalPolicyNumber]`, Medical.MPersonalPolicyNumber);
    //     formData.append(`Medical[${index}][MPersonalSumAssured]`, Medical.MPersonalSumAssured);
    //     formData.append(`Medical[${index}][MCompanyPolicyNumber]`, Medical.MCompanyPolicyNumber);
    //     formData.append(`Medical[${index}][MCompanySumAssured]`, Medical.MCompanySumAssured);
    //     formData.append(`Medical[${index}][CPolicyperiodTo]`, Medical.CPolicyperiodTo);
    //     formData.append(`Medical[${index}][CPolicyperiodfrom]`, Medical.CPolicyperiodfrom);
    //     formData.append(`Medical[${index}][PPolicyperiodfrom]`, Medical.PPolicyperiodfrom);
    //     formData.append(`Medical[${index}][PPolicyperiodTo]`, Medical.PPolicyperiodTo);
       
    //   });
    //   personal.Gernal.forEach((Gernal, index) => {
    //     formData.append(`Gernal[${index}][GVehicleNumber]`, Gernal.GVehicleNumber);
    //     formData.append(`Gernal[${index}][GPolicyNumber]`, Gernal.GPolicyNumber);
    //     formData.append(`Gernal[${index}][GVehicletype]`, Gernal.GVehicletype);
    //     formData.append(`Gernal[${index}][GDateofCommencement]`, Gernal.GDateofCommencement);
       
    //   });

    // Object.keys(personal).map((item) => {
    //   console.log("Form", item);
    //   formData.append(item, personal[item]);
    // });
    // Object.keys(personal.Wife).map(item => {

    //   formData.append(item,personal.Wife[item]);
    // });

    //  formData.append("personal",personal);
    // const formData = new FormData();
    // for(let i=0;i<=personal.length;i++) {
    //   console.log(personal[i]);
    //     formData.append('personal[]',personal[i]);

    //   }
    // let formData = new FormData();
    // for (const [key, value] of Object.entries(personal)) {
    //   formData.append(key, value);
    // }
    // for (const [key, value] of Object.entries(personal)) {
    //   formData.append(key, value);
    // }
    // Object.keys(personal).forEach((fieldName) => {
    //   console.log(fieldName, personal);
    //   formData.append(fieldName,personal);
    // });
    //  formData.append("personal",personal);
    // const data = new FormData(event.target);

    // // const value = Object.fromEntries(data.entries());
    // //  console.log("Data1",formData.get("item"));
    // // //console.log("AllData2", personal.Wife);

    //
    // Object.keys(personal).map((item) => {
    //   console.log("Form", item);
    //   formData.append(item, personal[item]);
    //   Object.keys(personal.Wife).map((wifeList)=>{
    //     formData.append(wifeList, personal[wifeList]);
    //     console.log("wife", wifeList);
    //   })
    //   console.log("Data1",formData.get("item"));
    // const contentLength = JSON.stringify(formData)
    await axios
      .post(`http://localhost:3005/PersonalInformation`, formData 
      ,{
            headers: {
                "Content-type": "multipart/form-data"
              // 'Content-Length': JSON.stringify(formData).length
            }
            
                         
        }
      ).then((response) => {
        //  setLocation(response.data);
        // console.log("datalist",response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  const Delete = () => {};
 

  return (
    <>
      <section id="ele_ment_lead">
        {/* <div className="container-fluid"> */}
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="text_react">
              <h3>Personal Information</h3>
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
                &nbsp; Add Personal Information
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
              {Array.isArray(user1)&&
                user1.map((user, index) => {
                  return (
                    <tr key={user.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.PName}</td>
                      <td>{user.PEmailId}</td>
                      <td>{user.PMobile}</td>
                      <td><img src={user.PCertificate}/></td>
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
                Add Personal Information
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Accordion className="aces">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="ace" />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="ace"
                >
                  <Typography>Personal Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label> Entry Date</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="date"
                            name="Entrydate"
                            value={name.Entrydate}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Reference Name</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="Text"
                            name="ReferenceName"
                            value={name.ReferenceName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Name</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="Text"
                            name="PName"
                            value={name.PName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>File Number</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="text"
                            name="FileNumber"
                            value={name.FileNumber}
                            onChange={handleInputChange}
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
                            name="PDOB"
                            value={name.PDOB}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Qualification </label>
                        </div>
                        <div className="new_location_modal">
                          <select
                            type="Text"
                            name="PQualification"
                            value={name.PQualification}
                            onChange={handleInputChange}
                          >
                            <option>Select Qualification</option>
                            <option value="PostGraduation">
                              Post Graduation
                            </option>
                            <option value="Graduation">Graduation</option>
                            <option value="12th">12th</option>
                            <option value="10th">10th</option>
                            <option value="8th">8th</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Job</label>
                        </div>
                        <div className="new_location_modal">
                          <select
                            type="Text"
                            name="Job"
                            value={name.Job}
                            onChange={handleInputChange}
                          >
                            <option>Select Job</option>
                            <option value="GovernmentJob">
                              Government Job
                            </option>
                            <option value="PrivateJob">Private Job</option>
                            <option value="Business">Business</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Income</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="text"
                            name="Income"
                            value={name.Income}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Address</label>
                        </div>
                        <div className="new_location_modal">
                          <textarea
                            type="Text"
                            name="Address"
                            value={name.Address}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Father's Name</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="text"
                            name="PFatherName"
                            value={name.PFatherName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Mother's Name</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="Text"
                            name="PMotherName"
                            value={name.PMotherName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Mobile Number</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="number"
                            name="PMobile"
                            value={name.PMobile}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Other Mobile Number</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="text"
                            name="POtherMobileNumber"
                            value={name.POtherMobileNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Email Id</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="Text"
                            name="PEmailId"
                            value={name.PEmailId}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Weight</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="text"
                            name="PWeight"
                            value={name.PWeight}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Height</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="text"
                            name="PHeight"
                            value={name.PHeight}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Upload Education Certificate</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="file"
                            name="PCertificate"
                            // value={name.PCertificate}
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Upload Id Proof</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="file"
                            name="PIdProof"
                            // value={name.PIdProof}
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Upload Address Proof</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="file"
                            name="PAddressProof"
                            // value={name.PAddressProof}
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="new_location_modal">
                          <label>Upload Photo</label>
                        </div>
                        <div className="new_location_modal">
                          <input
                            type="file"
                            name="PPhoto"
                            // value={name.PPhoto}
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="aces">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="ace" />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="ace"
                >
                  <Typography>Wife Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {Array.isArray(name.Wife) &&
                      name.Wife.map((ele, index) => {
                        return (
                          <>
                            <div className="row" key={index}>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name={`Wife[${index}].Name`}
                                    value={ele.Name}
                                    onChange={(event) => handleInputChange(event, index, "Wife")}
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
                                    name={`Wife[${index}].DOB`}
                                    value={ele.DOB}
                                    onChange={(event) => handleInputChange(event, index, "Wife")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Qualification </label>
                                </div>
                                <div className="new_location_modal">
                                  <select
                                    type="Text"
                                    name={`Wife[${index}].Qualification`}
                                    value={ele.Qualification}
                                    onChange={(event) => handleInputChange(event, index, "Wife")}
                                  >
                                    <option>Select Qualification</option>
                                    <option value="PostGraduation">Post Graduation</option>
                                    <option value="Graduation">Graduation</option>
                                    <option value="12th">12th</option>
                                    <option value="10th">10th</option>
                                    <option value="8th">8th</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Father's Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name={`Wife[${index}].FatherName`}
                                    value={ele.FatherName}
                                    onChange={(event) => handleInputChange(event, index, "Wife")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Mother's Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name={`Wife[${index}].MotherName`}
                                    value={ele.MotherName}
                                    onChange={(event) => handleInputChange(event, index, "Wife")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Mobile Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="number"
                                    name={`Wife[${index}].Mobile`}
                                    value={ele.Mobile}
                                    onChange={(event) => handleInputChange(event, index, "Wife")}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Other Mobile Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name={`Wife[${index}].OtherMobileNumber`}
                                    value={ele.OtherMobileNumber}
                                    onChange={(event) => handleInputChange(event, index, "Wife")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Email Id</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name={`Wife[${index}].EmailId`}
                                    value={ele.EmailId}
                                    onChange={(event) => handleInputChange(event, index, "Wife")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Weight</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name={`Wife[${index}].Weaight`}
                                    value={ele.Weaight}
                                    onChange={(event) => handleInputChange(event, index, "Wife")}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Height</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name={`Wife[${index}].Height`}
                                    value={ele.Height}
                                    onChange={(event) => handleInputChange(event, index, "Wife")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Education Certificate</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name={`Wife[${index}].Certificate`}
                                    // value={ele.Certificate}
                                    onChange={(event) => handleFileChange(event, index, "Wife")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Id Proof</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name={`Wife[${index}].IdProof`}
                                    // value={ele.IdProof}
                                    onChange={(event) => handleFileChange(event, index, "Wife")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Address Proof</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name={`Wife[${index}].AddressProof`}
                                    // value={ele.AddressProof}
                                    onChange={(event) => handleFileChange(event, index, "Wife")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Photo</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name={`Wife[${index}].Photo`}
                                    // value={ele.Photo}
                                    onChange={(event) => handleFileChange(event, index, "Wife")}
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
                                  onClick={() => removeField(index, "Wife")}
                                >
                                  Remove
                                </button>
                              ) : null
                              //</div>
                            }
                          </>
                        );
                      })}
                    <div className="button-section">
                      <button
                        className="modal_close_btn"
                        type="button"
                        onClick={() => addField("Wife")}
                      >
                        Add
                      </button>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* <Accordion className="aces">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="ace" />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="ace"
                >
                  <Typography>Brother Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {Array.isArray(personal.Brother) &&
                      personal.Brother.map((ele, index) => {
                        return (
                          <>
                            <div className="row" key={index}>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="BName"
                                    value={ele.BName}
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
                                    name="BDOB"
                                    value={ele.BDOB}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Qualification </label>
                                </div>
                                <div className="new_location_modal">
                                  <select
                                   name="BQualification"
                                    value={ele.BQualification}
                                    onChange={(e) => handleChange(e, index)}
                                  >
                                    <option>Select Qualification</option>
                                    <option value="PostGraduation">Post Graduation</option>
                                    <option value="Graduation">Graduation</option>
                                    <option value="12th">12th</option>
                                    <option value="10th">10th</option>
                                    <option value="8th">8th</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Father's Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="BFatherName"
                                    value={ele.BFatherName}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Mother's Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="BMotherName"
                                    value={ele.BMotherName}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Mobile Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="number"
                                    name="BMobile"
                                    value={ele.BMobile}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Other Mobile Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="BOtherMobileNumber"
                                    value={ele.BOtherMobileNumber}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Email Id</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="BEmailId"
                                    value={ele.BEmailId}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Weight</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="BWeaight"
                                    value={ele.BWeaight}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Height</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="BHeight"
                                    value={ele.BHeight}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Education Certificate</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="BCertificate"
                                    value={ele.BCertificate}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Id Proof</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="BIdProof"
                                    value={ele.BIdProof}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Address Proof</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="BAddressProof"
                                    value={ele.BAddressProof}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Photo</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="BPhoto"
                                    value={ele.BPhoto}
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
                                    removeFormFields(index, "Brother")
                                  }
                                >
                                  Remove
                                </button>
                              ) : null
                              //</div>
                            }
                          </>
                        );
                      })}
                    <div className="button-section">
                      <button
                        className="modal_close_btn"
                        type="button"
                        onClick={() => addFormFields("Brother")}
                      >
                        Add
                      </button>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="aces">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="ace" />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="ace"
                >
                  <Typography>Sister Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {Array.isArray(personal.Sister) &&
                      personal.Sister.map((ele, index) => {
                        return (
                          <>
                            <div className="row" key={index}>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="SiName"
                                    value={ele.SiName}
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
                                    name="SiDOB"
                                    value={ele.SiDOB}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Qualification </label>
                                </div>
                                <div className="new_location_modal">
                                   <select
                                   name="SiQualification"
                                    value={ele.SiQualification}
                                    onChange={(e) => handleChange(e, index)}
                                  >
                                    <option>Select Qualification</option>
                                    <option value="PostGraduation">Post Graduation</option>
                                    <option value="Graduation">Graduation</option>
                                    <option value="12th">12th</option>
                                    <option value="10th">10th</option>
                                    <option value="8th">8th</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Father's Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="SiFatherName"
                                    value={ele.SiFatherName}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Mother's Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="SiMotherName"
                                    value={ele.SiMotherName}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Mobile Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="number"
                                    name="SiMobile"
                                    value={ele.SiMobile}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Other Mobile Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="SiOtherMobileNumber"
                                    value={ele.SiOtherMobileNumber}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Email Id</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="SiEmailId"
                                    value={ele.SiEmailId}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Weight</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="SiWeaight"
                                    value={ele.SiWeaight}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Height</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="SiHeight"
                                    value={ele.SiHeight}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Education Certificate</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="SiCertificate"
                                    value={ele.SiCertificate}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Id Proof</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="SiIdProof"
                                    value={ele.SiIdProof}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Address Proof</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="SiAddressProof"
                                    value={ele.SiAddressProof}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Photo</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="SiPhoto"
                                    value={ele.SiPhoto}
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
                                    removeFormFields(index, "Sister")
                                  }
                                >
                                  Remove
                                </button>
                              ) : null
                              //</div>
                            }
                          </>
                        );
                      })}
                    <div className="button-section">
                      <button
                        className="modal_close_btn"
                        type="button"
                        onClick={() => addFormFields("Sister")}
                      >
                        Add
                      </button>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="aces">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="ace" />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="ace"
                >
                  <Typography>Son Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {Array.isArray(personal.Sun) &&
                      personal.Sun.map((ele, index) => {
                        return (
                          <>
                            <div className="row" key={index}>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="sName"
                                    value={ele.sName}
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
                                    name="sDOB"
                                    value={ele.sDOB}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Qualification </label>
                                </div>
                                <div className="new_location_modal">
                                  <select
                                   name="sQualification"
                                    value={ele.sQualification}
                                    onChange={(e) => handleChange(e, index)}
                                  >
                                    <option>Select Qualification</option>
                                    <option value="PostGraduation">Post Graduation</option>
                                    <option value="Graduation">Graduation</option>
                                    <option value="12th">12th</option>
                                    <option value="10th">10th</option>
                                    <option value="8th">8th</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Father's Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="sFatherName"
                                    value={ele.sFatherName}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Mother's Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="sMotherName"
                                    value={ele.sMotherName}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Mobile Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="number"
                                    name="sMobile"
                                    value={ele.sMobile}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Other Mobile Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="sOtherMobileNumber"
                                    value={ele.sOtherMobileNumber}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Email Id</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="sEmailId"
                                    value={ele.sEmailId}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Weight</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="sWeaight"
                                    value={ele.sWeaight}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Height</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="sHeight"
                                    value={ele.sHeight}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Education Certificate</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="sCertificate"
                                    value={ele.sCertificate}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Id Proof</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="sIdProof"
                                    value={ele.sIdProof}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Address Proof</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="sAddressProof"
                                    value={ele.sAddressProof}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Photo</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="sPhoto"
                                    value={ele.sPhoto}
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
                                  onClick={() => removeFormFields(index, "Sun")}
                                >
                                  Remove
                                </button>
                              ) : null
                              //</div>
                            }
                          </>
                        );
                      })}
                    <div className="button-section">
                      <button
                        className="modal_close_btn"
                        type="button"
                        onClick={() => addFormFields("Sun")}
                      >
                        Add
                      </button>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="aces">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="ace" />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="ace"
                >
                  <Typography>Daughter Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {Array.isArray(personal.Daughter) &&
                      personal.Daughter.map((ele, index) => {
                        return (
                          <>
                            <div className="row" key={index}>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="DName"
                                    value={ele.DName}
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
                                    name="DDOB"
                                    value={ele.DDOB}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Qualification </label>
                                </div>
                                <div className="new_location_modal">
                                  <select
                                    name="DQualification"
                                    value={ele.DQualification}
                                    onChange={(e) => handleChange(e, index)}
                                  >
                                    <option>Select Qualification</option>
                                    <option value="PostGraduation">Post Graduation</option>
                                    <option value="Graduation">Graduation</option>
                                    <option value="12th">12th</option>
                                    <option value="10th">10th</option>
                                    <option value="8th">8th</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Father's Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="DFatherName"
                                    value={ele.DFatherName}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Mother's Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="DMotherName"
                                    value={ele.DMotherName}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Mobile Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="number"
                                    name="DMobile"
                                    value={ele.DMobile}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Other Mobile Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="DOtherMobileNumber"
                                    value={ele.DOtherMobileNumber}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Email Id</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="DEmailId"
                                    value={ele.DEmailId}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Weight</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="DWeaight"
                                    value={ele.DWeaight}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Height</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="DHeight"
                                    value={ele.DHeight}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Education Certificate</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="DCertificate"
                                    value={ele.DCertificate}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Id Proof</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="DIdProof"
                                    value={ele.DIdProof}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Address Proof</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="DAddressProof"
                                    value={ele.DAddressProof}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Upload Photo</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="file"
                                    name="DPhoto"
                                    value={ele.DPhoto}
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
                                    removeFormFields(index, "Daughter")
                                  }
                                >
                                  Remove
                                </button>
                              ) : null
                              //</div>
                            }
                          </>
                        );
                      })}
                    <div className="button-section">
                      <button
                        className="modal_close_btn"
                        type="button"
                        onClick={() => addFormFields("Daughter")}
                      >
                        Add
                      </button>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="aces">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="ace" />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="ace"
                >
                  <Typography>Insurance Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {Array.isArray(personal.Insurance) &&
                      personal.Insurance.map((ele, index) => {
                        return (
                          <>
                            <div className="row" key={index}>
                              <div className="col-lg-4 col-md-6 col-sm-12 ">
                                <div className="text_react">
                                  <h3>Life Insurance</h3>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Company Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="LCompanyName"
                                    value={ele.LCompanyName}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Policy Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="LPolicyNumber"
                                    value={ele.LPolicyNumber}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Policy Holdar Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="LPolicyhName"
                                    value={ele.LPolicyhName}
                                    onChange={(e) => handleChange(e, index)}
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
                      name="LProductName"
                      value={personal.LProductName}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Policy Table Number</label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="text"
                      name="LPolicyTableNumber"
                      value={personal.LPolicyTableNumber}
                      onChange={(e) => handleChange(e, index)}
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
                      name="LTerm"
                      value={personal.LTerm}
                      onChange={(e) => handleChange(e, index)}
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
                      name="LPremiumAmount"
                      value={personal.LPremiumAmount}
                      onChange={(e) => handleChange(e, index)}
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
                      name="LModeOfPayment"
                      value={personal.LModeOfPayment}
                      onChange={(e) => handleChange(e, index)}
                    >
                      <option value="#">Select Mode Payment</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="HalfYearly">Half Yearly</option>
                      <option value="Yearly">Yearly</option>
                    </select>
                  </div>
                </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Sum Assured</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="number"
                                    name="LSumAssured"
                                    value={ele.LSumAssured}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Date of Commencement</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="date"
                                    name="LDateofCommencement"
                                    value={ele.LDateofCommencement}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Date of Maturity</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="date"
                                    name="LDateofMaturity"
                                    value={ele.LDateofMaturity}
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
                                    removeFormFields(index, "Insurance")
                                  }
                                >
                                  Remove
                                </button>
                              ) : null
                              //</div>
                            }
                          </>
                        );
                      })}
                    <div className="button-section">
                      <button
                        className="modal_close_btn"
                        type="button"
                        onClick={() => addFormFields("Insurance")}
                      >
                        Add
                      </button>
                    </div>
                    {Array.isArray(personal.Medical) &&
                      personal.Medical.map((ele, index) => {
                        return (
                          <>
                            <div className="row">
                              <div className="col-lg-4 col-md-6 col-sm-12 ">
                                <div className="text_react">
                                  <h4>Medical Insurance</h4>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Personal</label>
                                </div>
                                <div className="new_location_modal">
                                  <select
                                    type="text"
                                    name="MPersonal"
                                    value={ele.MPersonal}
                                    onChange={(e) => handleChange(e, index)}
                                  >
                                    <option>Yes</option>
                                    <option>No</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Personal Company Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="MPersonalCompanyName"
                                    value={ele.MPersonalCompanyName}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Personal Policy Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="MPersonalPolicyNumber"
                                    value={ele.MPersonalPolicyNumber}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Personal Sum Assured</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="number"
                                    name="MPersonalSumAssured"
                                    value={ele.MPersonalSumAssured}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                                 <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Personal Policy period from  </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="PPolicyperiodfrom"
                      value={ele.PPolicyperiodfrom}
                      onChange={(e) => handleChange(e, index)}
                    />
                     
                  </div>
                </div>
                   <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Personal Policy period To  </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="PPolicyperiodTo"
                      value={ele.PPolicyperiodTo}
                     onChange={(e) => handleChange(e, index)}
                    />
                     
                  </div>
                </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Company</label>
                                </div>
                                <div className="new_location_modal">
                                  <select
                                    type="text"
                                    name="MCompany"
                                    value={ele.MCompany}
                                    onChange={(e) => handleChange(e, index)}
                                  >
                                    <option>Yes</option>
                                    <option>No</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Company Company Name</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="MCompanyCompanyName"
                                    value={ele.MCompanyCompanyName}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Company Policy Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="MCompanyPolicyNumber"
                                    value={ele.MCompanyPolicyNumber}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Company Sum Assured</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="number"
                                    name="MCompanySumAssured"
                                    value={ele.MCompanySumAssured}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                   <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Company Policy period from  </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="CPolicyperiodfrom"
                      value={ele.CPolicyperiodfrom}
                      onChange={(e) => handleChange(e, index)}
                    />
                     
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="new_location_modal">
                    <label>Company Policy period To  </label>
                  </div>
                  <div className="new_location_modal">
                    <input
                      type="date"
                      name="CPolicyperiodTo"
                      value={ele.CPolicyperiodTo}
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
                                    removeFormFields(index, "Medical")
                                  }
                                >
                                  Remove
                                </button>
                              ) : null
                              //</div>
                            }
                          </>
                        );
                      })}
                    <div className="button-section">
                      <button
                        className="modal_close_btn"
                        type="button"
                        onClick={() => addFormFields("Medical")}
                      >
                        Add
                      </button>
                    </div>
                    {Array.isArray(personal.Gernal) &&
                      personal.Gernal.map((ele, index) => {
                        return (
                          <>
                            <div className="row">
                              <div className="col-lg-4 col-md-6 col-sm-12 ">
                                <div className="text_react">
                                  <h4>Gernal Insurance</h4>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Vehicle Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="text"
                                    name="GVehicleNumber"
                                    value={ele.GVehicleNumber}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Policy Number</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="Text"
                                    name="GPolicyNumber"
                                    value={ele.GPolicyNumber}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Vehicle type</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="number"
                                    name="GVehicletype"
                                    value={ele.GVehicletype}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="new_location_modal">
                                  <label>Date of Commencement</label>
                                </div>
                                <div className="new_location_modal">
                                  <input
                                    type="date"
                                    name="GDateofCommencement"
                                    value={ele.GDateofCommencement}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                  ```
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
                                    removeFormFields(index, "Gernal")
                                  }
                                >
                                  Remove
                                </button>
                              ) : null
                              //</div>
                            }
                          </>
                        );
                      })}
                    <div className="button-section">
                      <button
                        className="modal_close_btn"
                        type="button"
                        onClick={() => addFormFields("Gernal")}
                      >
                        Add
                      </button>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion> */}
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

export default Personal;
