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
import BarChart from '../Dashboard/BarChart';




const leaveType = [
  { label: '', },
  { label: 'Casual Leave', },
  { label: 'Sick Leave', },
  { label: 'Loss of Pay', }


];


const data = {
  series: [44, 55, 41, 17, 15],
  labels: ['A', 'B', 'C', 'D', 'E']
};

const EmployeeDashboard = () => {

 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
          <div className='card-title2 mb-0'>Employee <span>Dashboard</span> </div>
        </Grid>
        <Grid item xs={'12'} md={'auto'}>
          <Grid container
            direction="row"
            spacing={2}
            justifyContent={'space-between'}
            alignItems="center">
            <Grid item xs={'12'} md={'auto'}>
              <Button className='btn-sub-main'
                color="primary"
                onClick={handleClickOpen}
              > Apply Leave
              </Button>
            </Grid>
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
            <Grid item xs={'12'} md={'auto'}>
              <Button className='btn-sub-main'
                color="primary"
              > Punch In
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
                <h5 className='card-tit'>Total Attendance</h5>
              </Grid>
              <Grid item xs={'12'} md={'auto'}>
                <h6 className='card-total blue'>30</h6>
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
                <h5 className='card-tit'>Present Days</h5>
              </Grid>
              <Grid item xs={'12'} md={'auto'}>
                <h6 className='card-total green'>15</h6>
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
                <h5 className='card-tit'>Absent Days</h5>
              </Grid>
              <Grid item xs={'12'} md={'auto'}>
                <h6 className='card-total red'>15</h6>
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
                <h5 className='card-tit'>Holidays</h5>
              </Grid>
              <Grid item xs={'12'} md={'auto'}>
                <h6 className='card-total Pink'>15</h6>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
     
      <Grid container
        direction="row"
        marginTop={1}
        spacing={3}
        justifyContent={'space-between'}
        >
        <Grid item xs={'12'} md={'7'}>
        <div className='card'>
            <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={'auto'}>
                <div className='card-title'>My ApexCharts Bar Chart</div>
              </Grid>
              <Grid item xs={'12'}>
              <BarChart data={data} />
              </Grid>
             
            </Grid>
          </div>
        <div>
      
      
    </div>
        </Grid>
        <Grid item xs={'12'} md={'5'}>
        <div className='card '>
            <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={'auto'}>
                <div className='card-title'>Attendance</div>
              </Grid>
              <Grid item xs={'auto'}>

                <Button className='btn-transparent btn-transparent'
                  color="primary"
                  onClick={handleClickOpen}
                > Apply Leave
                </Button>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="space-between"
              marginTop={2}
              alignItems="center">
              <Grid item xs={'4'}>
                <div className='fs-16  fw-600'>Leave Type</div>
              </Grid>
              <Grid item xs={'4'}>
                <div className='fs-16  fw-600'>Total Earn</div>
              </Grid>
              <Grid item xs={'2'}>
                <div className='fs-16  fw-600'>Used</div>
              </Grid>
              <Grid item xs={'2'}>
                <div className='fs-16 fw-600'>Balance</div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="space-between"
              marginTop={1}
              alignItems="center">
              <Grid item xs={'4'}>
                <div className='details-Value-2 c-gray'>Sick Leave</div>
              </Grid>
              <Grid item xs={'4'}>
                <div className='details-Value-2 c-gray fw-400'>10</div>
              </Grid>
              <Grid item xs={'2'}>
                <div className='details-Value-2 c-gray fw-400'>01</div>
              </Grid>
              <Grid item xs={'2'}>
                <div className='details-Value-2 c-gray fw-400'>09</div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="space-between"
              marginTop={1}
              alignItems="center">
              <Grid item xs={'4'}>
                <div className='details-Value-2 c-gray'>Casual Leave</div>

              </Grid>
              <Grid item xs={'4'}>
                <div className='details-Value-2 c-gray fw-400'>08</div>
              </Grid>
              <Grid item xs={'2'}>
                <div className='details-Value-2 c-gray fw-400'>02</div>
              </Grid>
              <Grid item xs={'2'}>
                <div className='details-Value-2 c-gray fw-400'>06</div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="space-between"
              marginTop={1}
              alignItems="center">
              <Grid item xs={'4'}>
                <div className='details-Value-2 c-gray'>Privilege Leave</div>

              </Grid>
              <Grid item xs={'4'}>
                <div className='details-Value-2 c-gray fw-400'>10</div>
              </Grid>
              <Grid item xs={'2'}>
                <div className='details-Value-2 c-gray fw-400'>03</div>
              </Grid>
              <Grid item xs={'2'}>
                <div className='details-Value-2 c-gray fw-400'>07</div>
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

export default EmployeeDashboard;
