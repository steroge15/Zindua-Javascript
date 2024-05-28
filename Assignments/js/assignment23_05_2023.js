{
    function changeColor(color) {
    document.body.style.backgroundColor = color;

       }

  // Adding event listener to reset the background color if clicked outside the buttons
  document.addEventListener('click', function(event) {
    const buttons = document.querySelectorAll('button');
    const clickedInsideButton = Array.from(buttons).some(button => button.contains(event.target));
    if (!clickedInsideButton) {
      document.body.style.backgroundColor = '#f0f0f0'; // Reset to original color
    
    }
  
}

);

}