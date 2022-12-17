
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

/* Create a function that is used for building a dropdown/select element. */
function buildSelect(arr) {
  var select = document.createElement('select');
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement('option');
    option.innerHTML = arr[i];
    select.appendChild(option);
  }
  return select;
}
/* It first builds a dropdown and then adds it to the DOM. */
var select = buildSelect(['one', 'two', 'three']);
document.body.appendChild(select);
/* The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added. */
function buildSelect(arr, node) {
  var select = document.createElement('select');
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement('option');
    option.innerHTML = arr[i];
    select.appendChild(option);
  }
  node.appendChild(select);
}
/* Create options that correspond to items in the passed array and add them to the select element. */
buildSelect(['one', 'two', 'three'], document.body);
/* Add the whole dropdown list to DOM . */

/* Use this function to create two selects on the page. */
buildSelect(['one', 'two', 'three'], document.body);
buildSelect(['four', 'five', 'six'], document.body);
/* The first select should be appended to the first div on the page. */
var divs = document.getElementsByTagName('div');
buildSelect(['one', 'two', 'three'], divs[0]);
/* The second select should be appended to the last div on the page. */
buildSelect(['four', 'five', 'six'], divs[divs.length - 1]);


// Attributes
// Create a form that contains multiple input elements with labels.
// Some of those elements should be required.

// Create a function that validates the form.
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders.



/* Create a form that contains multiple input elements with labels. */
var form = document.createElement('form');
var input = document.createElement('input');
var label = document.createElement('label');
label.innerHTML = 'Name';
form.appendChild(label);
form.appendChild(input);
document.body.appendChild(form);
/* Some of those elements should be required. */
var input = document.createElement('input');
input.setAttribute('required', 'required');
/* Create a function that validates the form. */
function validateForm(form) {
  var inputs = form.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute('required') && inputs[i].value === '') {
      return false;
    }
  }
  return true;
}
/* The function checks each input element that belongs to the form. */
function validateForm(form) {
  var inputs = form.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute('required') && inputs[i].value === '') {
      return false;
    }
  }
  return true;
}
/* If the element has the required attribute and no data, it should get red borders. */
function validateForm(form) {
  var inputs = form.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute('required') && inputs[i].value === '') {
      inputs[i].style.border = '1px solid red';
    }
  }
}