import { Grid, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function StepOne({ formData, handleChange }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} size={12}>
        <TextField
          fullWidth
          required
          label="Firm Name"
          name="firmName"
          value={formData.firmName}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} size={12}>
        <FormControl>
          <FormLabel>Type of Firm</FormLabel>
          <RadioGroup
            row
            name="firmType"
            value={formData.firmType}
            onChange={handleChange}
          >
            <FormControlLabel value="Limited Liability Partnership" control={<Radio />} label="Limited Liability Partnership" />
            <FormControlLabel value="Private Limited" control={<Radio />} label="Private Limited" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} size={12}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} size={12}>
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}
