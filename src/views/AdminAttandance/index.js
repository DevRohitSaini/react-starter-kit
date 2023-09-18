import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';


export default function AdminAttandance() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const columns = [

    { field: 'EmployeeName', headerName: 'Employee Name', width: 220 },
    {
      field: '1',
      headerName: '1',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '2',
      headerName: '2',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },

    {
      field: '3',
      headerName: '3',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '4',
      headerName: '4',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '5',
      headerName: '5',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '6',
      headerName: '6',
      width: 20,

      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn red'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >A
        </Button>;
      },
    },
    {
      field: '7',
      headerName: '7',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '8',
      headerName: '8',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '9',
      headerName: '9',
      width: 20,

      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn yellow'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >H
        </Button>;
      },
    },
    {
      field: '10',
      headerName: '10',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '11',
      headerName: '11',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '12',
      headerName: '12',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '13',
      headerName: '13',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '14',
      headerName: '14',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '15',
      headerName: '15',
      width: 20,
      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn green'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >P
        </Button>;
      },
    },
    {
      field: '16',
      headerName: '16',
      width: 20,

      renderCell: (params) => {
        const handleOpenDialog = () => {
          setSelectedRow(params.row); // Store the selected row data in state
          setOpenDialog(true); // Open the dialog
        };

        return <Button className='icon-btn red'
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >A
        </Button>;
      },
    },

  ];
  const timesheet = [

    { field: 'EmployeeName', headerName: 'Employee Name', width: 220 },
    { field: 'July', headerName: 'July 01', width: 90 },
    { field: '2', headerName: 'July 02', width: 90 },
    { field: '3', headerName: 'July 03', width: 90 },
    { field: '4', headerName: 'July 04', width: 90 },
    { field: '5', headerName: 'July 05', width: 90 },
    { field: 'Total', headerName: 'Total', width: 300 },
   


  ];
  const rows = [
    { id: 1, EmployeeName: 'Dharmik Patel', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10', 11: '11', 12: '12', 13: '13', 14: '14', 15: '15', 16: '16', },
    { id: 2, EmployeeName: 'Rohit', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10', 11: '11', 12: '12', 13: '13', 14: '14', 15: '15', 16: '16', },
    { id: 3, EmployeeName: 'Abhishek Modanwal', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10', 11: '11', 12: '12', 13: '13', 14: '14', 15: '15', 16: '16', },
  ];
  const timesheetrow = [
    { id: 1, EmployeeName: 'Dharmik Patel', July: '8:00 hrs', 2: '8:15 hrs', 3: '8:20 hrs ', 4: '8:25 hrs', 5: '8:15 hrs',Total:'40:15 hrs'},
  ];


  const Year = [
    { label: '', },
    { label: '2023', },
    { label: '2022', },
    { label: '2021', },
    { label: '2020', },
    { label: '2019', },
    { label: '2018', },
    { label: '2017', },
    { label: '2016', },
    { label: '2015', },
    { label: '2014', },
    { label: '2013', },
    { label: '2012', },
    { label: '2011', },
    { label: '2010', },
    { label: '2009', },
    { label: '2008', },
    { label: '2007', },
    { label: '2006', },
    { label: '2005', },
    { label: '2004', },
    { label: '2003', },
    { label: '2002', },
  ];
  const Month = [
    { label: '', },
    { label: 'Jan', },
    { label: 'Feb', },
    { label: 'Mar', },
    { label: 'Apr', },
    { label: 'May', },
    { label: 'Jun', },
    { label: 'Jul', },
    { label: 'Aug', },
    { label: 'Sep', },
    { label: 'Oct', },
    { label: 'Nov', },
    { label: 'Dec', },
  ];

  return (
    <>
      <Grid container
        direction="row"
        justifyContent={'space-between'}
        alignItems="center">
        <Grid item xs={'12'} md={'auto'}>
          <div className='card-title2 mb-0'>Admin <span>Attendance</span> </div>
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
      {/* <Grid className='employee-main' container
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
      </Grid> */}

      <Box className="tab-main" sx={{ width: '100%', marginTop: '20px', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Attandance" value="1" />
              <Tab label="Timesheet" value="2" />
             
            </TabList>
          </Box>
          <TabPanel value="1">

            <Grid container
              direction="row"
              className='attandance-table-main'
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
                    <Grid item xs={'auto'}>

                    </Grid>
                  </Grid>
                  <Grid container
                    direction="row"
                    spacing={3}
                    marginBottom={2}
                    alignItems="center">
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Employee Name"
                        multiline
                        defaultValue=""
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Month}
                        sx={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} label="Month" />}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Year}
                        sx={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} label="Select Year" />}
                      />
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
          </TabPanel>
          <TabPanel value="2">
            <Grid container
              direction="row"
                className='attandance-table-main'
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
                      <div className='card-title'>Timesheet</div>
                    </Grid>
                    <Grid item xs={'auto'}>

                    </Grid>
                  </Grid>
                  <Grid container
                    direction="row"
                    spacing={3}
                    marginBottom={2}
                    alignItems="center">
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Employee Name"
                        multiline
                        defaultValue=""
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Month}
                        sx={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} label="Month" />}
                      />
                    </Grid>
                  </Grid>
                  <div  className='attandance-admin-table-main' style={{ height: "auto", width: '100%' }}>
                    <DataGrid
                      rows={timesheetrow}
                      columns={timesheet}
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
          </TabPanel>
         
        </TabContext>
      </Box>


      <Dialog className='admin-attandan-dialog' open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Details</DialogTitle>
        <DialogContent>
          {selectedRow && (
            <div>
              <Grid className='employee-main' container
                direction="row"
                spacing={3}
                marginTop={1}
                alignItems="center">
                <Grid item xs={12} md={6}>
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

                <Grid item xs={12} md={6}>
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

            </div>
          )}
        </DialogContent>
      </Dialog>


    </>
  );

}


