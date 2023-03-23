import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/Button';
import { useStyles } from './HeaderStyle';
import {Hidden} from '@mui/material';
import Profile from './Navtabs/Profile';
import Notification from './Navtabs/Notification';
import Messages from './Navtabs/Messages';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({handleDrawerOpen}) => {
    const classes = useStyles()
  //   const [mobileOpen,setMobileOpen] =useState(false);
  //   const handleDrawerOpen =()=>{
  //     setMobileOpen(!mobileOpen)
  // }
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logo}>
            {"Aapka Pariwar Aapki Suraksha"}
         </Typography>
<Hidden mdDown>
      <Box style={{display:"flex"}}  >
      <Notification/>
        <Messages/>
     <Profile/>
    
      </Box>
      </Hidden>
      <Hidden mdUp>
      <IconButton color="inherit"
      onClick={handleDrawerOpen}>
        <MenuIcon/>
        
      </IconButton>
      </Hidden>
      </Toolbar>
    </AppBar>
 
  )
}

export default Navbar