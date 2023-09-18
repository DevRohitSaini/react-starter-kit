import React, { useState, useRef  } from 'react';

// material-ui
import { useTheme, } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid, TextField, Button,

} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';



// project import
import FirebaseForgetPassword from './FirebaseForgetPassword';
import AuthConfirmpass from './FirebaseConfirmpass';
// assets
import Logo from 'assets/images/logo-dark.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  textField: {
    width: '50px',
    margin: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));
// ==============================|| LOGIN ||============================== //

const ForgetPassword = () => {




  const classes = useStyles();
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    setOTP((prevOTP) => {
      const newOTP = [...prevOTP];
      newOTP[index] = value;
      if (index < inputRefs.current.length - 1 && value !== '') {
        inputRefs.current[index + 1].focus();
      }
      return newOTP;
    });
  };

  const handleSubmit = () => {
    const enteredOTP = otp.join('');
    // Here you can implement the logic to verify the OTP, e.g., by sending it to a server for verification.
    console.log('Entered OTP:', enteredOTP);
  };
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: theme.palette.common.black, height: '100%', minHeight: '100vh' }}
    >
      <Grid item xs={11} sm={7} md={6} lg={4}>
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            position: 'relative',
            '& .MuiCardContent-root': {
              flexGrow: 1,
              flexBasis: '50%',
              width: '50%'
            },
            maxWidth: '475px',
            margin: '24px auto'
          }}
        >
          <CardContent sx={{ p: theme.spacing(5, 4, 3, 4) }}>
            <Grid container direction="column" spacing={4} justifyContent="center">
              <Grid item xs={12}>
               
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography color="textPrimary" gutterBottom variant="h2">
                      Forget Password
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      To keep connected with us.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img alt="Auth method" src={Logo} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <FirebaseForgetPassword />
              </Grid>
              <Grid container justifyContent="flex-start" sx={{ mt: theme.spacing(2), mb: theme.spacing(1) }}>
                <Grid item>
                  <Typography variant="subtitle2" color="secondary" sx={{ textDecoration: 'none', pl: 2 }}>

                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid container direction="column" spacing={4} justifyContent="center">
              <Grid item xs={12}>
               
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography color="textPrimary" gutterBottom variant="h2">
                     Enter OTP
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      To keep connected with us.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img alt="Auth method" src={Logo} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
              <div className='otp-form'>
                  <h3 className='center'>Please enter otp number which we send you on ***** **978</h3>
                  <div className='d-flex'>
                    {otp.map((value, index) => (
                      <TextField
                        key={index}
                        className={classes.textField}
                        variant="outlined"
                        size="small"
                        value={value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        inputProps={{
                          maxLength: 1,
                          style: {
                            textAlign: 'center',
                          },
                        }}
                        onKeyDown={(e) => {
                          // Move focus to the previous input on backspace press
                          if (e.key === 'Backspace' && index > 0) {
                            inputRefs.current[index - 1].focus();
                          }
                        }}
                        inputRef={(input) => {
                          inputRefs.current[index] = input;
                        }}
                      />
                    ))}
                  </div>
                  <Button
                    className={classes.submitButton}
                    variant="contained"
                    fullWidth size="large"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={otp.some((value) => !value)}
                  >
                    Submit
                  </Button>
                </div>
              </Grid>
              <Grid container justifyContent="flex-start" sx={{ mt: theme.spacing(2), mb: theme.spacing(1) }}>
                <Grid item>
                  <Typography variant="subtitle2" color="secondary" sx={{ textDecoration: 'none', pl: 2 }}>

                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid container direction="column" spacing={4} justifyContent="center">
              <Grid item xs={12}>
               
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography color="textPrimary" gutterBottom variant="h2">
                      Forget Password
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      To keep connected with us.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img alt="Auth method" src={Logo} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
              <AuthConfirmpass />
              </Grid>
              <Grid container justifyContent="flex-start" sx={{ mt: theme.spacing(2), mb: theme.spacing(1) }}>
                <Grid item>
                  <Typography variant="subtitle2" color="secondary" sx={{ textDecoration: 'none', pl: 2 }}>

                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

      </Grid>
    </Grid>
  );
};

export default ForgetPassword;
