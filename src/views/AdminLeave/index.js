import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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

const leaveType = [
  { label: '', },
  { label: 'Casual Leave', },
  { label: 'Sick Leave', },
  { label: 'Loss of Pay', }
];

export default function AdminLeave() {
   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'Employee', headerName: 'Employee', width: 130 },
    { field: 'Leave', headerName: 'Leave Type', width: 120 },
    { field: 'From', headerName: 'From', width: 120 },
    { field: 'To', headerName: 'To', width: 120 },
    { field: 'NoDays', headerName: 'No of Days', width: 110 },
    { field: 'Reason', headerName: 'Reason', width: 160 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 120,
      renderCell: () => (
        <>
          <select className="form-control mb-3 brdr-none" onChange={(e) => this.setState({ productPrice: e.target.value })}>
            <option className='green' value="5">Approve</option>
            <option className='red' value="10">Rejected</option>
            <option className='yellow' value="10">On Review</option>
          </select>
        </>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 80,
      renderCell: () => (
        <>
          <Button className='icon-btn editIcon'
        id="basic-button"
        aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<MoreVertOutlinedIcon />}
      >
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose2}>Edit</MenuItem>
        <MenuItem onClick={handleClose2}>Delete</MenuItem>
      </Menu>
        </>
      ),
    },
   
  ];

  const rows = [
    { id: 1, Employee: 'Dharmik Patel', Leave:'Medical Leave', From: '27 Feb 2023', To: '29 Feb 2023', NoDays: '2 Days', Reason: 'Go to Hospital',  },
    { id: 2, Employee: 'Rahul Patel', Leave:'Medical Leave', From: '27 Feb 2023', To: '29 Feb 2023', NoDays: '2 Days', Reason: 'Go to Hospital',  },
    { id: 3, Employee: 'Rohit', Leave:'Medical Leave', From: '27 Feb 2023', To: '29 Feb 2023', NoDays: '2 Days', Reason: 'Go to Hospital',  },
    { id: 4, Employee: 'Abhishek Modanwal', Leave:'Medical Leave', From: '27 Feb 2023', To: '29 Feb 2023', NoDays: '2 Days', Reason: 'Go to Hospital',  },
   

  ];

  return (
    <>
      <Grid container
        direction="row"
        justifyContent={'space-between'}
        alignItems="center">
        <Grid item xs={'12'} md={'auto'}>
          <div className='card-title2 mb-0'>Admin <span>Leave</span> </div>
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
          </Grid>
        </Grid>
      </Grid>
      <Grid container
        direction="row"
        marginTop={1}
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
                <h5 className='card-tit'>Today Presents</h5>
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
                <h5 className='card-tit'>Planned Leaves</h5>
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
                <h5 className='card-tit'>Unplanned Leaves</h5>
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
                <h5 className='card-tit'>Pending Requests</h5>
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
                <div className='card-title'>Leave </div>
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
              <DataGrid className='admin-leave-table'
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
    </>
  );

}
