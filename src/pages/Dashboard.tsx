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

//axios
import axios from "axios";

//Custom Components
import AppHeader from '../components/AppHeader';
import UserRow from '../components/UserRow';
import UserDetails from '../components/UserDetails';
import { resolve } from 'path/win32';
import ThemeContext from '../theme-context';
import { FC } from 'react';

//json data
// import empdata from '../sourcejson/empdata.json';

interface DashProps {
  theme: any,
  setTheme: any
}

const Dashboard: FC<DashProps> = (props): JSX.Element => {
  const [employeeId, setEmployeeId] = React.useState(0) //employee ID will be set
  const [listWidth, setListWidth] = React.useState("100%");
  const [detailsWidth, setDetailsWidth] = React.useState("0%");

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

  const url = "http://localhost:5500/employees";  

  const theme = React.useContext(ThemeContext);
  
  const getDataFromAPI = () => { 
    axios.get(url)
    .then(res => {
      setEmpdata(res);
      console.log(res.data)
    })
  }

  React.useEffect(()=>{
    getDataFromAPI();
  },[])
  
  //for switching width of the 2 divs
  React.useEffect(()=>{
    if(employeeId){
      setListWidth("70%");
      setDetailsWidth("30%");
    }
    else{
      setListWidth("100%");
      setDetailsWidth("0%");
    }
  },[employeeId])

  return (
    <>
      <AppHeader name={"Dashboard"} bgcolor={"#303c6c"} theme={ props.theme } setTheme={props.setTheme}/>
      <Box style={theme}>
        <Box style={{marginTop: '95px', width: listWidth }}>
          {
            empdata.data.map((data) =>
              <UserRow id={data.id} name={data.name} post={data.post} email={data.email} employeeId={employeeId} setEmployeeId={setEmployeeId} img={data.img} />
            )
          }
        </Box>
        <Box style={{width: detailsWidth}}>
          <UserDetails id={employeeId} setEmployeeId={setEmployeeId}/>
        </Box>
      </Box>
    </>
  );
};
export default Dashboard;
