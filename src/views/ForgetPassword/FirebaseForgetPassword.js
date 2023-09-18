import React from 'react';

// material-ui
import {
  Box,
  Button,
  Grid,
  TextField,
} from '@mui/material';
//  third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// ==============================|| FIREBASE LOGIN ||============================== //

const FirebaseForgetPassword = ({ ...rest }) => {

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12}>

        </Grid>
      </Grid>
      <Formik
        initialValues={{
          email: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        })}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address "
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />

            <Box mt={2}>
              <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                Next
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseForgetPassword;
