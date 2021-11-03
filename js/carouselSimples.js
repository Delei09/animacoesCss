const esquerda = document.querySelector('.esquerda')
const direita = document.querySelector('.direita')



esquerda.addEventListener('click' , ()=> {
    console.log('to aqui')
    const img1 =  document.querySelector('.img1')
    const img2 =  document.querySelector('.img2')
    const img3 =  document.querySelector('.img3')

    if(img1.classList.contains('atual') ){

        img1.classList.remove('atual')
        img3.classList.add('atual')
        img3.classList.remove('esconde')
        img1.classList.add('esconde')

        img3.setAttribute('style' , 'transform : translateX(-1000px)')

    }else if (img2.classList.contains('atual') ){

        img1.classList.add('esconde')
        img2.classList.remove('atual')
        img1.classList.add('atual')
        img1.classList.remove('esconde')
        img2.classList.add('esconde')
        
        img1.setAttribute('style' , 'transform : translateX(0px)')

    }else{
        img1.classList.add('esconde')
        img3.classList.remove('atual')
        img2.classList.add('atual')
        img2.classList.remove('esconde')
        img3.classList.add('esconde')
        
        img2.setAttribute('style' , 'transform : translateX(-500px)')
    }

})

direita.addEventListener('click' , ()=> {
    const img1 =  document.querySelector('.img1')
    const img2 =  document.querySelector('.img2')
    const img3 =  document.querySelector('.img3')

    if(img1.classList.contains('atual') ){

        img1.classList.remove('atual')
        img2.classList.add('atual')
        img2.classList.remove('esconde')
        img1.classList.add('esconde')

        img2.setAttribute('style' , 'transform : translateX(-500px)')

    }else if (img2.classList.contains('atual') ){

        img1.classList.add('esconde')
        img2.classList.remove('atual')
        img3.classList.add('atual')
        img3.classList.remove('esconde')
        img2.classList.add('esconde')
        
        img3.setAttribute('style' , 'transform : translateX(-1000px)')

    }else{
        img1.classList.add('esconde')
        img3.classList.remove('atual')
        img1.classList.add('atual')
        img1.classList.remove('esconde')
        img3.classList.add('esconde')
        
        img1.setAttribute('style' , 'transform : translateX(0px)')
    }

})


const item1 =  document.querySelector('.item1')
const item2 =  document.querySelector('.item2')
const item3 =  document.querySelector('.item3')

item1.addEventListener('click' , ()=> {
    const img1 =  document.querySelector('.img1')
    const img2 =  document.querySelector('.img2')
    const img3 =  document.querySelector('.img3')
    
    
    img1.classList.add('atual')

    img1.classList.remove('esconde')
    img2.classList.remove('atual')
    img3.classList.remove('atual')

    img2.classList.add('esconde')
    img3.classList.add('esconde')

    img1.setAttribute('style' , 'transform : translateX(0px)')

})

item2.addEventListener('click' , ()=> {
    const img1 =  document.querySelector('.img1')
    const img2 =  document.querySelector('.img2')
    const img3 =  document.querySelector('.img3')
    
    
    img2.classList.add('atual')

    img2.classList.remove('esconde')
    img3.classList.remove('atual')
    img1.classList.remove('atual')

    img3.classList.add('esconde')
    img1.classList.add('esconde')

    img2.setAttribute('style' , 'transform : translateX(-500px)')

})

item3.addEventListener('click' , ()=> {
    const img1 =  document.querySelector('.img1')
    const img2 =  document.querySelector('.img2')
    const img3 =  document.querySelector('.img3')
    
    
    img1.classList.add('atual')

    img3.classList.remove('esconde')
    img2.classList.remove('atual')
    img1.classList.remove('atual')

    img1.classList.add('esconde')
    img2.classList.add('esconde')

    img3.setAttribute('style' , 'transform : translateX(-1000px)')

})