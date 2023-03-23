import React,{useState} from 'react'
import {MenuItem,Menu,IconButton,Box,Badge, ListItem, ListItemIcon, Avatar, List, ListItemText }from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import images from "./images.jpg"
import { ClassNames } from '@emotion/react';
import { useStyles } from '../HeaderStyle';
const Notification = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] =useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const dropDownData=[
        {label:"Rajneesh",desc:"like your feds ..."},
        {label:"Sani",desc:"like your feds ..."},
        {label:"Ajay",desc:"like your feds ..."},
        {label:"Ishu",desc:"like your feds ..."},       
    ]
  return (
    <>
    <Box>
    <IconButton
       aria-controls='Notification'
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
        >
            <Badge badgeContent={4} color="secondary">
            <NotificationsIcon/>
            </Badge>
      </IconButton>
      <Menu
        id="Notification"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
         >
            <List className={classes.navlist}>
            {
                dropDownData.map((item,i)=>(
                <ListItem key={i} onClick={handleClose}>
                <ListItemIcon>
                <Avatar className="VS">{item.label[0].toUpperCase()}</Avatar>
                </ListItemIcon>
                <ListItemText  primary={item.label}
                secondary={item.desc}
                >{item.label}</ListItemText>
                </ListItem>
                
                ))
            }
        </List>
        </Menu>
    </Box>
    </>
  )
}

export default Notification