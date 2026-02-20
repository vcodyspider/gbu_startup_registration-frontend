import { Typography, Box, Divider, Paper } from "@mui/material";

export default function StepSeven({ formData }) {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Review Your Application
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle1">Basic Information</Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography>Firm Name: {formData.firmName}</Typography>
        <Typography>Firm Type: {formData.firmType}</Typography>
        <Typography>Email: {formData.email}</Typography>
        <Typography>Phone: {formData.phone}</Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle1">Founders</Typography>
        <Divider sx={{ mb: 2 }} />

        {formData.founders.map((founder, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography>Founder {index + 1}</Typography>
            <Typography>Name: {founder.name}</Typography>
            <Typography>DOB: {founder.dob}</Typography>
            <Typography>Gender: {founder.gender}</Typography>
            <Typography>Qualification: {founder.qualification}</Typography>
            <Typography>Shareholding: {founder.shareholding}%</Typography>
            <Typography>About: {founder.about}</Typography>
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle1">Business Details</Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography>Industry: {formData.industry}</Typography>
        <Typography>Website: {formData.website}</Typography>
        <Typography>GSTN: {formData.gstn}</Typography>
        <Typography>DPIIT: {formData.dpiit}</Typography>
        <Typography>Startup Reg No: {formData.startupRegNo}</Typography>
        <Typography>Business Opportunity: {formData.businessOpportunity}</Typography>
        <Typography>Business Model: {formData.businessModel}</Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle1">Financial Information</Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography>Revenue Current FY: ₹{formData.revenueYear1}</Typography>
        <Typography>Revenue Last FY: ₹{formData.revenueYear2}</Typography>
        <Typography>Revenue Last to Last FY: ₹{formData.revenueYear3}</Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="subtitle1">Startup Narrative</Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography>Challenges: {formData.challenges}</Typography>
        <Typography>Founder Story: {formData.founderStory}</Typography>
      </Paper>
    </Box>
  );
}
