const titulos = document.querySelectorAll('a')
const paragrafo1 = document.querySelector('.paragrafo1P')
const paragrafo2 = document.querySelector('.paragrafo2P')
const paragrafo3 = document.querySelector('.paragrafo3P')


titulos.forEach( titulo => {
    titulo.addEventListener('click' , acordionToggle)
})

function acordionToggle(event){
   
    if(event.target.innerText === 'Paragrafo 1'){
        paragrafo1.classList.toggle('ativar')
       
    }
    if(event.target.innerText === 'Paragrafo 2'){
        paragrafo2.classList.toggle('ativar')
      
    }
    if(event.target.innerText === 'Paragrafo 3'){
        paragrafo3.classList.toggle('ativar')
       
    }
}