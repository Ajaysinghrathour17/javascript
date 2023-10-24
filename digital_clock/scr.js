
const clock =  document.getElementById('clock')

// let hours = date.getHours()

setInterval(function(){
    let date =new Date()
    // console.log(date.toLocaleTimeString());
    // let mili = date.getMilliseconds()

    clock.innerHTML = date.toLocaleTimeString()  


}, 1000)
 