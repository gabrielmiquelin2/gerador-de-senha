let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let passoword = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function(){ //vai fazer com que toda vez que eu arrastar o mouse no tamanho das carcteres ele me informa a quantidade
   sizePassword.innerHTML = this.value;
}

function generatePassword(){
  
   let pass = "";
   for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
     pass += charset.charAt(Math.floor(Math.random() * n));
     
   }

  containerPassword.classList.remove("hide");//removendo a class "hide" do html
  passoword.innerHTML = pass;
  novaSenha = pass;
}

//função para copiar a senha gerada
function copyPassword(){
   alert("Senha copiada com sucesso!")
   navigator.clipboard.writeText(novaSenha)
}