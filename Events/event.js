

// // function myFunction() {
// //   document.querySelector('ola').style.backgroundColor = "red";
// //    }

// var button = document.createElement('button');
// button.innerHTML = 'Click me';
// document.body.appendChild(button);
// /* Toggle background color on button click */
// var toggleBackground = function() {
//   if (document.body.style.backgroundColor === 'red') {
//     document.body.style.backgroundColor = 'white';
//   } else {
//     document.body.style.backgroundColor = 'red';
//   }
// };
// button.addEventListener('click', toggleBackground);

// var cancelBtn = document.createElement('button');
// cancelBtn.innerHTML = 'Cancel';
// document.body.appendChild(cancelBtn);

// var toggleDis = document.body.cancelBtn.setAttribute('disabled', 'true');

function changeColor() {

  var elem = document.getElementById('lo');
  console.log(elem);
  // elem.style.backgroundColor = 'blue';
  if (elem.style.backgroundColor === 'blue') {
    elem.style.backgroundColor = 'red';
  } else {
    elem.style.backgroundColor = 'blue';
  }

}

function dis() {

  var elem1 = document.getElementById('lo').children.kl;
  console.log(elem1);
  // elem1.style.backgroundColor = 'white';
    //  elem1.setAttribute('disabled', 'true');
    elem1.disabled = true;
}






 

