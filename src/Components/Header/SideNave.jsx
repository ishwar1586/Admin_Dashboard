import { Drawer, Hidden, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import { useStyles } from './HeaderStyle'
import SidenavData from './SidenavData'

const SideNave = ({mobileOpen,handleDrawerOpen,handleDrawerClose}) => {
    const classes=useStyles()
   
    

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Hidden mdUp implementation="css">
      <Drawer
        // container={Paper}
        variant="temporary"
        anchor={'left'}
        open={mobileOpen}
        onClose={handleDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
       <SidenavData handleDrawerClose={handleDrawerClose}/>
        </Drawer>
    </Hidden>
    <Hidden mdDown implementation="css">
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
        <SidenavData handleDrawerClose={handleDrawerClose}/>
      </Drawer>
    </Hidden>
  </nav>
  )
}

export default SideNave