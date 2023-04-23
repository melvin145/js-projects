function bmicalculator(){
      let bmi;
      let result=document.getElementById("bmi");
      let weight=parseInt(document.getElementById("weight").value);
      document.getElementById("weight-value").textContent=weight+"kg";
      let height=parseInt(document.getElementById("height").value);
      document.getElementById("height-value").textContent=height+"cm";
      bmi=(weight / Math.pow((height/100),2)).toFixed(1);
      result.textContent=bmi;
      if(bmi<18.5){
            category="Underweight";
      }
      else if(bmi >= 18.5 && bmi<=24.9){
                  category="Normal weight";
      }
      else if(bmi>=24.9 && bmi<=29){
            category="OverWeight";

      }
      else{
            category="Obese";
      }
      document.getElementById("category").textContent=category;

}