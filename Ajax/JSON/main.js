'use strict'

var btn = document.querySelector('.dog');
var img = document.querySelector('.img')

var xhr = new XMLHttpRequest


function request() {

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText)
          console.log(data);

      var photo = data.message;
          console.log(photo);

      img.setAttribute('src', photo)
    }
  }
   
  xhr.send();

}

btn.addEventListener('click', request)



