import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../components/images/logo.jpg'

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#000000',
});

const useStyles = (theme) => ({
  title: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2), 
   
  },
  button: {
    marginLeft: theme.spacing(2),
  },
});

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <div>
        
          <img src={logo} alt=" Logo" style={{ height: '50px', width: 'auto',marginTop:'10px' }} className={useStyles.logo} />
          
          <Typography variant="h6" sx={{ ...useStyles.title, marginBottom: '10px' }}>
        
          </Typography>
        </div>
        
       
        <div sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Button color="inherit" sx={{ marginBottom: '8px' }} href='/home'>
            Home
          </Button>
          <Button color="inherit" sx={{ marginBottom: '8px' }} href='/category'>
           Category
          </Button>
          <Button color="inherit" sx={{ marginBottom: '8px' }}>
            Blog
          </Button>
          <Button color="inherit" sx={{ marginBottom: '8px' }} href='/login'>
            Login
          </Button>
          <Button color="inherit" sx={{ ...useStyles.button, marginBottom: '10px' }}>
            Contact
          </Button>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
