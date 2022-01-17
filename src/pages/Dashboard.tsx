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

//Custom Components
import AppHeader from '../components/AppHeader';
import UserRow from '../components/UserRow';
import UserDetails from '../components/UserDetails';
//json data
import empdata from '../sourcejson/empdata.json';

const Dashboard = () => {
  const [employeeId, setEmployeeId] = React.useState(0) //employee ID will be set
  const [listWidth, setListWidth] = React.useState("100%");
  const [detailsWidth, setDetailsWidth] = React.useState("0%");
  
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
      <AppHeader name={"Dashboard"} bgcolor={"#303c6c"}/>
        <Box style={{display: 'flex'}}>
        <Box style={{marginTop: '95px', width: listWidth}}>
          {
            empdata.data.map((data) =>
              <UserRow id={data.id} name={data.name} post={data.post} email={data.email} employeeId={employeeId} setEmployeeId={setEmployeeId} />
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
