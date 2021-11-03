const botaoAbrirModal = document.querySelector('.botaoAbrir')
const modal = document.querySelector('.modalContainer')
const botaoFecharModal = document.querySelector('.buttonFechar')

botaoAbrirModal.addEventListener('click' , toggleModal)
botaoFecharModal.addEventListener('click' , toggleModal)
modal.addEventListener('click' , cliqueFora)

function cliqueFora(event){
    if(event.target === this){
        toggleModal()
    }
}
function toggleModal(event){

    if(!modal.classList.contains('ativo')){
        modal.classList.add('ativo')
        modal.classList.remove('desativado')
    }else{
        modal.classList.add('desativado')
        modal.classList.remove('ativo')
    }
   
}
