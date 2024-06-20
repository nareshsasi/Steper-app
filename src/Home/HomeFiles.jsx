import React, { useState } from 'react';
import {
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Box,
  styled
} from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function HomeFiles() {
  const [data, setData] = useState({
    companyName: '',
    address: '',
    country: '',
    countryCode: '',
    postalCode: '',
    city: '',
    contact: '',
    url: '',
  });

  const [keyPersonDetails, setKeyPersonDetails] = useState({
    name: '',
    email: '',
    contactPerson: '',
    countryCode: '',
    city: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeDetails = (event) => {
    const { name, value } = event.target;
    setKeyPersonDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <Box display="flex" flexDirection="column" margin="10px">
        <Box marginBottom="20px">
          <h2>Basic Company Information</h2>
          <Box marginBottom="10px">
            <InputLabel>Company Name</InputLabel>
            <TextField
              variant="outlined"
              name="companyName"
              onChange={handleChange}
              required
              fullWidth
            />
          </Box>

          <Box marginBottom="10px">
            <InputLabel>Head Office Address</InputLabel>
            <TextField
              variant="outlined"
              name="address"
              onChange={handleChange}
              fullWidth
            />
          </Box>

          <Box marginBottom="10px">
            <InputLabel>Country</InputLabel>
            <Select
              name="country"
              value={data.country}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="india">India</MenuItem>
              <MenuItem value="australia">Australia</MenuItem>
              <MenuItem value="italy">Italy</MenuItem>
            </Select>
          </Box>

          <Box display="flex" justifyContent="space-between" marginBottom="10px">
            <Box width="48%">
              <InputLabel>Postal Code</InputLabel>
              <TextField
                variant="outlined"
                name="postalCode"
                onChange={handleChange}
                fullWidth
              />
            </Box>
            <Box width="48%">
              <InputLabel>City</InputLabel>
              <TextField
                variant="outlined"
                name="city"
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between" marginBottom="10px">
            <Box width="48%">
              <InputLabel>Country Code</InputLabel>
              <TextField
                variant="outlined"
                name="countryCode"
                onChange={handleChange}
                fullWidth
              />
            </Box>
            <Box width="48%">
              <InputLabel>Contact Number</InputLabel>
              <TextField
                variant="outlined"
                name="contact"
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Box>

          <Box marginBottom="10px">
            <InputLabel>Website URL</InputLabel>
            <TextField
              variant="outlined"
              name="url"
              onChange={handleChange}
              fullWidth
            />
          </Box>
        </Box>

        <Box marginBottom="20px">
          <h2>Key Contact Person</h2>
          <Box marginBottom="10px">
            <InputLabel>Name</InputLabel>
            <TextField
              variant="outlined"
              name="name"
              onChange={handleChangeDetails}
              required
              fullWidth
            />
          </Box>

          <Box marginBottom="10px">
            <InputLabel>Organization</InputLabel>
            <TextField
              variant="outlined"
              name="organization"
              onChange={handleChangeDetails}
              fullWidth
            />
          </Box>

          <Box display="flex" justifyContent="space-between" marginBottom="10px">
            <Box width="48%">
              <InputLabel>Country Code</InputLabel>
              <TextField
                variant="outlined"
                name="countryCode"
                onChange={handleChangeDetails}
                fullWidth
              />
            </Box>
            <Box width="48%">
              <InputLabel>Contact</InputLabel>
              <TextField
                variant="outlined"
                name="contactPerson"
                onChange={handleChangeDetails}
                fullWidth
              />
            </Box>
          </Box>

          <Box marginBottom="10px">
            <InputLabel>Email</InputLabel>
            <TextField
              variant="outlined"
              name="email"
              onChange={handleChangeDetails}
              fullWidth
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            component="label"
            variant="contained"
            // startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default HomeFiles;
