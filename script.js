function ac()
{
    document.getElementById("res").value="";
}
function show(input1)
{
    document.getElementById("res").value+=input1; 
}
function cal()
{
   var output=eval(document.getElementById("res").value);
   document.getElementById("res").value=output;
}
