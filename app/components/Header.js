'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Breakpoint for mobile screens

  return (
    <AppBar position="static" sx={{ background: '#fff', color: '#000' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Brand Name */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Brand Name
        </Typography>

        {/* Search Bar - Hidden on Mobile */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', padding: '2px 8px' }}>
            <InputBase
              placeholder=""
              inputProps={{ 'aria-label': 'search' }}
              sx={{ flex: 1, marginLeft: 1, width: '400px' }}
            />
            <IconButton type="button" sx={{ p: '10px' }}>
              <SearchIcon />
            </IconButton>
          </Box>
        )}

        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: 'blue', marginRight: 1 }}>J</Avatar>
          <Typography variant="body1">John</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
