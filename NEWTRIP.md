# New Trip
## Constructor
- State
  - finished is boolean for the stepper component
  - stepIndex is a counter for the stepper component
  - airline is a value for the dropdown menu
  - flightNumber is a value entered into the textField
  - finalDestination is a value entered into the textField
- Functions
  - handleNext
    - Handles the next stepper
  - handlePrev
    - Handles the previous stepper
  - getStepContent
    - Dynamically render what goes into the stepper
  - handleChange
    - Set the airline through the dropdown menu
  - handleFlightNumber
    - Set the flight number through the text field
  - handleFinalDestination
    - Set the address through the text field
## Render
- All Material-UI components are wrapped in MuiThemeProvider.
- The SignOutToolbar component represents the top toolbar that includes a sign-out button.
- The next button changes to finished when the stepIndex reaches the end
- When finish is pressed, the page is redirected to [dashboard](DASHBOARD.md)
- The stepper content is dynamically rendered through the getStepContent method.