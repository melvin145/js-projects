
const api_url='https://api.weatherapi.com/v1/current.json?key=ded3085a2bb042a6a38165015231306&q=japan';
let response=fetch(api_url).then((response) =>{return response.json()});
const ShowDetails=async () =>{
      const temp=document.getElementById("tempreature");
      const city=document.getElementById("city");
      const image=document.getElementById("image");
      const a=await response;
      let data={
            "city":a['location']['name'],
            "temp":a['current']['temp_c'],
            "climate":a['current']['condition']['text']
      }
      temp.innerText=data["temp"];
      city.innerText=data['city'];
}

ShowDetails()