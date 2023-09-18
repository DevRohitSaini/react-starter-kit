import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  IconButton,
  FormControlLabel,
  Checkbox
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router';
import { setLoggedUserDetails } from '../Utils/CommonUtils';
import {signupApi} from '../Utils/api';
import constant from '../Utils/constant';

// ==============================|| FIREBASE REGISTER ||============================== //

const FirebaseRegister = ({ ...rest }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  // States for registration
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
    setSubmitted(false);
  };
 
  const handleMobile = (e) => {
    setMobile(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userEmail === '' || password === '' || mobile === '') {
      setError(true);
    } else {

      const data = {
        'email': userEmail,
        'password': password,
        'mobile': mobile, 
        'role':'admin'       
      }

      const signupResponse = await signupApi(constant.apiURL+'/auth/admin-signup/', data); 

      if (signupResponse.isSuccess) {
        setSubmitted(true);
        setError(false);
        setLoggedUserDetails(signupResponse.accessToken, signupResponse.user,'admin');
        setUserEmail('');
        setPassword('');
        setMobile('');
        alert(userEmail + ' you have registered successfully.');
        navigate('/');
      } else {
        console.log('error=>', signupResponse);
        alert(signupResponse.message);
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
        <h4>{userEmail} you have registered successfully.</h4>
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

  return (
    <>
    <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <Formik
        initialValues={{
          userEmail: '',
          mobile: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({          
          mobile: Yup.string().max(10).required('Mobile is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().min(6).max(30).required('Password is required')
        })}
      >
        {() => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
          <TextField
              fullWidth ={true}
              label="Email"
              margin="normal"
              name="userEmail"
              onChange={handleUserEmail}
              type="email"
              value={userEmail}
              variant="outlined"
            />
            
            <TextField
              fullWidth ={true}
              label="Mobile"
              margin="normal"
              name="mobile"
              onChange={handleMobile}
              type="text"
              value={mobile}
              variant="outlined"
            />

            <FormControl fullWidth ={true} sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }} variant="outlined">
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
            <Box my={0}>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                }
                label={
                  <>
                    I have read the &nbsp;
                    <Link to="#">Terms and Conditions </Link>
                  </>
                }
              />
            </Box>            
            <Box mt={2}>
              <Button color="primary" fullWidth ={true} size="large" type="submit" variant="contained">
                Register
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseRegister;
