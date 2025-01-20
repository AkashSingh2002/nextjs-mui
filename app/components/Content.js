'use client';

import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const images = [
  { id: 1, src: 'https://www.istockphoto.com/collaboration/boards/HQRRMefqgEuLnX6TWIpDAA', title: 'Box 1', content: 'This is the content for Box 1' },
  { id: 2, src: 'https://via.placeholder.com/400', title: 'Box 2', content: 'This is the content for Box 2' },
  { id: 3, src: 'https://via.placeholder.com/400', title: 'Box 3', content: 'This is the content for Box 3' },
  { id: 4, src: 'https://via.placeholder.com/400', title: 'Box 4', content: 'This is the content for Box 4' },
];

const Content = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full screen height
        backgroundColor: '#f5f5f5', // Background color for the body
        padding: '20px',
      }}
    >
      {/* Main Box - Full screen height */}
      <Box
        sx={{
          width: '70%',
          height: '100%', // Full screen height
          position: 'relative',
          marginRight: '20px', // Space for the smaller box
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          borderRadius: 2,
          overflow: 'hidden',
          display: 'flex', // Flexbox to center content
          flexDirection: 'column',
          justifyContent: 'center', // Center content vertically
          alignItems: 'center', // Center content horizontally
        }}
      >
        {/* Carousel Item */}
        {images.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              display: currentIndex === index ? 'flex' : 'none',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              height: '100%',
              padding: '16px', // Added padding for better spacing
            }}
          >
            <img
              src={item.src}
              alt={item.title}
              style={{
                maxHeight: '50%', // Limit image height to half the box
                width: 'auto',
                borderRadius: '8px',
                marginBottom: '16px',
              }}
            />
            <Typography variant="h5" color="text.primary" sx={{ marginBottom: '8px' }}>
              {item.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginBottom: '16px' }}>
              {item.content}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Smaller Box on the right */}
      <Box
        sx={{
          width: '30%',
          height: '100%',
          position: 'relative',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: 2,
          overflow: 'hidden',
          display: 'flex', // Flexbox to center content
          flexDirection: 'column',
          justifyContent: 'center', // Center content vertically
          alignItems: 'center', // Center content horizontally
        }}
      >
        {/* Carousel Item */}
        {images.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              display: currentIndex === index ? 'flex' : 'none',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              height: '100%',
              padding: '16px',
            }}
          >
            <img
              src={item.src}
              alt={item.title}
              style={{
                maxHeight: '50%', // Limit image height to half the box
                width: 'auto',
                borderRadius: '8px',
                marginBottom: '16px',
              }}
            />
            <Typography variant="h6" color="text.primary">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.content}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Navigation Buttons */}
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateY(-50%) translateX(-100%)',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '50%',
          transform: 'translateY(-50%) translateX(100%)',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default Content;
