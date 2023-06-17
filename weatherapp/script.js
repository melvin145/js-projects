
const searchbtn=document.getElementById("searchbtn");
const api_key='548e9d7e8915c24ab66b4980740b2bc5';
const input=document.getElementById("input");
const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}&units=metric`;

searchbtn.addEventListener('click',getWeather);


 function getWeather(){
      const temp=document.getElementById("tempreature");
      const city=document.getElementById("city");
      const image=document.getElementById("image");
      if(input.val==0){
            alert("enter the city ");
      }
      else{
            fetch(api_url).then((response)=>response.json()).then((data)=>{
                  console.log(data);
                  temp.innerText=Math.floor(data['main']['temp']);
                  city.innerText=data['name']
                  
            })
      }
            
      }
