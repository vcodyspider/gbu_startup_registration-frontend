import {
    Grid,
    TextField,
    MenuItem,
    Button,
    Typography,
    Box,
    Divider,
  } from "@mui/material";
  import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
  import { DatePicker } from "@mui/x-date-pickers/DatePicker";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import dayjs from "dayjs";
  
  
  
  export default function StepTwo({
    formData,
    handleFounderChange,
    addFounder,
    removeFounder
  }) {
    return (
      <Box>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Founder Details
        </Typography>
  
        {formData.founders.map((founder, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} size={12}>
                <TextField
                  fullWidth
                  label="Founder Name"
                  name="name"
                  value={founder.name}
                  onChange={(e) => handleFounderChange(index, e)}
                />
              </Grid>
  
              <Grid item xs={12} sm={6} size={6} >
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker disableFuture
      label="Date of Birth"
      format="DD/MM/YYYY"
      value={founder.dob ? dayjs(founder.dob) : null}
      onChange={(newValue) =>
        handleFounderChange(index, {
          target: {
            name: "dob",
            value: newValue ? newValue.toISOString() : "",
          },
        })
      }
      slotProps={{
        textField: {
          fullWidth: true,
        },
      }}
    />
  </LocalizationProvider>
</Grid>


              
  
<Grid item xs={12} size={12}>
  <TextField
    select
    fullWidth
    label="Qualification"
    name="qualification"
    value={founder.qualification}
    onChange={(e) => handleFounderChange(index, e)}
  >
    <MenuItem value="High School">High School</MenuItem>
    <MenuItem value="Diploma">Diploma</MenuItem>
    <MenuItem value="Undergraduate">Undergraduate</MenuItem>
    <MenuItem value="Postgraduate">Postgraduate</MenuItem>
    <MenuItem value="MBA">MBA</MenuItem>
    <MenuItem value="CA/CFA">CA / CFA</MenuItem>
    <MenuItem value="BTech">BTech</MenuItem>

    <MenuItem value="PhD">PhD</MenuItem>
    <MenuItem value="Other">Other</MenuItem>
  </TextField>
</Grid>

  
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Shareholding (%)"
                  name="shareholding"
                  value={founder.shareholding}
                  onChange={(e) => handleFounderChange(index, e)}
                />
              </Grid>
  
              <Grid item xs={12} size={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Additional Skills"
                  name="about"
                  placeholder="Java,Python, Accounting,etc"
                  value={founder.about}
                  onChange={(e) => handleFounderChange(index, e)}
                />
              </Grid>
            </Grid>
  
            <Divider sx={{ mt: 4 }} />

            {formData.founders.length > 1 && (
  <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
    <Button
      color="error"
      variant="outlined"
      onClick={() => removeFounder(index)}
    >
      Remove Founder
    </Button>
  </Box>
)}

          </Box>
        ))}

        
  
        <Button variant="outlined" onClick={addFounder}>
          + Add Another Founder
        </Button>
      </Box>
      
    );
  }
  