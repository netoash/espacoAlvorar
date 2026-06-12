const sidebar =
document.querySelector('.sidebar');

const toggle =
document.getElementById('toggleSidebar');

toggle.addEventListener('click',()=>{

    sidebar.classList.toggle('collapsed');

});