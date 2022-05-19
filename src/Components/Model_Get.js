import { useState } from "react";
import axios from 'axios';

import Popper from '@mui/material/Popper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function Model_Get() {


  const [anchorEl, setAnchorEl] = useState(null);

const handleClick = (event) => {
  setAnchorEl(anchorEl ? null : event.currentTarget);

};
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


    const [state, setState] = useState([]);

    
     function handleSubmit(event) {
        
        var url = "https://localhost:7181/api/Models";
        
        axios.get(url,{
          headers:{
          'Authorization': 'Bearer ' +  localStorage.getItem("token"),
          'Content-Type': 'application/json'
        }})
         .then((Response) =>{
           setState(Response.data)
         } )
         .catch((error) => {alert('Something bad happened: ' + error)});

        event.preventDefault(); //Reloader derved ikke siden ved tryk på submit
        console.log(state)
                
     };

    return (
    
      <Grid container justifyContent="center">

<div> 
  

        <form onSubmit={handleSubmit}>
         <input type="submit" value="Get all models" />
        </form>
        {state.map(item => (

<div>

<Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Model Id: {item.efModelId} <br/>
          Account Id: {item.efAccountId}
        </Typography>
        <Typography variant="h5" component="div">
        {item.firstName} {item.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email: {item.email}
        </Typography>
        <Typography variant="body2">
          {item.comments}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
       
<Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
    <Item> {item.account}</Item>

    <Item>{item.firstName}
        {item.lastName}</Item>

    <Item>{item.email}</Item>

    <Item>{item.phoneNo}</Item>

    <Item>{item.addresLine1}</Item>

    <Item>{item.addresLine2}</Item>

    <Item>{item.zip}<br />
        {item.city}</Item>

    <Item>{item.country}</Item>

    <Item>{item.birthDate}</Item>

    <Item>{item.nationality}</Item>

    <Item>{item.shoeSize}<br />
        {item.hairColor}<br />
        {item.eyeColor}</Item>
        </Box>
      </Modal>
      </CardActions>
    </Card>


  </div>

))}
        
</div>


    </Grid>
    )
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
