import * as React from 'react';
import logo from '../assets/logo.jpg'
import { styled, alpha } from '@mui/material/styles';
import {AppBar, Box, Toolbar, IconButton, InputBase, Button} from '@mui/material'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  
}));

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" elevation={1} sx={{backgroundColor: 'white', color: 'black', padding: '0'}}>
        <Toolbar >
          <Box
            component="img"
            sx={{
              height: '3.2rem',
              width: '18rem',
            }}
            alt="logo"
            src={logo}
          />

          <Search sx={{margin: '0'}}>
            <StyledInputBase 
            sx={{border: '1px solid #b3b4b5', width: '14rem',padding: '0 0.3rem', borderRadius: '5px'}}
              placeholder="Search for a lead"
            />
          </Search>

          <IconButton>
            <Button variant="outlined" sx={{color:'black', border: '1px solid #b3b4b5'}} startIcon={<FilterAltOutlinedIcon />}>
              Filter
            </Button>
          </IconButton>


          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', color: '#ced0d3', fontWeight: '600'}}>
            <IconButton sx={{fontSize: '1rem', fontWeight: '600'}}>
              Map
            </IconButton>

            <IconButton sx={{fontSize: '1rem', fontWeight: '600'}}>
              About
            </IconButton>

            <IconButton sx={{fontSize: '1rem', fontWeight: '600'}}>
              Feedback
            </IconButton>

            <IconButton sx={{fontSize: '1rem', fontWeight: '600'}}>
              Login
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}