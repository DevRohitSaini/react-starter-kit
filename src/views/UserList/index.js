import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from "react-router-dom";
import { getAuthToken } from '../Utils/CommonUtils';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fetchApi, deleteApi} from '../Utils/api';
import constant from '../Utils/constant';

const UserList = () => {
  const navigate = useNavigate();
  const token = getAuthToken();
  const [deleteUserId, setDeleteUserId] = useState('');
  const [open, setOpen] = React.useState(false);
  const [userList, setUserList] = useState([]);

  const handleClickOpen = (id) => {
    setDeleteUserId(id)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns2 = [
    { field: 'employeeID', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 200, editable: true },
    { field: 'mobile', headerName: 'Mobile', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 160,
      renderCell: (params) => (
        <>
          <Button className='icon-btn editIcon'
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            onClick={() => handleEdit(params.row._id)}
          >
          </Button>
          <Button className='icon-btn deleteIcon'
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => handleClickOpen(params.row.id)}
          >
          </Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const apiResponse = await fetchApi(constant.employeeApi, token);
    if (apiResponse.isSuccess) {
      setUserList(apiResponse.data);
    } else {
      console.log('error=>', apiResponse);
      alert(apiResponse.message);
    }
  }

  const handleEdit = (id) => {
    navigate(`/user-details/${id}`, { userId: id });
  };

  const handleDelete = async (id) => {    
    const deleteApiResponse = await deleteApi(constant.employeeApi+id, token);
    if (deleteApiResponse.isSuccess) {
      getUsers();
    } else {
      console.log('error=>', deleteApiResponse);
      alert(deleteApiResponse.message);
    }
    setOpen(false);
  };

  return (
    <>
      <div className='card'>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={3}
        >
          <Grid item xs={'auto'}>
            <div className='card-title'>Employee List</div>
          </Grid>
          <Grid item xs={'auto'}>
            <Button color="primary" component={Link} to="/user-details">
              Add Employee
            </Button>
          </Grid>
        </Grid>

        <div style={{ height: "auto", width: '100%' }}>
          <DataGrid
            rows={userList}
            columns={columns2}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20]}
            checkboxSelection
          />
        </div>
        <Dialog className='delete-dialog'
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete User"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this user?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className='MuiButton-textPrimary outline min-w-100' onClick={handleClose}>No</Button>
            <Button className='MuiButton-textPrimary min-w-100' onClick={() => handleDelete(deleteUserId)} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default UserList;
