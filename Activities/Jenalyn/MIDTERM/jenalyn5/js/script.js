var Num1 = document.getElementById("txtNum1");
var Num2 = document.getElementById("txtNum2");


function Add(){
    var Num1 = parseFloat(document.getElementById("txtNum1").value);
    var Num2 = parseFloat(document.getElementById("txtNum2").value);
    var result = Num1 + Num2;
    alert("SUM: " + result);
}
function Subtract(){
    var Num1 = parseFloat(document.getElementById("txtNum1").value);
    var Num2 = parseFloat(document.getElementById("txtNum2").value);
    var result = Num1 - Num2;
    alert("DIFFERENCE: " + result);
}
function Multiply(){
    var Num1 = parseFloat(document.getElementById("txtNum1").value);
    var Num2 = parseFloat(document.getElementById("txtNum2").value);
    var result = Num1 * Num2;
    alert("PRODUCT: " + result);
}
function Divide(){
    var Num1 = parseFloat(document.getElementById("txtNum1").value);
    var Num2 = parseFloat(document.getElementById("txtNum2").value);
    var result = Num1 / Num2;
    alert("QUOTIENT: " + result);  
}
function ButtonClear(){
    document.getElementById("txtNum1").value = "";
    document.getElementById("txtNum2").value = "";
}

