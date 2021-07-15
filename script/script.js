
function currencyConverter(valNum){
    if(converter.soum.value <= 0)
    window.alert("Please insert greater value");
    else{
    
    document.getElementById("dollar").value = (valNum/10631).toFixed(2);
    document.getElementById("rubl").value = (valNum/142 ).toFixed(2);
    document.getElementById("euro").value = (valNum/12626).toFixed(2);
    
    }
    }