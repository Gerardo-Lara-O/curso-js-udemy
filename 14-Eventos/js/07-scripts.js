const cardDiv = document.querySelector('.card')

cardDiv.addEventListener('click',(e)=>{
    console.log(e.target.classList);
    if (e.target.classList.contains('titulo')) {
        console.log('diste click en titulo');
        
        
    }
    
})
