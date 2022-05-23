
     let nome = window.document.getElementById('nome')
     let email = document.getElementById('email')
     let menssagem = document.getElementsByName('menssagem')

     function verifica(){
         if(nome.value == "" || email.value == "" || menssagem.value == ""){
             alert("Todos os campos são obrigtórios")
             return false
     }
     return true
 }

 function enviar(){
     if(verifica()){
         alert("Olá " + nome.value + "! Email enviado com sucesso")
     }
 }

// Dark Theme
function darkTheme(){
    document.body.classList.toggle('dark-theme')
}