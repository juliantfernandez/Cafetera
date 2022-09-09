window.onload = function(){
    setInterval(
        function loading(){
            let contenedor = document.getElementById('contenedor_carga')

            contenedor.style.visibility = 'hidden'
        
            contenedor.style.opacity = '0'

        }, 2000
    )
}



function cafetera(){
    let ingreseCafe = document.getElementById('ingresarCafe').value;
   if(ingreseCafe <= 100){
    let resultado1 = document.getElementById('resultado1')
    let dataPrint = document.createElement('div')
    dataPrint.innerHTML = `
    <div>
    <img src="coffe-ready.gif">
    </div>
    `
    resultado1.appendChild(dataPrint)
     alert('Cafe listo')
   }
   else if( ingreseCafe > 100){

    let resultado2 = document.getElementById('resultado2')
    let dataPrint2 = document.createElement('div')
    dataPrint2.innerHTML = `
    <div>
    <img src="coffe-error.gif">
    </div>
    `
    resultado2.appendChild(dataPrint2)
     alert ("Lo siento, es mucho café para tu vaso 😣")
   }else if(ingreseCafe == null){
    alert('Ingrese un dato valido')
   }
}

