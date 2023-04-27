var btn = document.querySelector('#btn');

btn.addEventListener("click", function() {
    var div = document.querySelector('.sessao');
    
  if(div.style.display === "none") {
        div.style.display = "flex";
        console.log('ooi ')
    } else {
      div.style.display = "none";
  }
  ;
  // if (div.style.height === '200px'){
  //   div.style.height = '300px'
  // }
  // else{div.style.height = '200px'}
  // div = document.querySelector('.card').style.height = '300px'
});

