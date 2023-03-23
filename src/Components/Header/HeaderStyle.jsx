import { blue, blueGrey, red, yellow } from '@mui/material/colors';
import {makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

export const useStyles = makeStyles(()=>({
    toolbar:{
      display:"flex",
      flexFlow:"row wrap",
      justifyContent:"space-between",
    },
      logo:{
          color:"white",
      },
      navlist:{
        minWidth:"250px",
        maxWidth:"300px",
         },
      ulAvater:{
        backgroundColor: 'aliceblue',
          color:"white",
        },
        wrapper: {
          padding: useTheme().spacing(2,2,0,33),
          [useTheme().breakpoints.down("md")]:{
            padding: useTheme().spacing(2,2)
          }
      },
      navAvatar:{
        width: "35px",
        height: "35px",
      },
      drawerPaper:{
        width: "250px",
        marginTop:"64px",
        backgroundColor:"skyblue",
        [useTheme().breakpoints.down("md")]:{
         marginTop:"0px",
        }

      },
      ///wrapper ============
    navlinks:{
        color:blue["A400"],
        "& :hover , & :hover div":{
            color:yellow["A200"],
        },
        "& div":{
            color:blue["A400"],
        }
    },
    activeNavlinks:{
        color:blue["A400"],
        "& div":{
            color:red["A700"],  
        },
    }
  }))