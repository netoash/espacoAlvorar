document
.getElementById("form-agendamento")
.addEventListener("submit", function(e){

    e.preventDefault();

    const nome =
    this.responsavel.value;

    const crianca =
    this.crianca.value;

    const telefone =
    this.telefone.value;

    const servico =
    this.servico.value;

    const mensagem =
`Olá.

Nome: ${nome}

Criança: ${crianca}

Telefone: ${telefone}

Serviço: ${servico}

Gostaria de agendar uma avaliação.`;

    const url =
`https://wa.me/5585999999999?text=${encodeURIComponent(mensagem)}`;

    window.open(url);

});