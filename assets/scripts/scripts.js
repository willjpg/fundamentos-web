
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let menssagem = document.querySelector('#menssagem')
let nomeOk = false
let emailOk = false
let menssagemOk = false


nome.style.width = '20%'
email.style.width = '20%'

function validaNome() {

   let txtNome = document.querySelector('#txtNome')
   if (nome.value.length < 3) {
      txtNome.innerHTML = 'Nome Inválido'
      txtNome.style.color = 'red'
   } else {
      txtNome.innerHTML = 'Nome Válido'
      txtNome.style.color = 'green'
      nomeOk = true
   }

}

function validaEmail() {
   let txtEmail = document.querySelector('#txtEmail')

   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      txtEmail.innerHTML = 'E-mail inválido'
      txtEmail.style.color = 'red'
   } else {
      txtEmail.innerHTML = 'E-mail válido'
      txtEmail.style.color = 'green'
      emailOk = true
   }
}

function validaMenssagem() {
   let txtMenssagem = document.querySelector('#txtMenssagem')

   if (menssagem.value.length >= 100) {
      txtMenssagem.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
      txtMenssagem.style.color = 'red'
      txtMenssagem.style.display = 'block'
   } else {
      txtMenssagem.style.display = 'none'
      menssagemOk = true
   }
}

function enviar() {
   if (nomeOk == true && emailOk == true && menssagemOk == true) {
      alert('Formulário enviado com sucesso!')
   } else {
      alert('Preencha o formulário corretamente antes de enviar...')
   }
}

// Dark Theme
function darkTheme() {
   document.body.classList.toggle('dark-theme')
}