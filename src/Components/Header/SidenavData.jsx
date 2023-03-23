import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import PostAddIcon from '@mui/icons-material/PostAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {NavLink} from "react-router-dom";
// import { ClassNames } from '@emotion/react';
import { useStyles } from './HeaderStyle';
import { Button } from '@mui/material';
import { useState } from 'react';
const SidenavData = ({handleDrawerClose}) => {
  const [activeItem, setActiveItem] = useState('');
    const classes=useStyles();
const listItemData=[
    {lable:" Dashboard",link:"/",icone:<DashboardIcon/>},
    {lable:"Personal Information",link:"/Personalinformation",icone:<SettingsAccessibilityIcon/>},
    {lable:"Quotation",link:"/quotation",icone:<PostAddIcon/>},
    {lable:"Life Insurance",link:"/lifeInsurance",icone:<GroupsIcon/>},
    {lable:"Health Insurance",link:"/healthInsurance",icone:<HealthAndSafetyIcon/>},
    {lable:"General Insurance",link:"/generalInsurance",icone:<DirectionsCarIcon/>},
    {lable:"Claim History",link:"/claimHistory",icone:<ManageHistoryIcon/>},
    {lable:"Logout",link:"/logout",icone:<ExitToAppIcon/>},
]


const clickHandler = (item) =>{
  handleDrawerClose(item);
  setActiveItem(item.lable)
}

  return (

    <List>
     { 
     listItemData.map((item,i)=>{    
      return( 
        <div key={item.key}>
        <Button onClick={()=>clickHandler(item)}>
        <ListItem component={NavLink} to={item.link} 
        className={`${classes.navlinks} ${activeItem === item.lable ? classes.activeNavlinks:""}`}
          key={i}>
        <ListItemIcon>{item.icone}</ListItemIcon>
        <ListItemText>{item.lable}</ListItemText>
        </ListItem>
        </Button>
        </div>
        )
     })}
 
    </List>

  )
}

export default SidenavData