/*Pasta javascript*/

/* por selector querySelector(#) ids
  por selector querySelector(.) classe
*/

let nome = document.querySelector('#nome')
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk= false;
let assuntoOk =false;
let mapa = document.querySelector('#mapa');
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// para que as caixas de texto sejam de um tamanho decente
nome.style.width = '100%';
email.style.width = '100%';
//validando nome cadastro
function validaNome() {
    let txtNome = document.querySelector('#txtNome'); //Vai deixar de existir fora deste escopo
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido';
        txtNome.style.color = 'red';
        txtAssunto.style.backgroundColor = 'rgba(240, 248, 255, 0.589)';
    } else {
        txtNome.innerHTML = 'Nome válido';
        txtNome.style.color = 'blue';
        txtAssunto.style.backgroundColor = 'rgba(240, 248, 255, 0.589)';
        nomeOk = true;
    }
}

//validando email
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');
    if (email.value.indexOf('@') ==-1 || email.value.indexOf('.')== -1) { // && e || ou
        txtEmail.innerHTML = 'E-mail inválido';
        txtEmail.style.color = 'red';
        txtAssunto.style.backgroundColor = 'rgba(240, 248, 255, 0.589)';
    }
    else {
        txtEmail.innerHTML = 'E-mail válido';
        txtEmail.style.color = 'blue';
        txtAssunto.style.backgroundColor = 'rgba(240, 248, 255, 0.589)';
        emailOk = true;
    }
}
////////////////////////////////////////
//validando assunto
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto');
    if (assunto.value.length >= 400) {
        txtAssunto.innerHTML ='Texto muito grande, digite no máximo 400 caracteres';
        txtAssunto.style.color= 'red';
        txtAssunto.style.backgroundColor = 'rgba(240, 248, 255, 0.589)';
        txtAssunto.style.display='block'; //para que entre primeiro nessa condição e depois na else
    }
    else{
        txtAssunto.style.display ='none';
        assuntoOk = true;
    }
}
//função botão para dar alert
function enviar(){
    if (nomeOk == true && assuntoOk == true && emailOk==true){
        alert ('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha todos os campos corretamente!')
    }
}

function mapaZoom(){
    mapa.style.width= '800px'
    mapa.style.height= '600px'
}
function mapaNormal(){
    mapa.style.width= '400px'
    mapa.style.height= '250px'
}
//validando email método convencional
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   }
  
//   function validate() {
//     const $result = $("#result");
//     const email = $("#email").val();
//     $result.text("");
  
//     if (validateEmail(email)) {
//       $result.text(email + " is valid :)");
//       $result.css("color", "green");
//     } else {
//       $result.text(email + " is not valid :(");
//       $result.css("color", "red");
//     }
//     return false;
//   }
  
//   $("#validate").on("click", validate);