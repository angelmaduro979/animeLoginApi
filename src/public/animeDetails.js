document.addEventListener('DOMContentLoaded',()=>{
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