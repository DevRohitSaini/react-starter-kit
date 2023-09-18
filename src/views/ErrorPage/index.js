import React from 'react';

// material-ui
import {  Grid, } from '@mui/material';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import Button from '@mui/material/Button';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from 'react-router-dom';

// project import

// assets

// ==============================|| LOGIN ||============================== //

const ErroPage = () => {

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className='error-page'
      sx={{  height: '100%', minHeight: '100vh' }}
    >
      <Grid item xs={'auto'} 
       justifyContent="center"
      alignItems="center"
      >
        <div className='error-text'>
          <span>4</span>
          <EmojiEmotionsOutlinedIcon />
          <span>4</span>
        </div>
    <div className='sub-pera'>Sorry, an error has occured, Requested Page not found!</div>
    <div className='pera'>You may have mistyped the address or the page may have moved.</div>
    <Button className='icon-btn icon-btn-2  '
          variant="contained"
          color="primary"
          startIcon={<ArrowBackOutlinedIcon />}
          component={Link} 
          to="/"
        >
          Back to Home
        </Button>
    
      </Grid>
    </Grid>
  );
};

export default ErroPage;
