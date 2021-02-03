import axios from 'axios';

export default function apiOW(previsao){

  let getWeather = async(lat, long) =>{
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params:{
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OW_KEY,
        lang: "pt",
        units: "metric"
      }
    });
    previsao(res.data);
    console.log(res.data);
  }

}