# Sign-In
## Render
- All Material-UI components are wrapped in MuiThemeProvider.
- The Toolbar component represents the top toolbar
- The Google Button is a sign-in button, and sends a link to /auth/google for authentication
- After authentication, if the user is new they are routed to a [new trip](NEWTRIP.md), otherwise they are taken to the [dashboard](DASHBOARD.md)
