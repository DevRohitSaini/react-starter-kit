import React from 'react';
// material-ui
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';
//  third party
import * as Yup from 'yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Formik } from 'formik';
// ==============================|| FIREBASE LOGIN ||============================== //

const FirebaseConfirmpass = ({ ...rest }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
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
                <FormControl fullWidth error={Boolean(touched.password && errors.password)} >
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text">
                      {' '}
                      {errors.password}{' '}
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl className='mt-5' fullWidth error={Boolean(touched.password && errors.password)} >
                  <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Confirm Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  
                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text">
                      {' '}
                      {errors.password}{' '}
                    </FormHelperText>
                  )}
                </FormControl>

                <Box mt={2}>
                  <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                    Next
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>

    </>
  );
};

export default FirebaseConfirmpass;
