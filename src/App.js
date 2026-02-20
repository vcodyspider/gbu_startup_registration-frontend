import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Paper } from "@mui/material";
import theme from "./theme";
import MultiStepForm from "./components/form.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper
          elevation={0}
          sx={{
            p: 6,
            borderRadius: 4,
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          }}
        >
          <MultiStepForm />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
