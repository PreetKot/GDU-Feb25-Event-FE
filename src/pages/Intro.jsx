import React from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const theme = createTheme({
  palette: {
    primary: {
      main: "#232F3E", 
    },
    secondary: {
      main: "#FF9900", 
    },
  },
  typography: {
    fontFamily: "Amazon Ember, Arial, sans-serif",
  },
});

const steps = ["Introduction", "Features", "Get Started", "Contact"];

// Step content components
const IntroductionContent = () => (
  <div>
    <Typography variant="h6">About Us</Typography>
    <Typography paragraph>
      Welcome to the GDU
    </Typography>
  </div>
);

const FeaturesContent = () => (
  <div>
    <Typography variant="h6">Features</Typography>
    <Typography paragraph>
      Our club offers various features such as workshops, guest lectures,
      hands-on projects, and networking opportunities with industry
      professionals.
    </Typography>
  </div>
);

const GetStartedContent = () => (
  <div>
    <Typography variant="h6">Get Started</Typography>
    <Typography paragraph>
      To get started, join our mailing list, participate in our events, and
      connect with us on social media. 
    </Typography>
  </div>
);

const ContactContent = () => (
  <div>
    <Typography variant="h6">Contact</Typography>
    <Typography paragraph>
      Have questions or need more information? Contact us at
      abc@gmail or visit our website for more details.
    </Typography>
  </div>
);

// Main stepper component
const Intro = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <IntroductionContent />;
      case 1:
        return <FeaturesContent />;
      case 2:
        return <GetStartedContent />;
      case 3:
        return <ContactContent />;
      default:
        return "Unknown step";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: "100%", padding: "20px", textAlign: "center" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography variant="h6" style={{ margin: "20px 0" }}>
                All steps completed - you're finished
              </Typography>
              <Button onClick={handleReset} variant="contained" color="primary">
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography variant="h6" style={{ margin: "20px 0" }}>
                Step {activeStep + 1}: {steps[activeStep]}
              </Typography>
              <div>{getStepContent(activeStep)}</div>
              <div style={{ marginTop: "20px" }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="contained"
                  style={{ marginRight: "10px" }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Intro;
