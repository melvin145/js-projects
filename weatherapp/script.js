const temp=document.getElementById("tempreature");
const city=document.getElementById("city");
const image=document.getElementById("image");
const api_key='548e9d7e8915c24ab66b4980740b2bc5';
const input="London";
const api_url=`https://api.openweathermap.org/data/2.5/weather?q=London&appid=548e9d7e8915c24ab66b4980740b2bc5&units=metric`;

 function getWeather(){
            fetch(api_url).then((response)=>response.json()).then((data)=>{
                  console.log(data);
            })
            
      }
getWeather()
