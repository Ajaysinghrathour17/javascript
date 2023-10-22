
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

// const green = document.querySelector('#green');
// const grey = document.querySelector('#grey');
// const yellow = document.querySelector('#yellow');
// const white = document.querySelector('#white');
// const blue = document.querySelector('#blue');

buttons.forEach(function (button){
    // console.log(button);
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id

        }else if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
    })
})
// green.addEventListener('click', function myFunction() {
//    body.style.cssText = 'background-color: green; color: white;';
// })
// grey.addEventListener('click', function grey() {
//     document.querySelector('body').style.cssText = 'background-color: grey; color: white;';
// })
// white.addEventListener('click', function grey() {
//     document.querySelector('body').style.cssText = 'background-color: white; color: black;';
// })
// blue.addEventListener('click', function grey() {
//     document.querySelector('body').style.cssText = 'background-color: blue; color: white;';
// })

// yellow.addEventListener('click', function grey() {
//     document.querySelector('body').style.cssText = 'background-color: yellow; color: white;';
// })

