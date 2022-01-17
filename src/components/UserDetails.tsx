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

//Interface
interface UserDetailsProps {
  id: number
}

const UserDetails: React.FC<UserDetailsProps> = (props): JSX.Element => {
  return (
    <>
    <Box style={{backgroundColor: "#E4EAFF", width: "100%", height: "550px", position: 'fixed', marginTop: "25px"}}>
      {props.id}'s Details will be shown
    </Box>
    </>
  );
};
export default UserDetails;
