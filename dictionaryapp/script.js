const result=document.getElementById("result");
const meaning=document.getElementById("meaning");
const meaning2=document.getElementById("meaning2");
const btn =document.getElementById("button"); 
const word=document.getElementById("word");
const example=document.getElementById("example");


btn.addEventListener("click",()=>{
      const inpword=document.getElementById("inp-word").value;
      const url= 'https://api.dictionaryapi.dev/api/v2/entries/en/'+inpword;
      fetch(url)
      .then(response =>response.json())
      .then(data=>
            {
             meaning.innerHTML=data[0].meanings[0].definitions[0].definition;
             meaning2.innerHTML=data[0].meanings[0].definitions[1].definition;
             word.innerHTML=data[0].word;
             example.innerHTML=data[0].meanings[0].definitions[0].example;
            });
});