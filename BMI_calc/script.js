const  form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const  height = document.querySelector('#height').value;
    const  weight = document.querySelector('#weight').value;
    const  result = document.querySelector('#results');

  if(height === ''|| height < 0 || isNaN(height)){
      result.innerHTML = `Please give a valid height ${height}`;
  }else if(weight === ''|| weight < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid weight ${height}`;
} else{
    result.innerHTML = (weight/((height*height)/10000)).toFixed(2)
}
  
});