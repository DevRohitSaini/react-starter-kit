import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid } from '@mui/material';

// project import
import FirebaseRegister from './FirebaseRegister';
//import { Link } from 'react-router-dom';

// assets
import Logo from 'assets/images/logo-dark.svg';

// ==============================|| REGISTER ||============================== //

const Register = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: theme.palette.common.black, height: '100%', minHeight: '100vh' }}
    >
      <Grid item xs={11} md={6} lg={4}>
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            position: 'relative',
            my: 3,
            mx: 'auto',
            '& .MuiCardContent-root': {
              flexGrow: 1,
              flexBasis: '50%',
              width: '50%'
            },
            maxWidth: 475
          }}
        >
          <CardContent sx={{ p: theme.spacing(5, 4, 3, 4) }}>
            <Grid container direction="column" spacing={4} justifyContent="center">
              <Grid item xs={12}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography color="textPrimary" gutterBottom variant="h2">
                      Register
                    </Typography>
                  </Grid>
                  <Grid item>                    
                      <img alt="Auth method" src={Logo} />                    
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <FirebaseRegister />
              </Grid>
              <Grid container justifyContent="center" sx={{ mt: theme.spacing(2), mb: theme.spacing(1) }}>
                <Grid item>
                  <Typography variant="subtitle2" color="secondary" sx={{ textDecoration: 'none', pl: 2 }}>
                    <RouterLink to="/application/login" className='center'>Having an account</RouterLink>
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

export default Register;
