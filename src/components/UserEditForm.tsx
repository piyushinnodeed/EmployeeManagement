import React, { FC, useEffect, useState } from 'react';
import { Modal, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import { setConstantValue } from 'typescript';
import axios from 'axios';

interface UserEditFormProps {
    currentEmpData: any,
    setCurrentEmpData: any,
    openEditModal: boolean,
    setOpenEditModal: any
}


const UserEditForm: FC<UserEditFormProps> = (props): JSX.Element =>{
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

    const [records, setRecords] = useState<any>([]);

    const handleInput = (e: any) =>{
        const name = e.target.name;
        const value = e.target.value;

        props.setCurrentEmpData({...props.currentEmpData, [name] : value})
    }

    const handleSubmit = () =>{

        const newEmpData = {... props.currentEmpData}

        // const newEmpData = {... props.currentEmpData, id : new Date().getTime().toString()}

        // setRecords([...records, newEmpData]);

        // console.log("RECORDSSS",records)

        //API call
    }
    
    useEffect(()=>{
    },[])

    return(
        <>
            <Modal
                open={props.openEditModal}
                onClose={()=>props.setOpenEditModal(false)}
            >
                <Box sx={style}>
                <Box style={{width: "100%", display: 'flex', justifyContent: 'flex-end'}}>
                    <CancelIcon onClick={()=>props.setOpenEditModal(false)} style={{ margin: "5px", fill:'black'}} />
                </Box>
                <Typography style={{textAlign: 'center', fontSize: '30px', marginBottom: '30px'}}>Edit Details</Typography>
                {/* <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>Name : </Typography><TextField id="name" label={props.currentEmpData.name} /></Box>
                <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>Post : </Typography><TextField id="post" label={props.currentEmpData.post} /></Box>
                <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>DOB : </Typography><TextField id="dob" label={props.currentEmpData.dob} /></Box>
                <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>Phone : </Typography><TextField id="phone" label={props.currentEmpData.phone} /></Box>
                <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>Email : </Typography><TextField id="email" label={props.currentEmpData.email} /></Box>
                <Box style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}><Typography style={{fontSize: '20px', margin: '20px'}}>Address : </Typography><TextField id="address" label={props.currentEmpData.address} /></Box> */}
                
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" autoComplete="off" 
                        value={props.currentEmpData.name}
                        onChange={handleInput}
                        name="name" id="name" />
                    </div>

                    <div>
                        <label htmlFor="post">Post</label>
                        <input type="text" autoComplete="off"
                        value={props.currentEmpData.post}
                        onChange={handleInput}
                        name="post" id="post" />
                    </div>

                    <div>
                        <label htmlFor="dob">DOB</label>
                        <input type="text" autoComplete="off"
                        value={props.currentEmpData.dob}
                        onChange={handleInput}
                        name="dob" id="dob" />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" autoComplete="off"
                        value={props.currentEmpData.phone}
                        onChange={handleInput}
                        name="phone" id="phone" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" autoComplete="off"
                        value={props.currentEmpData.email}
                        onChange={handleInput}
                        name="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" autoComplete="off"
                        value={props.currentEmpData.address}
                        onChange={handleInput}
                        name="address" id="address" />
                    </div>

                    <div>
                        <label htmlFor="img">Image URL</label>
                        <input type="text" autoComplete="off"
                        value={props.currentEmpData.img}
                        onChange={handleInput}
                        name="img" id="img" />
                    </div>
                    <button type='submit'>Submit</button>
                </form>


                </Box>
            </Modal>
        </>
    )
}

export default UserEditForm;