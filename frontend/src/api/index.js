import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'


export const getPlacesData = async (type, lat, lng) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, {
            params: {
                latitude: lat,
                longitude: lng,
            },
            headers: {
                'X-RapidAPI-Key': '7fc485ff39mshfb546670d68bd95p1172bajsn1e8c35f529cb',
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