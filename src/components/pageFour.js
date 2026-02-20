import { Grid, TextField, Typography, Box } from "@mui/material";

export default function StepFour({ formData, handleChange }) {

  const countWords = (text) => {
    return text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Business Details
      </Typography>

      <Grid container spacing={3}>

        {/* Business Opportunity */}
        <Grid item xs={12} size={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Business Opportunity (Max 25 words)"
            name="businessOpportunity"
            value={formData.businessOpportunity}
            onChange={(e) => {
              if (countWords(e.target.value) <= 25) {
                handleChange(e);
              }
            }}
            helperText={`${countWords(formData.businessOpportunity)} / 25 words`}
          />
        </Grid>

        {/* Business Model */}
        <Grid item xs={12} size={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            label="Business Model (Max 100 words)"
            name="businessModel"
            value={formData.businessModel}
            onChange={(e) => {
              if (countWords(e.target.value) <= 100) {
                handleChange(e);
              }
            }}
            helperText={`${countWords(formData.businessModel)} / 100 words`}
          />
        </Grid>

      </Grid>
    </Box>
  );
}
