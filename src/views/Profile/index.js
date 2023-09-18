import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ProfileImg from '../../assets/images/16.jpg';
import facebook from '../../assets/images/facebook-icon.png';
import linkdin from '../../assets/images/linkdin-icon.png';
import twitter from '../../assets/images/twitter-icon.png';
import youtube from '../../assets/images/youtube-icon.png';
import location from '../../assets/images/location-icon.png';
import call from '../../assets/images/call-icon.png';
import { Link } from 'react-router-dom';
import { getLoggedUserDetails } from '../Utils/CommonUtils';

const Profile = () => {
  const currentUser = getLoggedUserDetails();
  const [language, setLanguage] = useState('');
  let lang2="";
  useEffect(() => {
   fixData()
  }, []);
  const fixData = async () => {
    for(let i = 0; i < currentUser.language.length; i++) {
      let lang3=currentUser.language[i].label;
      if(i==0){
        lang2 =lang3; 
      }else {
        lang2 =lang2 + ","+lang3; 
      }
    }
    setLanguage(lang2); 
  }

  return (
    <>
      <Grid container
        direction="row"
        justifyContent={'space-between'}
        alignItems="center">
        <Grid item xs={12} MD={'auto'}>
          <div className='card-title2 mb-0'>Your Details</div>
        </Grid>       
      </Grid>
      <Grid container
        direction="row"
        marginTop={3}
        spacing={2}
        justifyContent={'space-between'}
      >
        <Grid item xs={12} md={3}>
          <div className='card-profile '>
            <div className='card-body'>
              <div className='user-profile'>
                <img src={ProfileImg} alt="BigCo Inc. logo" />
                <div className='profile-name'>
                  {currentUser.name}
                </div>
                <div className='profile-email'>
                  {currentUser.email}
                </div>
              </div>
              <Grid direction="row"
                container
                marginTop={1}
                justifyContent={'center'}
                gap={2}
                alignItems="center">
                <Grid>
                  <Button className=' social-icon'
                    variant="contained"
                    color="secondary"
                  >
                    <img src={twitter} alt="BigCo Inc. logo" />
                  </Button>
                </Grid>
                <Grid>
                  <Button className='social-icon'
                    variant="contained"
                    color="secondary"
                  >
                    <img src={facebook} alt="BigCo Inc. logo" />
                  </Button>
                </Grid>
                <Grid>
                  <Button className='social-icon'
                    variant="contained"
                    color="secondary"
                  >
                    <img src={linkdin} alt="BigCo Inc. logo" />
                  </Button>
                </Grid>
                <Grid>
                  <Button className='social-icon'
                    variant="contained"
                    color="secondary"
                  >
                    <img src={youtube} alt="BigCo Inc. logo" />
                  </Button>
                </Grid>
              </Grid>
              <Grid direction="row"
                container
                marginTop={4}
                justifyContent={'center'}
                spacing={1}
                alignItems="center">
                <Grid>
                  <Button className=' primaryIcon btn-primary mr-15'
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/edit-profile"
                  >
                    Edit Profile
                  </Button>
                </Grid>                
              </Grid>
            </div>
          </div>
          <div className='peronal-details mt-5'>
            <div className='profile-name'>
              Personal Details
            </div>
            <Grid direction="row"
              container
              marginTop={4}
              justifyContent={'center'}

              alignItems="center" >
              <Grid item xs={4}>
                <div className='details-title'>Role</div>
              </Grid>
              <Grid item xs={8}>
                <div className='details-Value'> : {currentUser.role} </div>
              </Grid>
              <Grid item xs={4}>
                <div className='details-title'>Name</div>
              </Grid>
              <Grid item xs={8}>
                <div className='details-Value'> : {currentUser.name} </div>
              </Grid>
              <Grid item xs={4}>
                <div className='details-title'>Email</div>
              </Grid>
              <Grid item xs={8}>
                <div className='details-Value'> : {currentUser.email}</div>
              </Grid> <Grid item xs={4}>
                <div className='details-title'>Mobile  </div>
              </Grid>
              <Grid item xs={8}>
                <div className='details-Value'> : {currentUser.mobile}</div>
              </Grid>
              <Grid item xs={4}>
                <div className='details-title'>Location</div>
              </Grid>
              <Grid item xs={8}>
                <div className='details-Value'> : {currentUser.street}</div>
              </Grid>
              <Grid item xs={4}>
                <div className='details-title'>City</div>
              </Grid>
              <Grid item xs={8}>
                <div className='details-Value'> : {currentUser.city}  </div>
              </Grid>
              <Grid item xs={4}>
                <div className='details-title'>Postcode</div>
              </Grid>
              <Grid item xs={8}>
                <div className='details-Value'> : {currentUser.postcode} </div>
              </Grid>
              <Grid item xs={4}>
                <div className='details-title'>Country</div>
              </Grid>
              <Grid item xs={8}>
                <div className='details-Value'> : {currentUser.country} </div>
              </Grid>
              <Grid item xs={4}>
                <div className='details-title'>Gender</div>
              </Grid>
              <Grid item xs={8}>
                <div className='details-Value'> : {currentUser.gender} </div>
              </Grid>
              <Grid item xs={4}>
                <div className='details-title'>Langauge</div>
              </Grid>
              <Grid item xs={8}>
                <div className='details-Value'> : {language}  </div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} md={9}>        
          <div className='peronal-details'>
            <div className='profile-name'>
              Biography
            </div>
            <div className=' data-value-2 mt-2'>
              {currentUser.biography}
            </div>
          </div> 

          <div className='peronal-details'>
            <div className='profile-name'>
              Contact
            </div>
            <Grid container
              direction="row"
              marginTop={3}
              columnSpacing={8}
              alignItems={'center'}
              justifyContent={'start'}>
              
              <Grid item xs={"auto"}>
                <Grid container
                  direction="row"
                  alignItems={'center'}
                  justifyContent={'space-between'}>
                  <Grid item xs={"auto"}>
                    <Button className=' social-icon  mr-15'
                      variant="contained"
                      color="secondary"
                    >
                      <img src={call} alt="BigCo Inc. logo" />
                    </Button>
                  </Grid>
                  <Grid item xs={"auto"}>
                    <div className='details-Value mb-0'>Mobile</div>
                    <div className='details-title mb-0'> {currentUser.mobile}</div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={"auto"}>
                <Grid container
                  direction="row"
                  alignItems={'center'}
                  justifyContent={'space-between'}>
                  <Grid item xs={"auto"}>
                    <Button className=' social-icon mr-15'
                      variant="contained"
                      color="secondary"
                    >
                      <img src={call} alt="BigCo Inc. logo" />
                    </Button>
                  </Grid>
                  <Grid item xs={"auto"}>
                    <div className='details-Value mb-0'>email</div>
                    <div className='details-title mb-0'> {currentUser.email}</div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={"12"} marginTop={2}>
                <Grid container
                  direction="row"
                  alignItems={'center'}
                  justifyContent={'start'}>
                  <Grid item xs={"2"} md={"auto"}>
                    <Button className=' social-icon green mr-15'
                      variant="contained"
                      color="secondary"
                    >
                      <img src={location} alt="BigCo Inc. logo" />
                    </Button>
                  </Grid>
                  <Grid item xs={"10"} md={"auto"}>
                    <div className='details-Value mb-0'>Current Address</div>
                    <div className='details-title mb-0'> 
                    {currentUser.street} 
                    {currentUser.city}
                    {currentUser.postcode}
                    {currentUser.country}
                    </div>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>

          </div>

        </Grid>

      </Grid>
    </>
  );
};

export default Profile;
