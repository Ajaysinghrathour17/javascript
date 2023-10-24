//random color

const randomColor =   function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let interValid;
const startChangingColor = function(){
   if (!interValid) {
    interValid = setInterval(changeColor, 500)

   }
   function changeColor() {
    document.body.style.backgroundColor = randomColor();
   }
}
const stopChangingColor = function(){
      clearTimeout(interValid)
      interValid = null;
}

document.querySelector('#start').addEventListener(
    'click', startChangingColor)
  document.querySelector('#stop').addEventListener(
    'click', stopChangingColor)