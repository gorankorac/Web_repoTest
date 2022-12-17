// Create an unordered list containing <li> items that represent navigation.

// Create a function that takes text from one of the <li> elements and presents it on screen using alert.

var d = document.querySelectorAll('ul > li')[1].innerHTML;
console.log(d);

var f = function() {

  alert(d)

}
f();

// Create one more function.
// The function should take some text as an argument.
// The function should select the last <li> element in the list and replace its text with text passed as the function argument.

var kg = document.querySelectorAll('ul>li');
console.log(kg);
for(var i = 0; i < kg.length; i++){
   var str = kg[2].innerHTML
   kg[2].innerHTML = str.replace("Contact","Personal Info");
}

// InnerHTML
// Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
// Create a function that is used for building a dropdown/select element.
// It first builds a dropdown and then adds it to the DOM.
// The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
// Create options that correspond to items in the passed array and add them to the select element.
// Add the whole dropdown list to DOM .

// Use this function to create two selects on the page.
// The first select should be appended to the first div on the page.
// The second select should be appended to the last div on the page.

function buildDropdown(array, node) {
  var select = document.createElement('select');
  for (var i = 0; i < array.length; i++) {
    var option = document.createElement('option');
    option.innerHTML = array[i];
    select.appendChild(option);
  }
  node.appendChild(select);
}
var array = ['one', 'two', 'three'];
var node = document.body;
buildDropdown(array, node);



