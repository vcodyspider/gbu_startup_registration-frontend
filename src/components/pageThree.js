import {
    Grid,
    TextField,
    MenuItem,
    Typography,
    Box,
  } from "@mui/material";
  
  export default function StepThree({ formData, handleChange }) {
    return (
      <Box>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Additional Details
        </Typography>
  
        <Grid container spacing={3}>
          
          {/* Industry */}
          <Grid item xs={12} size={12}>
            <TextField
              select
              fullWidth
              label="Industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              <MenuItem value="Manufacturing">Manufacturing</MenuItem>
              <MenuItem value="Service">Service</MenuItem>
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Technology">Technology</MenuItem>
            </TextField>
          </Grid>
  
          {/* Website */}
          <Grid item xs={12} size={12}>
            <TextField
              fullWidth
              label="Website Address"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </Grid>
  
          {/* GSTN */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="GSTN (Optional)"
              name="gstn"
              value={formData.gstn}
              onChange={handleChange}
            />
          </Grid>
  
          {/* DPIIT */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="DPIIT (Optional)"
              name="dpiit"
              value={formData.dpiit}
              onChange={handleChange}
            />
          </Grid>
  
          {/* Startup Registration */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Startup Registration No (Optional)"
              name="startupRegNo"
              value={formData.startupRegNo}
              onChange={handleChange}
            />
          </Grid>
  
        </Grid>
      </Box>
    );
  }
  