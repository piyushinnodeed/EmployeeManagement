import * as React from 'react';
import {useNavigate} from "react-router-dom";
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
import { FC } from 'react';
import { FormGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

import ThemeContext , {themes} from '../theme-context';

import DarkLightSwitch from './DarkLightSwitch'
import { setSyntheticLeadingComments } from 'typescript';

interface AppHeaderProps {
    name: string,
    bgcolor ?: string,
    fontColor ?: string,
    theme ?: any,
    setTheme ?: any
}


const AppHeader: FC<AppHeaderProps> = (props): JSX.Element => {
    
  const settings = props.name === "Dashboard" ? ['Profile', 'Logout'] : ['Dashboard', 'Logout'];
  const headingColor = props.fontColor ? props.fontColor : "white";
  const navigate = useNavigate();
  const [btnText, setBtnText] = React.useState("LIGHT")

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (setting: any) => {
    if(setting === "Dashboard"){
        navigate("/")
    }
    else if(setting === "Profile"){
        navigate("/profile")
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const btnClick = () =>{
      props.theme === themes.light ? props.setTheme(themes.dark) : props.setTheme(themes.light);
      btnText === "LIGHT" ? setBtnText("DARK") : setBtnText("LIGHT");
  }

  return (
    <AppBar position="fixed" style={{background: props.bgcolor}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
          >
            <img src="/images/logo.jpg" alt="logo" style={{height: "50px", width: "100px"}}/>
          </Typography>

          <Typography>
              <h2 style={{color: headingColor}}>{props.name}</h2>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
          </Box>

          {/* <Box sx={{ flexGrow: 0}}>
            <FormGroup>
                <FormControlLabel
                    control={<DarkLightSwitch sx={{ m: 1 }} />}
                    label=""
                />
            </FormGroup>
          </Box> */}

          <Button variant='contained' style={{marginRight: "30px"}} onClick={btnClick}>{btnText}</Button>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Demo User" src="/images/userImg.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>{handleCloseNavMenu(setting)}}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppHeader;
