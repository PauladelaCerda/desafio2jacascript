function VerificarPassword() {

    const seleccion1 = document.getElementById("select1").value;
    const seleccion2 = document.getElementById("select2").value;
    const seleccion3 = document.getElementById("select3").value;

    const passwordIngresado = seleccion1 + seleccion2 + seleccion3;

    const resultadofinal = document.getElementById("resultado");


    if (passwordIngresado === "911")
    {resultadofinal.textContent = "Password Correcto";}

    else if (passwordIngresado === "714") 
    {resultadofinal.textContent = "Password Correcto";}

    else {resultadofinal.textContent = "Password Incorrecto, intenta nuevamente";}

}
