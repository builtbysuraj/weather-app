# Weather App using React.js
![image](https://user-images.githubusercontent.com/77146598/232045022-5093e7bd-857c-4380-a196-af97609e035e.png)


This is a weather app built with React that allows users to search for weather information by city name or by using their browser location. The app displays the current temperature, humidity, and "feels like" temperature, along with an icon representing the current weather conditions.

## How to Use the App

There are two ways to search for weather information:

1. Enter a valid city and press Enter.
2. Allow location access in your browser and click on the "Get Device Location" button.

## Prerequisites

Before running this app, you must have the following:

* Node.js 17.0 or later installed on your computer
* An API key for OpenWeather

## Getting Started

To get started with this app, follow these steps:

1. Clone this repo using the following command:

```bash
git clone https://github.com/builtbysuraj/weather-app.git
```

2. Move to the project directory using the following command:

```bash
cd weather-app
```

3. Install the required dependencies using the following command:

```bash
npm install
```

4. Create a .env file in the root directory of the project and add your OpenWeather API key with the name VITE_API_KEY, like this:

```
VITE_API_KEY=your-api-key-goes-here
```

5. Start the development server using the following command:
```bash
npm run dev
```

6. Congratulations, you have successfully started the development server!