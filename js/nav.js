document.addEventListener('scroll',() =>{
    const header = document.querySelector('header');
    if(window.scrollY > 0) {
        header.classList.add('scrolled');

    }
    else{
        header.classList.remove('scrolled');
    }
})

// btn color

const btn = document.getElementById('but1');
btn.addEventListener('click',function(){
    
    btn.style.backgroundColor = '#FFFFFF';

});

const btn2 = document.getElementById('but2');
btn.addEventListener('click',function(){
    
    btn2.style.backgroundColor = '#B4F461';
   

});

