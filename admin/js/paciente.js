function abrirPagina(pagina) {

    document.getElementById('conteudo-frame').src = pagina;

}
const modal =
document.getElementById("modalPaciente");

document
.getElementById("novoPaciente")
.onclick=()=>{

    modal.classList.add("active");

};

modal.onclick=(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

};