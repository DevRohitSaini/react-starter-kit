import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { Link, useNavigate } from 'react-router-dom';
import { getLoggedUserDetails } from '../Utils/CommonUtils'
import { setLoggedUserDetails } from '../Utils/CommonUtils'
import { getAuthToken } from '../Utils/CommonUtils';
import {putApi} from '../Utils/api';
import constant from '../Utils/constant';

const countryItems = [
  { label: '', },
  { label: 'India', },
  { label: 'Pakistan', },
  { label: 'Nepal', },
  { label: 'United State', },
  { label: 'United Kingdom', },
  { label: "Russia", },
  { label: 'Bhutan', }
];

const genderItems = [
  { label: '', },
  { label: 'Male', },
  { label: 'Female', }
];

const languageItems = [
  { label: '', },
  { label: 'English', },
  { label: 'Hindi', },
  { label: 'German', },
  { label: 'Arebian', },
  { label: 'Gujarati', },
  { label: "Marathi", }
];

const EditProfile = () => {

  const navigate = useNavigate();

  const currentUser = getLoggedUserDetails();
  const token = getAuthToken();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setpostcode] = useState('');
  const [country, setCountry] = useState('');  
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState([]);
  const [biography, setBiography] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleStreet = (e) => {
    setStreet(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handlePostcode = (e) => {
    setpostcode(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.innerText);
  };  
  const handleGender = (e) => {
    setGender(e.target.innerText);
  };
  const handleLanguage = (e,newValue) => {
    if(e){
      setLanguage(newValue)
    }
  };
  const handleBiography = (e) => {
    setBiography(e.target.value);
  };


  useEffect(() => {
    getCurrentUsers();
  }, []);

  const getCurrentUsers = () => {
    setName(currentUser.name);
    setMobile(currentUser.mobile);
    setEmail(currentUser.email);
    setStreet(currentUser.street);
    setCity(currentUser.city);
    setpostcode(currentUser.postcode);
    setCountry(currentUser.country);
    setGender(currentUser.gender);
    setLanguage(currentUser.language);
    setBiography(currentUser.biography);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      'name': name,
      'mobile': mobile,
      'email': email,
      'street': street,
      'city': city,
      'postcode': postcode,
      'country': country,
      'gender': gender,
      'language': language,
      'biography': biography
    }    

    const apiResponse = await putApi(constant.adminApi+currentUser._id, token, data);
    
    if (apiResponse.isSuccess) {
      setLoggedUserDetails(token, apiResponse.savedAdmin,'admin');
      alert('Your details has been updated.');
      navigate('/profile');
    } else {
      console.log('error=>', apiResponse);
      alert(apiResponse.message);
    }

  }

  const isOptionEqualToValue = (option, value) => option.label === value.label;
  return (
    <>
      <div className='card'>
        <div className='profile-name mb-5'>
          Basic Info :
        </div>
        <Grid container
          direction="row"
          spacing={3}
          alignItems="center">          
          <Grid item xs={12} md={4}>
            <TextField id="filled-basic" label="Full Name"
              onChange={handleName}
              value={name} variant="filled" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField id="filled-basic" label="Phone Number"
              onChange={handleMobile}
              value={mobile} type="number" variant="filled" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField id="filled-basic"
              onChange={handleEmail}
              value={email} label="Email Address" variant="filled" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField id="filled-basic"
              onChange={handleStreet}
              value={street} label="Address" variant="filled" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField id="filled-basic"
              onChange={handleCity}
              value={city} label="City" variant="filled" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField id="filled-basic" label="Post Code"
              onChange={handlePostcode}
              value={postcode} type="number" variant="filled" />
          </Grid>

          <Grid item xs={12} md={4}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={countryItems}
              isOptionEqualToValue={isOptionEqualToValue}
              defaultValue={currentUser.country}
              onChange={handleCountry}                
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Country" />}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Autocomplete
              disablePortal
              id="combo-box-demo2"
              options={genderItems} 
              isOptionEqualToValue={isOptionEqualToValue}
              defaultValue={currentUser.gender}
              onChange={handleGender}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Gender" />}
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Autocomplete
              multiple
              disablePortal
              id="combo-box-demo2"
              options={languageItems}              
              isOptionEqualToValue={isOptionEqualToValue}
              defaultValue={currentUser.language}
              onChange={handleLanguage}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Language" />}
            />
          </Grid> 

        </Grid>        

        <div className='profile-name mb-5 mt-30'>
          Biography :
        </div>
        <Grid container
          direction="row"
          spacing={3}
          alignItems="center">
          <Grid item xs={12}>
            <TextField
              id="filled-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              onChange={handleBiography}
              value={biography}
              variant="filled"
            />
          </Grid>
        </Grid>

        <Grid container
          direction="row"
          spacing={3}
          marginTop={1}
          alignItems="center">
          <Grid item xs={'auto'}>
            <Button className='btn-main' type='submit' onClick={handleSubmit} variant="contained">Save</Button>
          </Grid>
          <Grid item xs={'auto'}>
            <Button className='btn-main' component={Link} to="/profile" variant="outlined">Cancel</Button>
          </Grid>
        </Grid>

      </div>
    </>
  );
};

export default EditProfile;
