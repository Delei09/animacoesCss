const titulo = document.querySelectorAll('[data-animacao]')
function aparecer(){
    const top = window.pageYOffset  + ( (window.innerHeight * 3) / 4 );
    titulo.forEach(function(elemento){

        if ( (top) > elemento.offsetTop){
            elemento.classList.add('left')
            elemento.classList.remove('sair')
        } else {
            elemento.classList.remove('left')
            elemento.classList.add('sair')
        
        }
       
      
    })
        
}

window.addEventListener('scroll',function (){ 
    aparecer()
})