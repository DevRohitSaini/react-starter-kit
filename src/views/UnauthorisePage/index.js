import React from 'react';

// material-ui
import { Grid, } from '@mui/material';

import Button from '@mui/material/Button';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from 'react-router-dom';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

// project import

// assets

// ==============================|| LOGIN ||============================== //

const UnauthorisePage = () => {

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className='error-page'
      sx={{ height: '100%', minHeight: '100vh' }}
    >
      <Grid item xs={'auto'}
        justifyContent="center"
        alignItems="center"
      >
        <div className='error-text'>
          <span>4</span>
          <SentimentDissatisfiedOutlinedIcon />
          <span>1</span>
        </div>
        <div className='sub-pera'>Sorry, You do not have access to open this page.</div>
        <div className='pera'>You may have mistyped the address or the page may have moved.</div>
        <Button className='icon-btn icon-btn-2'
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

export default UnauthorisePage;
