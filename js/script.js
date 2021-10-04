function verificarRespuestas(){
    let total = 5;
    let puntos = 0;


// input del usuario
let myForm = document.forms["quizForm"];
let respuestas = ["a", "b", "c", "a", "b"];

//Validacion
for(let i = 1; i <= total; i++){
    if(myForm["p" + i].value === null || myForm["p" + i].value === ''){
            alert('Por favor responde la pregunta '+ i); //Esta serà la alerta si no se responden todas las preguntas
            return false;
        }else{
            if(myForm["p" + i].value === respuestas[i - 1]){
                ++puntos;
            }
        }
}

///Resultados

let resultado = document.getElementById("resultado");
resultado.innerHTML = '<h2>Obtuviste <span>'+ puntos +'</span> de <span>'+ total +' puntos</span></h2>';

//alert(Tus puntos '+ score +' de ' +total);

return false;
}