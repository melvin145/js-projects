
const searchbtn=document.getElementById("searchbtn");
const api_key='548e9d7e8915c24ab66b4980740b2bc5';
const input=document.getElementById("input");
searchbtn.addEventListener('click',getWeather);


 function getWeather(){
      const temp=document.getElementById("tempreature");
      const city=document.getElementById("city");
      const image=document.getElementById("image");
      const weather=document.getElementById("weather");
      const wind =document.getElementById("windval");
      const humidity=document.getElementById("humval");
      const temp_max=document.getElementById("tempval");
      let weatherdesc=document.getElementById("weatherdesc")
      let weather_img={
            "Clouds":"img/1(1).png",
            "Thunderstorm":"img/4.png",
            "Rain":"img/3.png",
            "Clear":"img/Sun.png",
            "Drizzle":"img/5(1).png",
            'Mist':'img\nt_fog@2x.png',
            'Snow':'img\flurries@2x.png',
            'Mist':'https://openweathermap.org/img/w/50d.png',
            'Smoke':'https://openweathermap.org/img/w/50d.png',
            'Haze':'https://openweathermap.org/img/w/50d.png',
            'Fog':'https://openweathermap.org/img/w/50d.png',
            'Dust':'https://openweathermap.org/img/w/50d.png',

      }
      const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}&units=metric`;
      let inputVal=input.value;
      if(inputVal.length==0){
            alert("enter the city ");
      }
      else{
            inputVal="";
            fetch(api_url).then((response)=>response.json()).then((data)=>{
                  console.log(data);
                  temp.innerText=Math.floor(data['main']['temp'])+"°c";
                  city.innerText=data['name'];
                  weather.innerText=data['weather'][0]['main'];
                  humidity.innerText=data['main']['humidity']+"%";
                  temp_max.innerText=Math.floor(data['main']['temp_max'])+"°c";
                  wind.innerHTML=data['wind']['speed'];
                  weatherdesc.innerText=data['weather'][0]['description'];
                  image.src=weather_img[data['weather'][0]['main']];

            })
      }
            
      }
