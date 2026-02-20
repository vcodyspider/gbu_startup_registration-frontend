import {
    Grid,
    TextField,
    Typography,
    Box,
    Paper,
  } from "@mui/material";
  
  import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
  } from "recharts";
  
  export default function StepFive({ formData, handleChange }) {
    const currentYear = new Date().getFullYear();
  
    const data = [
      {
        name: `${currentYear - 2}-${currentYear - 1}`,
        revenue: Number(formData.revenueYear3) || 0,
      },
      {
        name: `${currentYear - 1}-${currentYear}`,
        revenue: Number(formData.revenueYear2) || 0,
      },
      {
        name: `${currentYear}-${currentYear + 1}`,
        revenue: Number(formData.revenueYear1) || 0,
      },
    ];
  
    const calculateGrowth = () => {
      const prev = Number(formData.revenueYear2);
      const current = Number(formData.revenueYear1);
  
      if (!prev || prev === 0) return 0;
  
      return (((current - prev) / prev) * 100).toFixed(2);
    };
  
    return (
      <Box>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Financial Information
        </Typography>
  
        {/* Chart Section */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
  
        {/* Revenue Inputs */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="number"
              label={`Revenue ${currentYear - 2}-${currentYear - 1}`}
              name="revenueYear3"
              value={formData.revenueYear3}
              onChange={handleChange}
            />
          </Grid>
  
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="number"
              label={`Revenue ${currentYear - 1}-${currentYear}`}
              name="revenueYear2"
              value={formData.revenueYear2}
              onChange={handleChange}
            />
          </Grid>
  
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="number"
              label={`Revenue ${currentYear}-${currentYear + 1}`}
              name="revenueYear1"
              value={formData.revenueYear1}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
  
        {/* Growth Indicator */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1">
            Year-on-Year Growth: {calculateGrowth()}%
          </Typography>
        </Box>
      </Box>
    );
  }
  