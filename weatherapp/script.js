const api_url='https://api.weatherapi.com/v1/current.json?key=ded3085a2bb042a6a38165015231306&q=london';

async function getapi(api_url){
      let response=await fetch(api_url);
      console.log(await response.json());
}

function ShowDetails(){
      const temp=document.getElementById("tempreature");
      const city=document.getElementById("city")
}

getapi(api_url);