const nuestraPropuesta = document.querySelector("#NPropuesta");
const informacionGeneral = document.querySelector("#IGeneral");
const nuestrosServicios = document.querySelector("#NServicios");

nuestraPropuesta.addEventListener("click", (s) => {
    s.preventDefault();
    const sectionS = document.querySelector(".NuestraPropuesta");
    sectionS.scrollIntoView({behavior:"smooth"})
})
informacionGeneral.addEventListener("click", (s) => {
    s.preventDefault();
    const sectionS = document.querySelector(".InformacionGeneral");
    sectionS.scrollIntoView({behavior:"smooth"})
})
nuestrosServicios.addEventListener("click", (s) => {
    s.preventDefault();
    const sectionS = document.querySelector(".Servicios");
    sectionS.scrollIntoView({behavior:"smooth"})
})