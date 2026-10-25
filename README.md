# Weather App

A simple JavaScript weather application that lets users search for a city and view current weather conditions, as well as short-term forecast information.

## Features

- Search weather by city or country name
- Display current temperature, condition, and location
- Show weather icons for current conditions
- Display forecast for today and tomorrow
- Include yesterday's weather comparison
- Responsive layout using HTML, CSS, and Bootstrap

## Tech Stack

- HTML
- CSS
- JavaScript
- Bootstrap 5
- WeatherAPI

## Project Structure

```text
Weather-App/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
```

## How it works

The app uses the WeatherAPI service to fetch real-time weather and forecast data based on a user-entered city. The JavaScript file processes the API response and updates the DOM elements in the interface.

## Run locally

1. Clone the repository:

```bash
git clone https://github.com/ChanudiMallikaArachchi/Weather-App.git
```

2. Open the project folder:

```bash
cd Weather-App
```

3. Start a local web server (recommended) or simply open `index.html` in a browser.

Example using Python:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

- The app currently uses a WeatherAPI key embedded in `script.js`.
- For production use, it is recommended to move the API key to a secure environment configuration.
- Some browsers may block API requests if the page is opened directly from the filesystem; using a local server is safer.

## License

This project is provided as-is for educational and personal use.
