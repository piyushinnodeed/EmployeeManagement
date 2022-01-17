import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

//importing JSON
import empdata from '../sourcejson/empdata.json';

//custom components

//Interface
interface UserDetailsProps {
  id: number,
  setEmployeeId: any
}

const UserDetails: React.FC<UserDetailsProps> = (props): JSX.Element => {

  const completeData = empdata.data;
  const [currentEmpData, setCurrentEmpData] = React.useState({
    id: 0,
    name: "",
    post: "",
    dob: "",
    phone: 0,
    email: "",
    address: ""
  })

  const settingData = () =>{
    completeData.map((data)=>{
      if(data.id === props.id){
        setCurrentEmpData(data)
      }
    })
  }

  React.useEffect(()=>{
    settingData();
  },[props.id])

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
      {currentEmpData.name}'s Details will be shown
    </Box>
    </>
  );
};
export default UserDetails;
