![A paper airplane](https://github.com/alffox/liferay-around-the-world-react/blob/master/public/favicon.ico)

# Liferay Around the World

Liferay Around the World is a React Application showing information for Liferay locations around the world: https://www.liferay.com/locations

All APIs have been used for demo, non-commercial purposes. You may read more here: https://github.com/alffox/liferay-around-the-world-react#api--credit

## Purpose of this project

Back in late 90's when having an internet connection was not always possible, I used to get to know people from all over the world through paper letters. At a point, I decided to ask each of my penpals to draw a flag of the country they were writing from and send it back to me. Eventually, after collecting all of them, I could get a huge poster, hanging on my room's wall, showing me the colors of the world I was in touch with. This project is inspired by those times.

Where are my co-workers worldwide living? What's going on at their location right now? How can I get to know better other Liferay offices worldwide countries?

And also: What's going on at my location at the moment? How can I get useful information, all in one place?

**Around the World** would like to cover this needs and encourage the global mutual knowledge of our countries. The name is inspired by a popular song of the late 90's: https://en.wikipedia.org/wiki/Around_the_World_(Red_Hot_Chili_Peppers_song)

## How to run the app?

See a demo version, non optimized for production (long TTFB) at: https://liferay-around-the-world-react.herokuapp.com/, or:

1. Clone the project on your machine: `git clone https://github.com/alffox/liferay-around-the-world-react.git`
2. Navigate to the root directory: `cd liferay-around-the-world-react/`
3. Start the site with `npm start`

(Warning: The Google Maps card will not render. To fix that, edit the value of REACT_APP_GOOGLE_MAPS_API_KEY in https://github.com/alffox/liferay-around-the-world-react/blob/master/.env and have that key enabled on the host where you wish to run the website)

## Can I edit the location list?

Yes. To add or modify locations:

1. Edit the file https://github.com/alffox/liferay-around-the-world-react/blob/master/src/locations.json and populate the json array with the location of your choice:

```
{
            "title": "",
            "continent": "",
            "country": "",
            "ISO_3166_1_alpha_2": "",
            "timezone_database_name": "",
            "state_name": "",
            "state_code": "",
            "language": "",
            "location": {
                "lat": ,
                "lon":
            }
        },

```

---

- **title**: Required. Location's city name
- **continent**: Required. Location's city continent. Possible choices are: Americas, Europe, Africa, Asia-Pacific)
- **country**: Required. Location's city country
- **ISO_3166_1_alpha_2**: Required. Location's city ISO 3166 1 alpha 2 code, 2 digits, lower case. Use this site as reference: https://en.wikipedia.org/wiki/ISO_3166-2
- **timezone_database_name**: Required. Use a value from the "Time Zone" column of this list: https://timezonedb.com/time-zones
  **state_name**: Optional. Location's city state name
  **state_code**: Optional. Location's city state code
- **language**: Required. Location's most spoken language, ISO 639-1 Code format, 2 digits, lower case. Use this list as reference: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
- **location**: Required. Location's latitude and longitude. Use this site to find them: https://google-developers.appspot.com/maps/documentation/utils/geocoder/

---

## Information displayed

The **Navigation bar** displays the currently selected location, the current date and time at that location and other available locations, ordered in dropdown lists by continents

**Time and Date** will appear under the flags list at the top and they will indicate the current time and date on the clicked location

**Latest local news** displays the recent local news for the selected country ordered like this: 8 top headlines in English, 6 top headlines in the local language, 2 top headlines news about technical topics in English. All news will show the source where they come from and a picture if present

**Weather** displays the weather and temperature at the selected location and forecasts for the next 5 days

**Map** represents the currently selected location on Google Maps

**Nearby web cams** shows 10 web cams snapshots in a slider, taken at the current location and time

**Wiki** shows the first information for the selected country from Wikipedia.org

**Pictures** at the bottom shows selected pictures for the selected country

## Technical details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The app is created with the React framework: https://reactjs.org/
The app is optimized for being used on mobile devices through [Bootstrap CSS](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

A jQuery version of this same app is available at: https://github.com/alffox/around-the-world-jquery

The backend runs through: https://github.com/alffox/around-the-world-backend/blob/master/index.js

### API / Credit

- [News API](https://newsapi.org/)
- [OpenWeatherMap](https://openweathermap.org/)
- [Webcams.travel](https://www.webcams.travel/)
- [Wikipedia](https://en.wikipedia.org)
- [Unsplash](https://unsplash.com/)
- [GoogleMaps API](https://developers.google.com/maps/documentation/)
- [TimeZoneDB.com](https://timezonedb.com/)
