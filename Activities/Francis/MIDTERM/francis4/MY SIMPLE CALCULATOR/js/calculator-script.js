function addNumbers(){
    
    var n1 = parseInt(document.getElementById("txtNum1").value);
    var n2 = parseInt(document.getElementById("txtNum2").value);
    var result = n1+n2;
    alert(result);
    n1= document.getElementById("txtNum1").value='';
    n2 = document.getElementById("txtNum2").value='';
}
function subtractNumbers(){
    var n1 = parseInt(document.getElementById("txtNum1").value);
    var n2 = parseInt(document.getElementById("txtNum2").value);
    var result = n1-n2;
    alert(result);
    n1= document.getElementById("txtNum1").value='';
    n2 = document.getElementById("txtNum2").value='';
}
function multiplyNumbers(){
    var n1 = parseInt(document.getElementById("txtNum1").value);
    var n2 = parseInt(document.getElementById("txtNum2").value);
    var result = n1*n2;
    alert(result);
    n1= document.getElementById("txtNum1").value='';
    n2 = document.getElementById("txtNum2").value='';
}
function divideNumbers(){
    var n1 = parseInt(document.getElementById("txtNum1").value);
    var n2 = parseInt(document.getElementById("txtNum2").value);
    var result = n1/n2;
    alert(result);
    n1= document.getElementById("txtNum1").value='';
    n2 = document.getElementById("txtNum2").value='';
}
function clearBtn(){
    document.getElementById("txtNum1").value='';
    document.getElementById("txtNum2").value='';
}