const temp=document.getElementById("tempreature");
const city=document.getElementById("city");
const image=document.getElementById("image");
const api_url='https://api.openweathermap.org/data/2.5/weather?q={london}&appid={548e9d7e8915c24ab66b4980740b2bc5}';
let response=fetch(api_url).then((response) =>{return response.json()});

const ShowDetails=async () =>{
      const a=await response;
      console.log(a)
      let weather_img={
            "Sunny":"img/1(1).png",
            "cloudy":"img/2.png",
            "Partly cloudy":"img/5.png",
      }
}

ShowDetails()