function showFact(){

var i, no, fact;
fact=1;
no=Number(document.getElementById("num").value);
for(i=1; i<=no; i++)  
{
fact= fact*i;
}  
document.getElementById("fact").value= fact;
}
