import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';

//  third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//import Google from 'assets/images/social-google.svg';
import { useNavigate } from 'react-router';
import {setLoggedUserDetails} from '../Utils/CommonUtils';
import {loginApi} from '../Utils/api';
import constant from '../Utils/constant';


// ==============================|| FIREBASE LOGIN ||============================== //

const FirebaseLogin = ({ ...rest }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  // States for registration
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userEmail === '' || password === '') {
      setError(true);
    } else {

      const data = {
        'email': userEmail,
        'password': password
      }
      
      const loginResponse = await loginApi(constant.adminLoginApi, data);

      if (loginResponse.isSuccess) {
        setSubmitted(true);
        setError(false);
        setLoggedUserDetails(loginResponse.accessToken,loginResponse.admin, 'admin');
        setUserEmail('');
        setPassword('');
        alert('you are successfully logged in');
        navigate('/');
      } else {
        console.log('error=>', loginResponse);
        alert(loginResponse.message);
      }
    }
  };
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
          color: 'green'
        }}>
        <h4>{userEmail} successfully Login!!</h4>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
          color: 'red'
        }}>
        <h4>Please enter all the fields</h4>
      </div>
    );
  };



  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>      

      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
      >
        {() => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <TextField
              fullWidth={true}
              label="email"
              margin="normal"
              name="userEmail"
              onChange={handleUserEmail}
              type="email"
              value={userEmail}
              variant="outlined"
            />

            <FormControl fullWidth={true} sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                name="password"
                onChange={handlePassword}
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
            </FormControl>            

            <Box mt={2}>
              <Button color="primary" fullWidth={true} size="large" type="submit" variant="contained">
                Log In
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
