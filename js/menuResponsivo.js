const botao = document.querySelector('.botao')
const menuResponsivo = document.querySelector('.menuResponsivo')
const linha1 = document.querySelector('.linha1')
const linha2 = document.querySelector('.linha2')
const linha3 = document.querySelector('.linha3')



botao.addEventListener('click' , menuToggle)

function menuToggle(){
    if(menuResponsivo.classList.contains('ativar')){
        menuResponsivo.classList.toggle('desativar')
        linha1.classList.toggle('linha1Fechar')
        linha2.classList.toggle('sumir')
        linha3.classList.toggle('linha3Fechar')
       
        
    }else {
        menuResponsivo.classList.toggle('ativar')
        linha1.classList.toggle('linha1Fechar')
        linha2.classList.toggle('sumir')
        linha3.classList.toggle('linha3Fechar')
    }
   
}