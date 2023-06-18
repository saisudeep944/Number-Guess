var tr=1;
var b=Math.ceil(Math.random()*200);
console.log(b);
chec=()=>
{
    var a =parseInt(document.getElementById("n1").value);
    if(a==b)
    {
        document.getElementById("res").textContent=("Congratulations🎉🎉 u have guessed the Number in "+tr+" tries");

    }
    else if(a<b)
    {
        document.getElementById("res").textContent=("Try "+tr+",a Greater Number");
    }
    else{
        document.getElementById("res").textContent=("Try "+tr+",a Lower Number");
    }
    tr++;


}