
function addNumbers(){
    var n1 = parseInt(document.getElementById("txtNum1").value);
    var n2 = parseInt(document.getElementById("txtNum2").value); 
    var sum = n1 + n2;
    alert("SUM: " + sum);
    n1 = document.getElementById("txtNum1").value = '';
    n2 = document.getElementById("txtNum2").value = '';   
}

function subtractNumbers() {
    var num1 = parseInt(document.getElementById("txtNum1").value);
    var num2 = parseInt(document.getElementById("txtNum2").value); 
    var dif = num1 - num2;
    alert("DIFFERENCE: " + dif);
    num1 = document.getElementById("txtNum1").value = '';
    num2 = document.getElementById("txtNum2").value = '';   
}

function multiplyNumbers() {
    var n1 = parseInt(document.getElementById("txtNum1").value);
    var n2 = parseInt(document.getElementById("txtNum2").value); 
    var x = n1 * n2;
    alert("PRODUCT: " + x);
    n1 = document.getElementById("txtNum1").value = '';
    n2 = document.getElementById("txtNum2").value = '';   
}

function divideNumbers() {
    var n1 = parseInt(document.getElementById("txtNum1").value);
    var n2 = parseInt(document.getElementById("txtNum2").value); 
    var quo = n1 / n2;
    alert("QUOTIENT: " + quo);
    n1 = document.getElementById("txtNum1").value = '';
    n2 = document.getElementById("txtNum2").value = '';   
}

function clearTextboxes(){
    document.getElementById("txtNum1").value = "";
    document.getElementById("txtNum2").value = "";
}
