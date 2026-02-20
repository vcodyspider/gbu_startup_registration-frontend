import { useState } from "react";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import StepOne from "./pageOne";
import StepTwo from "./pageTwo";
import StepThree from "./pageThree";
import StepFour from "./pageFour";
import StepFive from "./pageFive";
import StepSix from "./pageSix";
import StepSeven from "./review";





const steps = ["Basic Info", "Founder Details", 
  "Additional Details","Business Details","Financial Details","Your Narrative",
"Review and Submit"];

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    firmName: "",
    firmType: "",
    email: "",
    phone: "",
    founders: [
      {
        name: "",
        dob: "",
        gender: "",
        qualification: "",
        shareholding: "",
        about: "",
      },
   

    ],
    industry: "",
website: "",
gstn: "",
dpiit: "",
startupRegNo: "",
businessOpportunity: "",
businessModel: "",

revenueYear1: "",
  revenueYear2: "",
  revenueYear3: "",

  challenges: "",
founderStory: "",


  });
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFounderChange = (index, event) => {
    const newFounders = [...formData.founders];
    newFounders[index][event.target.name] = event.target.value;
  
    setFormData({
      ...formData,
      founders: newFounders,
    });
  };

  const addFounder = () => {
    setFormData({
      ...formData,
      founders: [
        ...formData.founders,
        {
          name: "",
          dob: "",
          gender: "",
          qualification: "",
          shareholding: "",
          about: "",
        },
      ],
      industry: "",
  website: "",
  gstn: "",
  dpiit: "",
  startupRegNo: "",
    });
  };
  
  const removeFounder = (index) => {
    const updatedFounders = formData.founders.filter(
      (_, i) => i !== index
    );
  
    setFormData({
      ...formData,
      founders: updatedFounders,
    });
  };

  
  
  

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const backStep = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://gbu-startup-registration-backend.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Application Submitted Successfully!");
        console.log(data);
      } else {
        alert("Submission Failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error!");
    }
  };
  
  

  return (
    <>
      <Stepper activeStep={activeStep} sx={{ mb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <StepOne formData={formData} handleChange={handleChange} />
      )}

      
      {activeStep === 1 && (  
        <StepTwo formData={formData}
          handleFounderChange={handleFounderChange}
          addFounder={addFounder}
          removeFounder={removeFounder}
        />
      )}


{activeStep === 2 && (
  <StepThree
    formData={formData}
    handleChange={handleChange}
  />
)}


{activeStep === 3 && (
  <StepFour
    formData={formData}
    handleChange={handleChange}
  />
)}

{activeStep === 4 && (
  <StepFive
    formData={formData}
    handleChange={handleChange}
  />
)}

{activeStep === 5 && (
  <StepSix
    formData={formData}
    handleChange={handleChange}
  />
)}

{activeStep === 6 && (
  <StepSeven formData={formData} />
)}




      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button disabled={activeStep === 0} onClick={backStep}>
          Back
        </Button>

        {activeStep === steps.length - 1 ? (
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" onClick={nextStep}>
            Next
          </Button>
        )}
      </Box>
    </>
  );
}
