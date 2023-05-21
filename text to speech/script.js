const textArea=document.getElementById('textarea');
const button=document.getElementById('button');


function TextSpeech(){
      const synt=window.speechSynthesis;
      const text =textArea.value;
}

button.addEventListener('click',TextSpeech);