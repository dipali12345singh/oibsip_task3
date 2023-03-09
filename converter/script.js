function convertValue()
{
let number = parseFloat(document.getElementById("input1").value);
let s = document.getElementById("values").value;
console.log(s);
if(s == "val1"){
    document.getElementById("result").innerHTML = (number-32)/1.8;
}
else{
    document.getElementById("result").innerHTML = (number*1.8) + 32;
}
}