"use client";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RoomIcon from '@mui/icons-material/Room';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';



const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
  },
});

function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton size='large' edge="start" color="inherit" aria-label="search" sx={{ mr: 2 }}>
              <SearchIcon />
            </IconButton>

            <IconButton size="large" edge="start" color="inherit" aria-label="location" sx={{ mr: 2 }}>
              <RoomIcon />
            </IconButton>

            <Divider orientation='vertical' flexItem sx={{backgroundColor: '#fff', mx: 2,mt: 2.5, height:20, border:1}} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ترابرد
            </Typography>
            <Typography variant="h6" component="div" sx={{mx: 2, mt: 2}}>
              { <img src="/logo.png" height="30" /> }
            </Typography>

            <IconButton size="large" edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default NavBar;