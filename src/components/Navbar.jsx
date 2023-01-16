import { AppBar, styled, Toolbar, Typography, Box, InputBase, Avatar, Menu, MenuItem} from '@mui/material'
import React, { useState} from 'react' 
import PetsIcon from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled("div") (({theme}) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: "40%"
})) 

const Icons = styled(Box) (({theme}) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')] : {
    display: 'flex'
  }
})) 

const UserBox = styled(Box) (({theme}) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')] : {
    display: 'none'
  }
})) 

const Navbar = () => {

 const [open, setOpen] = useState(false);

  return (
<AppBar position="sticky">
  <StyledToolbar>
    <Typography variant='h6' sx={{ display: {xs: "none", sm: 'block'}}}>IVAN DEV</Typography>
    <PetsIcon sx={{ display: {xs: "block", sm: 'none'}}}/>
    <Search><InputBase placeholder='search'/></Search>
    <Icons>
      <Badge badgeContent={4} color="error">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="error">
        <Notifications/>
      </Badge>
      <Avatar onClick={() => setOpen(true)} sx={{width: 30, height: 30}} src="https://images.pexels.com/photos/3214785/pexels-photo-3214785.jpeg?cs=srgb&dl=pexels-ralph-rabago-3214785.jpg&fm=jpg" />
     </Icons>
     <UserBox onClick={() => setOpen(true)}>
     <Avatar sx={{width: 30, height: 30}} src="https://images.pexels.com/photos/3214785/pexels-photo-3214785.jpeg?cs=srgb&dl=pexels-ralph-rabago-3214785.jpg&fm=jpg" />
     <Typography variant='span'>Ivan</Typography>
     </UserBox>
   </StyledToolbar>
   <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
   </AppBar>
  )
}

export default Navbar
