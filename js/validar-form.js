document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('form-contato').addEventListener('submit', function(event) {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
    
        if (!nome || !email || !mensagem) {
            event.preventDefault(); // Impede o envio do formulário
            alert('Por favor, preencha todos os campos.');
        }
    });

 // Função para enviar dados do formulário para Formspree
    
function enviarFormulario(form, formspreeURL) {
const formData = new FormData(form); // Passar o formulário
const data = {};

// Converter os dados do FormData para um objeto

formData.forEach((value, key) => {
data[key] = value;
    
});

// Enviar os dados via fetch
fetch(formspreeURL, {

method:'POST',
body: JSON.stringify(data), // Transformar os dados em JSON 
headers: {
        
'Accept':'application/json',
'Content-Type':'application/json'

// Define o Content-Type como application/json

}
})
.then(response => {

if (response.ok) {
    
alert('Mensagem enviada com sucesso!');
    
form.reset(); 
// Resetar o formulário após o sucesso
    
} else {
 alert('Erro ao enviar a mensagem. Por favor, tente novamente.');
}
 })

.catch(error => {
      console.error('Erro:', error);
                
alert('Ocorreu um erro ao enviar a mensagem.');
                
});
}
// Verifica se o formulário de contato está na página

const contatoForm = document.getElementById('contatoForm');

if (contatoForm) {
    const formspreeURLContato = 'https://formspree.io/f/manyoyqy' ; // URL para o Formspree de contato
    
    contatoForm.addEventListener('submit', function(event) {
    
    event.preventDefault();
    enviarFormulario(contatoForm, formspreeURLContato);

});
}
});
