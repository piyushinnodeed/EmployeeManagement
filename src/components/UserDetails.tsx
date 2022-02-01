import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import CreateIcon from '@mui/icons-material/Create';
import { Modal, TextField, Typography } from '@mui/material';

//importing JSON
// import empdata from '../sourcejson/empdata.json';

//axios
import axios from 'axios';

//custom components

//Interface
interface UserDetailsProps {
  id: number,
  setEmployeeId: any
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#E4EAFF',
  border: '2px solid grey',
  boxShadow: 24,
  p: 4,
};

const UserDetails: React.FC<UserDetailsProps> = (props): JSX.Element => {

  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [currentEmpData, setCurrentEmpData] = React.useState({
    id: 0, 
    name: "",
    post: "",
    dob: "",
    phone: 0,
    email: "",
    address: "",
    img: ""
  });

  const [empdata, setEmpdata] = React.useState({"status":0, "data": [{
    "id": 0,
    "name": "",
    "post": "",
    "dob": "",
    "phone": 0,
    "email": "",
    "address": "",
    "img": ""
  }]});

  const completeData = empdata.data;

  const url = "http://localhost:5500/employees";  
  
  const getDataFromAPI = () => { 
    axios.get(url)
    .then(res => {
      setEmpdata(res);
      const persons = res.data;
    })
  }

  React.useEffect(()=>{
    getDataFromAPI();
  },[])

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

    <Modal
      open={openEditModal}
      onClose={()=>setOpenEditModal(false)}
    >
      <Box sx={style}>
        <Box style={{width: "100%", display: 'flex', justifyContent: 'flex-end'}}>
          <CancelIcon onClick={()=>setOpenEditModal(false)} style={{ margin: "5px", fill:'black'}} />
        </Box>
        <Typography style={{textAlign: 'center', fontSize: '30px', marginBottom: '30px'}}>Edit Details</Typography>
        <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>Name : </Typography><TextField id="name" label={currentEmpData.name} /></Box>
        <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>Post : </Typography><TextField id="post" label={currentEmpData.post} /></Box>
        <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>DOB : </Typography><TextField id="dob" label={currentEmpData.dob} /></Box>
        <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>Phone : </Typography><TextField id="phone" label={currentEmpData.phone} /></Box>
        <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>Email : </Typography><TextField id="email" label={currentEmpData.email} /></Box>
        <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>Address : </Typography><TextField id="address" label={currentEmpData.address} /></Box>
      </Box>
    </Modal>

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
      }}
    >
      <Box style={{
        margin: "5px",
        // height: "-webkit-fill-available",
        borderRadius: "10px 10px 0px 0px",
        backgroundColor: "#303c6c"
      }}>
        <Box style={{width: "100%", display: 'flex', justifyContent: 'space-between'}}>
          <CreateIcon onClick={()=>setOpenEditModal(true)} style={{ margin: "5px", fill:'white'}} />
          <CancelIcon onClick={()=>props.setEmployeeId(0)} style={{ margin: "5px", fill:'white'}} />
        </Box>
        {currentEmpData.img ? <img src={currentEmpData.img} alt={currentEmpData.name} style={{height: "200px", width: '-webkit-fill-available', marginLeft: "80px", marginRight: "80px", marginBottom: "30px"}}/> :
          <img src={"https://bit.ly/3KiRmbb"} alt={currentEmpData.name} style={{height: "200px", width: '-webkit-fill-available', marginLeft: "80px", marginRight: "80px", marginBottom: "30px"}} /> }
      </Box>

      <Box style={{
        margin: "5px",
        // height: "-webkit-fill-available",
        // borderRadius: "10px 10px 0px 0px",
        backgroundColor: "#4B5DA5"
      }}>
        <Typography style={{fontSize: '40px', color: 'white', textAlign: 'center'}}>
          {currentEmpData.name}
        </Typography>
      </Box>

      <Box style={{
        margin: "5px",
        height: "-webkit-fill-available",
        marginBottom: "345px",
        borderRadius: "0px 0px 10px 10px",
        backgroundColor: "#728EFF"
      }}>
        <Typography style={{ fontSize: '20px', color: 'white', textAlign: 'center', paddingTop: '10px'}}>
          {currentEmpData.post}
        </Typography>
        <Typography style={{ fontSize: '20px', color: 'white', textAlign: 'center'}}>
          DOB : {currentEmpData.dob}
        </Typography>
        <Typography style={{ fontSize: '20px', color: 'white', textAlign: 'center'}}>
          Contact : {currentEmpData.phone}
        </Typography>
        <Typography style={{ fontSize: '20px', color: 'white', textAlign: 'center'}}>
          {currentEmpData.email}
        </Typography>
        <Typography style={{ fontSize: '20px', color: 'white', textAlign: 'center'}}>
          Address : {currentEmpData.address}
        </Typography>
      </Box>

    </Box>
    </>
  );
};
export default UserDetails;
