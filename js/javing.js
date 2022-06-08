(function(){
    
    const sliders = [...document.querySelectorAll('.pollution__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentPollution = document.querySelector('.pollution__body--show').dataset.id;
        value = Number(currentPollution);
        value+= add;


        sliders[Number(currentPollution)-1].classList.remove('pollution__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('pollution__body--show');

    }

})();