import React,{useState} from 'react'
import Navbar from './Navbar'
import SideNave from './SideNave'
import { Routes, Route} from "react-router-dom";
import DashBoard from '../BodyComponent/DashBoard/DashBoard';
import LifeInsurance from '../BodyComponent/DashBoard/LifeInsurance';
import Logout from '../BodyComponent/DashBoard/Logout';
import PersonalInformation from '../BodyComponent/DashBoard/PersonalInformation';
import { Box } from '@mui/material';
import { useStyles } from './HeaderStyle';
import HealthInsurance from '../BodyComponent/DashBoard/HealthInsurance';
import GeneralInsurance from '../BodyComponent/DashBoard/GeneralInsurance';
import ClaimHistory from '../BodyComponent/DashBoard/ClaimHistory';
import Quotation from '../BodyComponent/DashBoard/Quotation';
import Personal from '../BodyComponent/DashBoard/Personal';
const HeaderComponent = () => {
  const classes = useStyles()
  const [mobileOpen,setMobileOpen] =useState(false);
  const handleDrawerOpen =()=>{
    setMobileOpen(!mobileOpen)
}
  const handleDrawerClose =()=>{
    console.log("buttonClose")
    setMobileOpen(false)
}
  return (
    <>
      <Navbar handleDrawerOpen={handleDrawerOpen}/>
      <SideNave mobileOpen={mobileOpen} handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}/>
      <Box className={classes.wrapper}>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/lifeInsurance" element={<LifeInsurance/>} />
        <Route path="/generalInsurance" element={<GeneralInsurance/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/personalInformation" element={<PersonalInformation/>} />
        <Route path="/Personal" element={<Personal/>} />
        <Route path="/healthInsurance" element={<HealthInsurance/>} />
        <Route path="/claimHistory" element={<ClaimHistory/>} />
        <Route path="/quotation" element={<Quotation/>} />

      </Routes>
      </Box>
    </>
  )
}

export default HeaderComponent