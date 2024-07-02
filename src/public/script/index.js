document.addEventListener('DOMContentLoaded',()=>{

    const card = document.querySelectorAll('.animeSlider .anime')
    const cardSlider = document.querySelector('.animeSlider')
    const leftButton = document.querySelector('#left')
    const rightButton = document.querySelector('#right')

    let index = 0;
    let intervalTimer;

    const updateSlider = () => {
        let percentage = index * -100
        cardSlider.style.transform = 'translateX(' + percentage + '%)'
    }

    const sliderFunction = () => {


        index++
        if (index >= card.length) {
            index = 0;
        }
        updateSlider()
    }

    const sliderLeft = () => {

        index--;
        if (index < 0) {

            return index = card.length;
        }

        updateSlider()
    }



    leftButton.addEventListener('click', sliderLeft);

    rightButton.addEventListener('click', sliderFunction);
    setInterval(sliderFunction, 13000)

    // Toggle box
    let usernameBox = document.querySelector('.toggleBoxContainer .usernameBox');
    let toggleBoxes = document.querySelector('header .userBox');
    let toggle = false;
    
    // Función para mostrar el cuadro
    function showBox() {
        usernameBox.style.display = 'flex';
        console.log('Box shown');
    }
    
    // Función para ocultar el cuadro
    function hideBox() {
        usernameBox.style.display = 'none';
        console.log('Box hidden');
    }
    
    // Función de alternancia
    function toggleBox() {
        if (toggle) {
            showBox();
        } else {
            hideBox();
        }
        toggle = !toggle; // Alternar el estado de 'toggle'
    }
    
    // Evento de clic en '.userBox' para alternar el cuadro
    toggleBoxes.addEventListener('click', toggleBox);
})    
    




    


