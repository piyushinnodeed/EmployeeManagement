import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { FC } from 'react';

//Custom Components
import AppHeader from '../components/AppHeader';

//interface
interface UserRowProps {
    id: number,
    name: string,
    post: string,
    email: string,
    img?: string,
    employeeId: number,
    setEmployeeId ?: any
}

//custom functions
const GetInitials = (props: any) => {
    if(props === ""){
      return "NA"
    }
    else{
      const fullName = props.split(' ');
      const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      return initials.toUpperCase();
    }
    // console.log(fullName)
    // return fullName
}

const UserRow: FC<UserRowProps> = (props): JSX.Element => {
  
  var avatarColors = ["#FF4720", "#639B00", "#00C382", "#0097C3", "#9D2BD6", "#D62B67", "#FF0000"]
  const [avatarBgcolor, setAvatarBgcolor] = React.useState("")

  React.useEffect(()=>{
    let clr = avatarColors[Math.floor(Math.random()*avatarColors.length)];
    setAvatarBgcolor(clr)
  },[])

  const SettingEmpID = (setempidprops: any) =>{
    //   console.log()
      if(setempidprops === props.employeeId){
          props.setEmployeeId(0)
      }
      else{
        props.setEmployeeId(setempidprops)
      }
  }

  return (
    <>
        <Box style={{display: 'flex', border: '2px solid grey', borderRadius: '10px', margin: '5px', backgroundColor: '#E4EAFF'}} onClick={()=>SettingEmpID(props.id)}>
            {props.img ? <Avatar alt={props.name} src={props.img} style={{margin: '5px', alignSelf: 'center'}} /> :
              <Avatar sx={{ bgcolor: avatarBgcolor }} style={{margin: '5px', alignSelf: 'center'}}>
                  {GetInitials(props.name)}
              </Avatar>
            }
            <Typography style={{alignSelf: 'center', marginLeft: '5px', display: 'flex', width: "20%"}}>{props.name}</Typography>
            <Box style={{display: 'flex', width: "100%", justifyContent: 'space-evenly'}}>
                <Typography style={{alignSelf: 'center', display: 'flex'}}>{props.post}</Typography>
                <Typography style={{alignSelf: 'center', display: 'flex'}}>{props.email}</Typography>
            </Box>
        </Box>
    </>
  );
};
export default UserRow;
