// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    console.log(nombre.trim());
    nombre2= nombre.trim();
    if (nombre2.length==0) {
        alert("Por favor, inserte un nombre");
    }else{
        alert("Amigo agregado")
        amigos.push(nombre2);
        document.querySelector("#amigo").value="";
        actualizarLista();
    }
}

function sortearAmigo() {
    if (amigos.length<1) {
        alert("Agrega primero amigos");
    }else{
        console.log(amigos.length+"antes");
        numeroSorteado = Math.random()*amigos.length;
        numeroSorteado = Math.trunc(numeroSorteado);
        console.log("numero pos "+numeroSorteado);
        
        var ul = document.querySelector('#resultado');
        var li= document.createElement('li');
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }

        li.textContent=amigos[numeroSorteado];
        ul.appendChild(li);
        amigos.splice(numeroSorteado,1);

        actualizarLista();
    }
}

function actualizarLista() {
    var ul  = document.querySelector("#listaAmigos");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    for (let index = 0; index < amigos.length; index++) {
           var li = document.createElement('li');
           
           li.textContent = amigos[index];

           ul.appendChild(li);
    }
}