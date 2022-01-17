import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

//Interface
interface UserDetailsProps {
  id: number,
  setEmployeeId: any
}

const UserDetails: React.FC<UserDetailsProps> = (props): JSX.Element => {
  return (
    <>
    <Box style={{
        backgroundColor: "#E4EAFF",
        width: "29%",
        height: "-webkit-fill-available",
        position: 'fixed',
        marginTop: "100px",
        borderRadius: "10px",
        marginLeft: "5px",
        marginRight: "5px",
        border: '2px solid grey'
      }}>
      <Box style={{width: "100%", display: 'flex', justifyContent: 'flex-end'}}>
        <ClearOutlinedIcon onClick={()=>props.setEmployeeId(0)} />
      </Box>
      {props.id}'s Details will be shown
    </Box>
    </>
  );
};
export default UserDetails;
