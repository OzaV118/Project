function fun()
{
    var x=(document.getElementById("name").value);
    var y=(document.getElementById("addd").value);
    var z=(document.getElementById("fn").value);
    var a=(document.getElementById("mn").value);
    var b=(document.getElementById("st").value);
    var c=(document.getElementById("ct").value);
    var d=(document.getElementById("em").value);
    var e=(document.getElementById("pn").value);
    
    if(x.value.trim()=="" ||  y.value.trim()=="" ||  z.value.trim()=="" ||  a.value.trim()=="" ||  b.value.trim()=="" ||  c.value.trim()=="" ||  d.value.trim()=="" ||  e.value.trim()=="")
    {
    alert("please fill all the details");
    return false;
    }
    else
    {
        
        true;
        
    }
}
function fun2()
{
  var x=(document.getElementById("pnn").value);
  
  if(x.value.trim()=="")
  {
  alert("please fill all the details");
  return false;
  }
  else
  {
      
      true;
      
  }
}

 function hitler()
 {
    alert("your feedback has been submitted successfully");
 }
