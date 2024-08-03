

function calcul(){
    var option=document.getElementById("select").value;
var number1=document.getElementById("num1").value;
var number2=document.getElementById("num2").value;
var div=document.getElementById("div")
var result=document.createElement("h1")

    if(document.getElementById("num1").value!="" && document.getElementById("num1").value!=""){
        document.getElementById("num1").style="border:2px solid green;"
        document.getElementById("num2").style="border:2px solid green;"



        switch (option){
            case "+":
                result.innerHTML=number1+"+"+number2+"="+(Number(number1)+Number(number2));
                
            break;
            case "-":
                result.innerHTML=number1+"-"+number2+"="+(Number(number1)-Number(number2));
                
            break;
            case "x":
                result.innerHTML=number1+"x"+number2+"="+(Number(number1)*Number(number2));
                
            break;
            case "/":
                result.innerHTML=number1+"/"+number2+"="+(Number(number1)/Number(number2));
               
            break;
        } 
        div.appendChild(result);
    }
    else{
        document.getElementById("num1").style="border:2px solid red;"
        document.getElementById("num1").setAttribute("placeholder","please fill all inputs")
        document.getElementById("num2").setAttribute("placeholder","please fill all inputs")

        document.getElementById("num2").style="border:2px solid red;"

    }
    
}