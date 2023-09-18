import React from 'react';
import darkLogo from '../../../src/assets/images/logo-dark.png';
import graphImg from '../../../src/assets/images/chart-graph.png';
import {
  Box,
  Button,
  Grid,
  TextField,

} from '@mui/material';

//  third party
import * as Yup from 'yup';
import { Formik } from 'formik';









// project import

// assets

// ==============================|| LOGIN ||============================== //

const UpcomingPage = ({ ...rest }) => {

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className='coming-soon'
      sx={{ height: '100%', minHeight: '100vh' }}
    >
      <Grid item xs={'auto'}
        justifyContent="center"
        alignItems="center"
        className='white-card py-15 py-lg-20 text-center'
      >
        <img className='img-logo' src={darkLogo} alt="BigCo Inc. logo" />

        <div className='sub-pera '>We are Launching Soon</div>
        <div className='pera'>This is your opportunity to get creative amazing opportunaties<br></br>
          that gives readers an idea</div>
        <Formik
          initialValues={{
            email: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string().max(255).required('Password is required')
          })}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form noValidate onSubmit={handleSubmit} {...rest}>
              <Grid container
                direction="row"
                marginTop={1}
                spacing={2} 
                justifyContent={'space-between'}
                alignItems="start">
                <Grid item xs={'7'}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email Address / Username"
                    margin="normal"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={'5'}>
                <Box mt={2}>
                <Button className='btn-sub' color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                  Log In
                </Button>
              </Box>  
                </Grid>
              </Grid>

            
            </form>
          )}
        </Formik>
        <img className='graph-img' src={graphImg} alt="BigCo Inc. logo" />
      </Grid>
    </Grid>
  );
};

export default UpcomingPage;
