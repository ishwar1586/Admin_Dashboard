import React,{useState} from 'react'
import {MenuItem,Menu,Button,Box,Badge, ListItem, ListItemIcon, Avatar }from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import images from "./images.jpg"
import { useStyles } from '../HeaderStyle';
const Profile = () => {
    const classes= useStyles()
    const [anchorEl, setAnchorEl] =useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const dropDownData=[
        {
        label:"settings",
        icon:<SettingsIcon/>},
        {
            label:"Logout",
            icon:<LogoutIcon/>}
    ]
  return (
    <>
    <Box>
    <Button
        id="basic-button"
        aria-controls='basic-menu'
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<Avatar src={images} className={classes.navAvatar}/>}>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
         >
            {
                dropDownData.map((item,i)=>(
<MenuItem component={ListItem} onClick={handleClose}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemIcon>{item.label}</ListItemIcon>
                </MenuItem>
                
                ))
            }
        
        </Menu>
    </Box>
    </>
  )
}

export default Profile