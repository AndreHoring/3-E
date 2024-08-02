document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio real do formulário
        alert('Obrigado por entrar em contato! Sua mensagem foi recebida.');
        form.reset(); // Limpa os campos do formulário
    });
});
