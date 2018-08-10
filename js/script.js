const panels = document.querySelectorAll('.panel');
function toggleOpen(){
  this.classList.toggle('open');
}

function toggleActive(e){
  console.log(e.propertyName);
  if(e.propertyName.includes('flex')){ //We do it this way because different browsers will use 'Flex' rather than 'Flex-grow'.
    this.classList.toggle('open-active'); //There are multiple 'transitionend' events happening. Which is why we need to specify which one to listen for with the if statement.
}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); //"When someone clicks ('click') me... Find this function ('toggleOpen'), and run it."
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive
)); //"When someone clicks ('click') me... Find this function ('toggleOpen'), and run it."
