import { Grid, TextField, Typography, Box } from "@mui/material";

export default function StepSix({ formData, handleChange }) {

  const countWords = (text) => {
    return text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Startup Narrative
      </Typography>

      <Grid container spacing={3}>

        {/* Challenges */}
        <Grid item xs={12} size={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Challenges & Limitations (Max 100 words)"
            name="challenges"
            value={formData.challenges}
            onChange={(e) => {
              if (countWords(e.target.value) <= 100) {
                handleChange(e);
              }
            }}
            helperText={`${countWords(formData.challenges)} / 100 words`}
          />
        </Grid>

        {/* Founder Story */}
        <Grid item xs={12} size={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Founder Story / Achievements (Max 100 words)"
            name="founderStory"
            value={formData.founderStory}
            onChange={(e) => {
              if (countWords(e.target.value) <= 100) {
                handleChange(e);
              }
            }}
            helperText={`${countWords(formData.founderStory)} / 100 words`}
          />
        </Grid>

      </Grid>
    </Box>
  );
}
