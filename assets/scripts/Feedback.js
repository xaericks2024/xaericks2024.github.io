
var bugImg = document.getElementById("bugImg");
var feedbackImg = document.getElementById("feedbackImg");
var supportImg = document.getElementById("supportImg");
var cuadroTexto = document.getElementById("cuadroTexto");
var textoArea = document.getElementById("texto");
var cancelarBtn = document.getElementById("cancelarBtn");
var enviarBtn = document.getElementById("enviarBtn");
 
bugImg.addEventListener("click", function() {
    mostrarCuadroTexto("Reportar Error");
});

feedbackImg.addEventListener("click", function() {
    mostrarCuadroTexto("Sugerencias");
});

supportImg.addEventListener("click", function() {
    mostrarCuadroTexto("Soporte");
});

function mostrarCuadroTexto(titulo) {
    
    cuadroTexto.querySelector("h2").textContent = titulo;
    
   
    cuadroTexto.style.display = "block";
 
    textoArea.disabled = true;
 
    cancelarBtn.disabled = false;
    enviarBtn.disabled = false;
}

 
cancelarBtn.addEventListener("click", function() {
 
    cuadroTexto.style.display = "none";

   
    textoArea.disabled = false;
});
 
enviarBtn.addEventListener("click", function() {
     
    cuadroTexto.style.display = "none";

 
    textoArea.disabled = false;
});
