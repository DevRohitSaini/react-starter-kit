import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAuthToken } from '../Utils/CommonUtils';
import axios from 'axios';
import { fetchApi, putApi, postApi } from '../Utils/api';
import constant from '../Utils/constant';

const AddEmployee = () => {
  const navigate = useNavigate();
  const token = getAuthToken();
  const { userId } = useParams();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [pdfFile, selectedFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [pdfName, setPdfName] = useState('');

  // On file select (from the pop up)
  const onFileChange = (e) => {
    // Update the state
    selectedFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "pdfFile",
      pdfFile

    );
    console.log('e2==>', pdfFile);
    // axios.post(`http://localhost:4000/api/users/uploadfile`,formData)
    axios.post(`http://localhost:4000/api/employee/uploadfile/${userId}`, formData)
      .then(response => {
        console.log('response==>', response)
        setPdfUrl(response.data.pdfUrl);
        setPdfName(response.data.pdfName);
      })
  }

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (userId) {
      getUser();
    }
  }, []);


  const getUser = async () => {
    const apiResponse = await fetchApi(constant.employeeApi + userId, token);
    if (apiResponse.isSuccess) {
      setName(apiResponse.employee.name);
      setMobile(apiResponse.employee.mobile);
      setEmail(apiResponse.employee.email);
      setPdfUrl(apiResponse.employee.pdfUrl);
      setPdfName(apiResponse.employee.pdfName);
    } else {
      console.log('error=>', apiResponse);
      alert(apiResponse.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      'name': name,
      'mobile': mobile,
      'email': email
    }

    if (userId) {
      const putApiResponse = await putApi(constant.employeeApi + userId, token, data);
      if (putApiResponse.isSuccess) {
        navigate('/users');
      } else {
        console.log('error=>', putApiResponse);
        alert(putApiResponse.message);
      }

    } else {
      const postApiResponse = await postApi(constant.employeeApi, token, data);
      if (postApiResponse.isSuccess) {
        navigate('/users');
      } else {
        console.log('error=>', postApiResponse);
        alert(postApiResponse.message);
      }
    }
  }

  return (
    <>
      <div className='card'>
        <Grid container
          direction="row"
          spacing={3}
          alignItems="center">

          <Grid item xs={12} md={6}>
            <TextField type="text" id="filled-basic1" value={name} onChange={handleName} label="Full Name" variant="filled" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField id="filled-basic6" value={mobile} onChange={handleMobile} label="Mobile" variant="filled" />
          </Grid>
          <Grid item xs={12} md={6} >
            <TextField type="text" id="filled-basic2" value={email} onChange={handleEmail} label="Email" variant="filled" />
          </Grid>
          <Grid item xs={12} md={6} >
            <input accept="application/pdf" type="file" onChange={onFileChange} />
          </Grid>
          <Grid item xs={12} md={6} >
            <a target='_blank' rel="noreferrer" href={pdfUrl} >{pdfName}</a>

          </Grid>

        </Grid>
        <Grid item xs={12} md={6}>
          <Button className='btn-main' onClick={onFileUpload} variant="contained">Upload pdf</Button>
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
            <Button className='btn-main' component={Link} to="/users" variant="outlined">Cancel</Button>
          </Grid>
        </Grid>

      </div>
    </>
  );
};

export default AddEmployee;
