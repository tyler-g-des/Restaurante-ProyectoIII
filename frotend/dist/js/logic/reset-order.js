window.addEventListener('load', function() {
    const botonVolver = document.querySelector("#volverOrdenes");
    sessionStorage.clear();
    botonVolver.textContent = "Volver";
    
    console.log('La página ha terminado de cargarse!!');
});


