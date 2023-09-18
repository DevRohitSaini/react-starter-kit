import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'Date', headerName: 'Date', width: 160 },
  { field: 'PunchIn', headerName: 'Punch In', width: 160 },
  { field: 'PunchOut', headerName: 'Punch Out', width: 150 },
  { field: 'Production', headerName: 'Production', width: 150 },
  { field: 'Break', headerName: 'Break', width: 130 },
  
  {
    field: 'Overtime',
    headerName: 'Overtime',
    type: 'number',
    width: 90,
  },
 
];

const rows = [
  { id: 1, PunchIn: '10:00 AM', PunchOut:'7:30 PM', Production:'9 hrs', Break:'1 hrs', Date: '31 Jul 2023', Overtime: 0.30 },
  { id: 2, PunchIn: '10:00 AM', PunchOut:'7:30 PM', Production:'9 hrs', Break:'1 hrs', Date: '31 Jul 2023', Overtime: 0.30 },
  { id: 3, PunchIn: '10:00 AM', PunchOut:'7:30 PM', Production:'9 hrs', Break:'1 hrs', Date: '31 Jul 2023', Overtime: 0.30 },
  { id: 4, PunchIn: '10:00 AM', PunchOut:'7:30 PM', Production:'9 hrs', Break:'1 hrs', Date: '31 Jul 2023', Overtime: 0.30 },

 
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
const BorderLinearProgress4 = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#ff9b44' : '#308fe8',
  },
}));





const EmployeeAttandance = () => {

  return (
    <>
      <Grid container
        direction="row"
        justifyContent={'space-between'}
        alignItems="center">
        <Grid item xs={'12'} md={'auto'}>
          <div className='card-title2 mb-0'>Employee <span>Attendance</span> </div>
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

      <Grid className='employee-main' container
        direction="row"
        spacing={3}
        marginTop={1}
        alignItems="center">
        <Grid item xs={12} md={4}>
          <div className='card-main'>
            <h5 className='card-tit'>Timesheet</h5>
            <div className='card-sub-line mt-2'>
              <div className='details-Value-2 mb-0'>Punch In at</div>
              <div className='details-Value mb-0'>Wed, 11th Mar 2019 10.00 AM</div>
            </div>
            <div className='punch-time djfcf mt-3'>
              <div className='punch-count djfc'>3:45 hrs</div>
              <Button className='btn-sub-main round-btn mt-2'
                color="primary"
              > Punch In
              </Button>
            </div>
            <Grid container
              direction="row"
              spacing={3}
              alignItems="center">
              <Grid item xs={12} md={6}>
                <div className='card-sub-line mt-2 djfcf'>
                  <div className='details-Value-2 mb-0'>Break</div>
                  <div className='details-Value mb-0'>1.21 Hrs</div>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className='card-sub-line mt-2 djfcf'>
                  <div className='details-Value-2 mb-0'>Overtime</div>
                  <div className='details-Value mb-0'>3 hrs</div>
                </div>
              </Grid>
            </Grid>

          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className='card-main'>
            <h5 className='card-tit'>Statistics</h5>
            <div className='card-sub-line mt-2'>
              <Grid container
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="center">
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>Today</div>
                </Grid>
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>3.45 / 8hrs</div>
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
                  <div className='details-Value-2 mb-0'>This Week</div>
                </Grid>
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>28 / 40hrs</div>
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
                  <div className='details-Value-2 mb-0'>This Month</div>
                </Grid>
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>90 / 160hrs</div>
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
                  <div className='details-Value-2 mb-0'>Remaining</div>
                </Grid>
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>85 / 160hrs</div>
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
            <div className='card-sub-line mt-2'>
              <Grid container
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="center">
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>Overtime</div>
                </Grid>
                <Grid item xs={12} md={'auto'}>
                  <div className='details-Value-2 mb-0'>4 hrs</div>
                </Grid>
              </Grid>
              <Grid className='progress-main' container
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="center">
                <Grid item xs={12} md={'12'}>
                  <Box sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress4 variant="determinate" value={50} />
                  </Box>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className='card-main'>
            <h5 className='card-tit'>Today Activity</h5>
            <ul>
              <li>
                <p className='details-Value-2 fw-500 mb-0 mt-0'>Punch In at</p>
                <p className='details-Value-2 djfc start time-icon c-gray mt-0' > <span>{<AccessAlarmOutlinedIcon />}</span> 10.30 AM.</p>
              </li>
              <li>
                <p className='details-Value-2 fw-500 mb-0 mt-0'>Punch In at</p>
                <p className='details-Value-2 djfc start time-icon c-gray mt-0' > <span>{<AccessAlarmOutlinedIcon />}</span> 11.00 AM.</p>
              </li>
              <li>
                <p className='details-Value-2 fw-500 mb-0 mt-0'>Punch In at</p>
                <p className='details-Value-2 djfc start time-icon c-gray mt-0' > <span>{<AccessAlarmOutlinedIcon />}</span> 12.00 AM.</p>
              </li>
              <li>
                <p className='details-Value-2 fw-500 mb-0 mt-0'>Punch In at</p>
                <p className='details-Value-2 djfc start time-icon c-gray mt-0' > <span>{<AccessAlarmOutlinedIcon />}</span> 12.30 AM.</p>
              </li>
              <li>
                <p className='details-Value-2 fw-500 mb-0 mt-0'>Punch In at</p>
                <p className='details-Value-2 djfc start time-icon c-gray mt-0' > <span>{<AccessAlarmOutlinedIcon />}</span> 3.00 AM.</p>
              </li>
              <li>
                <p className='details-Value-2 fw-500 mb-0 mt-0'>Punch In at</p>
                <p className='details-Value-2 djfc start time-icon c-gray mt-0' > <span>{<AccessAlarmOutlinedIcon />}</span> 3.00 AM.</p>
              </li>
            </ul>

          </div>
        </Grid>
      </Grid>
      <Grid container
        direction="row"
        marginTop={3}
        justifyContent={'space-between'}
        alignItems="center">
        <Grid item xs={'12'} md={'12'}>
          <div className='card'>
            <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              marginBottom={3}
            >
              <Grid item xs={'auto'}>
                <div className='card-title'>Attendance</div>
              </Grid>
             
            </Grid>
            <div style={{ height: "auto", width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </div>
        </Grid>
      </Grid>

    </>
  );
};

export default EmployeeAttandance;
