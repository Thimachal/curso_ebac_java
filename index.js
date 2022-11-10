const form = document.getElementById('form-deposito');

form.addEventListener('submit', function(event) {
    event.preventDefault();

const numeroA = document.getElementById('primeiro-valor');
const numeroB = document.getElementById('segundo-valor');


    if(numeroA.value > numeroB.value){
        alert("Favor tente novamente, primeiro valor não pode ser maior que o segundo valor.");
    }else if(numeroB.value > numeroA.value){
        alert("Enviado com Sucesso!");
    }else{
        alert("Valores são iguais, favor tente novamente.");
    }
})

