

// planetas a trabajar: todos los del sistema solar
   var g_mercurio = 3.7;
   var g_venus = 8.87;
   var g_tierra = 9.8;
   var g_marte = 3.711;
   var g_jupiter = 24.79;
   var g_saturno = 10.44;
   var g_urano = 8.7;
   var g_neptuno = 11.15;
   var g_pluton = 0.62;
   let peso = 0

window.addEventListener('load', iniciar)

function calcularPesos()
{
    peso = document.getElementById('pesoEnTierra').value;
    
    if (peso <= 0) {
        return
    }

    if(document.getElementById('op-jupiter').checked)
    {
        let pesoJupiter = 0
        
        pesoJupiter = calcularJupiter()
        
        let textJupiter = document.getElementById('txt-jupiter')
        textJupiter.innerHTML = ': ' + pesoJupiter.toFixed(2) + ' kilos'

    } else if(document.getElementById('op-saturno').checked)
    {
        let pesoSaturno = 0
        
        pesoSaturno = calcularSaturno()

        let textSaturno = document.getElementById('txt-saturno')
        textSaturno.innerHTML = ': ' + pesoSaturno.toFixed(2) + ' kilos'

    } else if(document.getElementById('op-neptuno').checked)
    {
        let pesoNeptuno = 0
        
        pesoNeptuno = calcularNeptuno()

        let textNeptuno = document.getElementById('txt-neptuno')
        textNeptuno.innerHTML = ': ' + pesoNeptuno.toFixed(2) + ' kilos'

    } else if(document.getElementById('op-urano').checked)
    {
        let pesoUrano = 0
        
        pesoUrano = calcularUrano()

        let textUrano = document.getElementById('txt-urano')
        textUrano.innerHTML = ': ' + pesoUrano.toFixed(2) + ' kilos'

    } else if(document.getElementById('op-mercurio').checked)
    {
        let pesoMercurio = 0
        
        pesoMercurio = calcularMercurio()

        let textMercurio = document.getElementById('txt-mercurio')
        textMercurio.innerHTML = ': ' + pesoMercurio.toFixed(2) + ' kilos'

    } else if(document.getElementById('op-venus').checked)
    {
        let pesoVenus = 0
        
        pesoVenus = calcularVenus()
        
        let textVenus = document.getElementById('txt-venus')
        textVenus.innerHTML = ': ' + pesoVenus.toFixed(2) + ' kilos'

    } else if(document.getElementById('op-tierra').checked)
    {

        let textTierra = document.getElementById('txt-tierra')
        textTierra.innerHTML = ': ' + peso + ' kilos'

    } else if(document.getElementById('op-marte').checked)
    {
        let pesoMarte = 0
        
        pesoMarte = calcularMarte()

        let textMarte = document.getElementById('txt-marte')
        textMarte.innerHTML = ': ' + pesoMarte.toFixed(2) + ' kilos'
    }

    else if(document.getElementById('op-pluton').checked)
    {
        let pesoPluton = 0
        
        pesoPluton = calcularPluton()

        let textPluton = document.getElementById('txt-pluton')
        textPluton.innerHTML = ': ' + pesoPluton.toFixed(2) + ' kilos'
    }
}  // fin de calcular pesos


function iniciar() 
{
    let botonReiniciar = document.getElementById('boton-reiniciar')
    let botonReiniciar2 = document.getElementById('boton-reiniciar2')
    let lbMercurio = document.getElementById('lb-mercurio')
    let lbVenus = document.getElementById('lb-venus')
    let lbTierra = document.getElementById('lb-tierra')
    let lbMarte = document.getElementById('lb-marte')
    let lbJupiter = document.getElementById('lb-jupiter')
    let lbSaturno = document.getElementById('lb-saturno')
    let lbUrano = document.getElementById('lb-urano')
    let lbNeptuno = document.getElementById('lb-neptuno')
    let lbPluton = document.getElementById('lb-pluton')
    
    botonReiniciar.addEventListener('click', reiniciarApp)
    botonReiniciar2.addEventListener('click', reiniciarApp)
    lbMercurio.addEventListener('click', calcularPesos)
    lbVenus.addEventListener('click', calcularPesos)
    lbTierra.addEventListener('click', calcularPesos)
    lbMarte.addEventListener('click', calcularPesos)
    lbJupiter.addEventListener('click', calcularPesos)
    lbSaturno.addEventListener('click', calcularPesos)
    lbUrano.addEventListener('click', calcularPesos)
    lbNeptuno.addEventListener('click', calcularPesos)
    lbPluton.addEventListener('click', calcularPesos)

    botonReiniciar.addEventListener('ontouchstart', reiniciarApp)
    botonReiniciar2.addEventListener('ontouchstart', reiniciarApp)
    lbMercurio.addEventListener('ontouchstart', calcularPesos)
    lbVenus.addEventListener('ontouchstart', calcularPesos)
    lbTierra.addEventListener('ontouchstart', calcularPesos)
    lbMarte.addEventListener('ontouchstart', calcularPesos)
    lbJupiter.addEventListener('ontouchstart', calcularPesos)
    lbSaturno.addEventListener('ontouchstart', calcularPesos)
    lbUrano.addEventListener('ontouchstart', calcularPesos)
    lbNeptuno.addEventListener('ontouchstart', calcularPesos)
    lbPluton.addEventListener('ontouchstart', calcularPesos)
    
}

function calcularJupiter() 
{
        return peso * g_jupiter / g_tierra
}

function calcularSaturno() 
{
    return peso * g_saturno / g_tierra
}

function calcularUrano() 
{
    return peso * g_urano / g_tierra
}

function calcularNeptuno() 
{
    return peso * g_neptuno / g_tierra
}

function calcularMarte() 
{
    return peso * g_marte / g_tierra
}

function calcularVenus() 
{
    return peso * g_venus / g_tierra
}

function calcularMercurio() 
{
    return peso * g_mercurio / g_tierra
}

function calcularPluton() 
{
    return peso * g_pluton / g_tierra
}

function reiniciarApp()
{
    location.reload()
}