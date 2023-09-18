import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import RevenuChartCard from '../Dashboard/RevenuChartCard';
import RevenuChartCardData from '../Dashboard/chart/revenu-chart';

const leaveType = [
  { label: '', },
  { label: 'Casual Leave', },
  { label: 'Sick Leave', },
  { label: 'Loss of Pay', }


];
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));
const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#55ce63' : '#308fe8',
  },
}));
const BorderLinearProgress3 = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#f62d51' : '#308fe8',
  },
}));


const AdminDashboard = () => {
  const [open, setOpen] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container
        direction="row"
        justifyContent={'space-between'}
        alignItems="center">
        <Grid item xs={'12'} md={'auto'}>
          <div className='card-title2 mb-0'>Welcome <span>Admin</span> </div>
        </Grid>
        <Grid item xs={'12'} md={'auto'}>
          <Grid container
            direction="row"
            spacing={2}
            justifyContent={'space-between'}
            alignItems="center">
            <Grid item xs={'12'} md={'auto'}>
              <Button className='btn-sub-main btn-gray'
                color="primary"
                startIcon={<CalendarMonthOutlinedIcon />}
              > 15 Mar 2023
              </Button>
            </Grid>
            <Grid item xs={'12'} md={'auto'}>
              <Button className='btn-sub-main btn-gray'
                color="primary"
                startIcon={<AccessAlarmOutlinedIcon />}
              > 09:30 AM
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container
        direction="row"
        marginTop={2}
        spacing={3}
        justifyContent={'space-between'}
        alignItems="center">
        <Grid item xs={'12'} md={'3'}>
          <div className='card-main'>
            <Grid container
              direction="row"
              spacing={2}
              justifyContent={'space-between'}
              alignItems="center">
              <Grid item xs={'12'} md={'auto'}>
                <h5 className='card-tit'>Projects</h5>
              </Grid>
              <Grid item xs={'12'} md={'auto'}>
                <h6 className='card-total blue'>112</h6>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={'12'} md={'3'}>
          <div className='card-main'>
            <Grid container
              direction="row"
              spacing={2}
              justifyContent={'space-between'}
              alignItems="center">
              <Grid item xs={'12'} md={'auto'}>
                <h5 className='card-tit'>Clients</h5>
              </Grid>
              <Grid item xs={'12'} md={'auto'}>
                <h6 className='card-total green'>44</h6>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={'12'} md={'3'}>
          <div className='card-main'>
            <Grid container
              direction="row"
              spacing={2}
              justifyContent={'space-between'}
              alignItems="center">
              <Grid item xs={'12'} md={'auto'}>
                <h5 className='card-tit'>Tasks</h5>
              </Grid>
              <Grid item xs={'12'} md={'auto'}>
                <h6 className='card-total red'>37</h6>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={'12'} md={'3'}>
          <div className='card-main'>
            <Grid container
              direction="row"
              spacing={2}
              justifyContent={'space-between'}
              alignItems="center">
              <Grid item xs={'12'} md={'auto'}>
                <h5 className='card-tit'>Employees</h5>
              </Grid>
              <Grid item xs={'12'} md={'auto'}>
                <h6 className='card-total Pink'>218</h6>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Grid container
        direction="row"
        marginTop={2}
        spacing={3}
        justifyContent={'space-between'}
       >
        <Grid item xs={'12'} md={'7'}>
        <div className='card'>
            <Grid item xs={'auto'}>
              <div className='card-title'>Statistics</div>
            </Grid>
            <div className='card-sub-line mt-2'>
              <Grid container
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="center">
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>Today Leave</div>
                </Grid>
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>4 / 65</div>
                </Grid>
              </Grid>
              <Grid className='progress-main' container
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="center">
                <Grid item xs={12} md={'12'}>
                  <Box sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" value={30} />
                  </Box>
                </Grid>
              </Grid>
            </div>
            <div className='card-sub-line mt-2'>
              <Grid container
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="center">
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>Completed Projects</div>
                </Grid>
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>85 / 112</div>
                </Grid>
              </Grid>
              <Grid className='progress-main' container
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="center">
                <Grid item xs={12} md={'12'}>
                  <Box sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress2 variant="determinate" value={50} />
                  </Box>
                </Grid>
              </Grid>
            </div>
            <div className='card-sub-line mt-2'>
              <Grid container
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="center">
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>Pending Leave</div>
                </Grid>
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>8 / 10</div>
                </Grid>
              </Grid>
              <Grid className='progress-main' container
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="center">
                <Grid item xs={12} md={'12'}>
                  <Box sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" value={70} />
                  </Box>
                </Grid>
              </Grid>
            </div>
            <div className='card-sub-line mt-2'>
              <Grid container
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="center">
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>Task</div>
                </Grid>
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>30 / 70</div>
                </Grid>
              </Grid>
              <Grid className='progress-main' container
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="center">
                <Grid item xs={12} md={'12'}>
                  <Box sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress3 variant="determinate" value={15} />
                  </Box>
                </Grid>
              </Grid>
            </div>
          </div>
        <div className='card mt-30'>
            <Grid item xs={'auto'}>
            </Grid>
            <RevenuChartCard chartData={RevenuChartCardData} />
          </div>
        </Grid>
        <Grid item xs={'12'} md={'5'}>
        <div className='card'>
            <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={'auto'}>
                <div className='card-title'>Birthday of the month</div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="start"
              marginTop={1}
              spacing={2}
              alignItems="center">
              <Grid item xs={'auto'}>
                <div className='birth-card-highlight djfcf  text-center fs-14 fw-600 blue'> <span>3</span>
                  <span>Feb</span></div>
              </Grid>
              <Grid item xs={'col'}>
                <div className='fs-16  fw-600'>Chintan Patel</div>
                <div className='fs-16 c-gray fw-400'>Senior QA Analyst</div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="start"
              marginTop={1}
              spacing={2}
              alignItems="center">
              <Grid item xs={'auto'}>
                <div className='birth-card-highlight djfcf  text-center fs-14 fw-600 Pink'> <span>3</span>
                  <span>Feb</span></div>
              </Grid>
              <Grid item xs={'col'}>
                <div className='fs-16  fw-600'>Rohit</div>
                <div className='fs-16 c-gray fw-400'>Sr. Web Devloper</div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="start"
              marginTop={1}
              spacing={2}
              alignItems="center">
              <Grid item xs={'auto'}>
                <div className='birth-card-highlight djfcf  text-center fs-14 fw-600 green'> <span>3</span>
                  <span>Feb</span></div>
              </Grid>
              <Grid item xs={'col'}>
                <div className='fs-16  fw-600'>Dharmik Patel</div>
                <div className='fs-16 c-gray fw-400'>Sr. Web Designer</div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="start"
              marginTop={1}
              spacing={2}
              alignItems="center">
              <Grid item xs={'auto'}>
                <div className='birth-card-highlight djfcf  text-center fs-14 fw-600 red'> <span>3</span>
                  <span>Feb</span></div>
              </Grid>
              <Grid item xs={'col'}>
                <div className='fs-16  fw-600'>Dharmik Patel</div>
                <div className='fs-16 c-gray fw-400'>Sr. Web Designer</div>
              </Grid>
            </Grid>
          </div>
          <div className='card mt-30'>
            <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={'auto'}>
                <div className='card-title'>Work Anniversary of the month</div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="start"
              marginTop={1}
              spacing={2}
              alignItems="center">
              <Grid item xs={'auto'}>
                <div className='birth-card-highlight djfcf  text-center fs-14 fw-600 blue'> <span>3</span>
                  <span>Feb</span></div>
              </Grid>
              <Grid item xs={'10'}>
                <Grid container
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                  alignItems="center">
                  <Grid item xs={'auto'}>
                    <div className='fs-16  fw-600'>Chintan Patel</div>
                  </Grid>
                  <Grid item xs={'auto'}>
                    <div className='fs-16 c-gray fw-500'>2 Year Completed</div>
                  </Grid>
                </Grid>
                <div className='fs-16 c-gray fw-400'>Senior QA Analyst</div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="start"
              marginTop={1}
              spacing={2}
              alignItems="center">
              <Grid item xs={'auto'}>
                <div className='birth-card-highlight djfcf  text-center fs-14 fw-600 Pink'> <span>3</span>
                  <span>Feb</span></div>
              </Grid>
              <Grid item xs={'10'}>
                <Grid container
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                  alignItems="center">
                  <Grid item xs={'auto'}>
                    <div className='fs-16  fw-600'>Chintan Patel</div>
                  </Grid>
                  <Grid item xs={'auto'}>
                    <div className='fs-16 c-gray fw-500'>2 Year Completed</div>
                  </Grid>
                </Grid>
                <div className='fs-16 c-gray fw-400'>Senior QA Analyst</div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="start"
              marginTop={1}
              spacing={2}
              alignItems="center">
              <Grid item xs={'auto'}>
                <div className='birth-card-highlight djfcf  text-center fs-14 fw-600 green'> <span>3</span>
                  <span>Feb</span></div>
              </Grid>
              <Grid item xs={'10'}>
                <Grid container
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                  alignItems="center">
                  <Grid item xs={'auto'}>
                    <div className='fs-16  fw-600'>Chintan Patel</div>
                  </Grid>
                  <Grid item xs={'auto'}>
                    <div className='fs-16 c-gray fw-500'>2 Year Completed</div>
                  </Grid>
                </Grid>
                <div className='fs-16 c-gray fw-400'>Senior QA Analyst</div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="start"
              marginTop={1}
              spacing={2}
              alignItems="center">
              <Grid item xs={'auto'}>
                <div className='birth-card-highlight djfcf  text-center fs-14 fw-600 red'> <span>3</span>
                  <span>Feb</span></div>
              </Grid>
              <Grid item xs={'10'}>
                <Grid container
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                  alignItems="center">
                  <Grid item xs={'auto'}>
                    <div className='fs-16  fw-600'>Chintan Patel</div>
                  </Grid>
                  <Grid item xs={'auto'}>
                    <div className='fs-16 c-gray fw-500'>2 Year Completed</div>
                  </Grid>
                </Grid>
                <div className='fs-16 c-gray fw-400'>Senior QA Analyst</div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <div>
        <Dialog className='apply-leave'
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Apply Leave"}
          </DialogTitle>
          <DialogContent>
            <Grid container
              direction="row"
              spacing={3}
              marginTop={1}
              alignItems="center">
              <Grid item xs={12} md={12}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={leaveType}
                  sx={{ width: '100%' }}
                  renderInput={(params) => <TextField {...params} label="Leave Type" />}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Leave From" />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Leave To" />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField id="outlined-basic" label="Number of days" type="number" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Reason For Leave"
                  multiline
                  rows={4}
                  defaultValue=""
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>
              Apply
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default AdminDashboard;
