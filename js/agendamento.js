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

    const data =
    this.data.value;

     const hora =
    this.hora.value;

     const observacoes =
    this.observacoes.value;

    const mensagem =
`Olá. Me chamo ${nome} 
sou responsavel do(a) ${crianca} 
gostaria de agendar para ${servico} 
na data: ${data} 
às ${hora}
Meu Contato: ${telefone} 
${observacoes} `;

    const url =
`https://wa.me/5585994317403?text=${encodeURIComponent(mensagem)}`;

    window.open(url);

});