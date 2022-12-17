// function selrem() {

var sel = document.querySelectorAll('ul')[1].children;

for (i=0; i<sel.length; i++) {

  if (sel[i].classList.contains('.active')) {
    console.log(sel);
  }
console.log(sel);
}

// return sel;

// }

// var q = selrem();
// console.log(q);