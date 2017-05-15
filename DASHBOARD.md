# Dashboard
## Constructor
- States
  - food is an array of results from the Google Places API that represent the food options
  - sights is an array of results from the Google Places API that represent the places of interests
  - flight is the currently selected flight from the drop down.
  - flightsArray is an array of all the flights that user has inputed and is used in the trip dropdown menu
  - index is the dropdown menu index
  - weather is an array of weather data from the location the user inputted
  - location is the user's final destination location
- Functions
  - searchGoogle
    - Get the sights through an API call to Google
  - flightSearch
    - Get the flights through an API call
  - databaseFlightSearch
    - Gets the flights of the logged in user
  - historyChange
    - Changes the dropdown menu for trips
  - searchFood
    - Get the food through an API call to Google
  - searchWeather
    - Get the weather through an API call to DarkSky
## Render
- All Material-UI components are wrapped in MuiThemeProvider.
- The SignOutToolbar component represents the top toolbar that includes a sign-out button.
- The GridList contains the card components
- The Floating Action Button on the bottom right allows the user to add a new trip.
