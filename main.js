setTimeout(document, 5000);
   document.getElementById("mostrar-menu").addEventListener("click",function(){
    
    setTimeout(transicion, 1500);
  });

  function transicion(){
    document.getElementById("menu").classList.toggle("mostrar");
  }