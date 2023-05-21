const textArea=document.getElementById('textarea');
const button=document.getElementById('button');


function TextSpeech(){
      console.l
      const synt=window.speechSynthesis;
      const text =textArea.value;
      const utterance =new SpeechSynthesisUtterance(text);
      synt.speak(utterance);
      console.log(text);
}

button.addEventListener('click',TextSpeech);