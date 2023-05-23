const textArea=document.getElementById('textarea');
const button=document.getElementById('button');


function TextSpeech(){
      const synth=window.speechSynthesis;
      const text=textArea.value;
      if(!synth.speaking && text){
      const utterance =new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
      }

      if(text.length >50){
            if(synth.speaking &&  isSpeaking){
                  button.innerText= 'Pause';
                  synth.resume();
                  isSpeaking=false;
            }
            else{
                  button.innerText='Resume';
                  synth.pause();
                  isSpeaking=true;
            }
      }
}     

button.addEventListener('click',TextSpeech);