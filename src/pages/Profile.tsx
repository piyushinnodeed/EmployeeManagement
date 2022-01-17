import React from 'react';

//custom component
import AppHeader from '../components/AppHeader';
import UserDetails from '../components/UserDetails';

function Profile() {
  return (
    <>
    <AppHeader name={"Profile"} bgcolor={"#f4976c"} fontColor={"black"}/>
    Admin Details will be here
    </>
  );
}

export default Profile;
