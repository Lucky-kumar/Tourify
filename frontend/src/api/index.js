import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'


export const getPlacesData = async (lat,lng) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                latitude: lat,
                longitude: lng,
            },
            headers: {
                'X-RapidAPI-Key': '93cc9a3bdbmshd1ad834f614f422p13dcd4jsn7cd27c947d79',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

// export const getWeatherData = async (lat, lng) => {
//     try {
//         if (lat && lng) {
//             const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
//                 params: { lat, lon: lng },
//                 headers: {
//                     'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
//                     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//                 },
//             });

//             return data;
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };