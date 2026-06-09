const form = document.getElementById('form-agendamento');

form.addEventListener('submit', function(e){

    e.preventDefault();

    alert(
        'Solicitação enviada com sucesso! Em breve entraremos em contato.'
    );

    form.reset();

});