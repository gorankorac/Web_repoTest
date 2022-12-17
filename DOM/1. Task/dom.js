// Create a function that selects the second list and applies a class that sets some
// background color to it.

function sel() {

  var dom1 = document.querySelectorAll('ul');
      dom1[1].classList.add('col');

return dom1[1];
}

var g = sel();
console.log(g);

// Create a second function that, when triggered, selects all <li> elements on the page. 
// The function also sets a class that sets some bg color to every <li> element.

function sel2() {

  var dom2 = document.querySelectorAll('li');
      
      for (var i=0; i<dom2.length; i++) {

      dom2[i].classList.add('go')

      }

 return dom2
}

var o = sel2();
console.log(o);

// Create one more unordered list and one more function
// The function should select only <li> elements from that last list
// Each <li> element should get a class that sets some bg color and transforms the text to uppercase.

function sel3() {

  var dom3 = document.querySelectorAll('li');
      
      for (var i=5; i<dom3.length; i++) {

      dom3[i].classList.add('go-girl')

      }

 return dom3
}

var o = sel3();
console.log(o);


// Traversing
// Create two unordered lists.
// Each list should be wrapped in a div element.
// One <li> element in the second list should have a class “active”, which sets its background color.

var d = document.createElement('div');
var l = document.createElement




