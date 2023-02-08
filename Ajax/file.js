
// // First part

// var p = document.querySelector('.loko');
// var randomIP = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

// var xhr = new XMLHttpRequest();
// function getDataXML() {
//   xhr.open('GET', 'http://www.geoplugin.net/xml.gp?ip=109.93.93.53', true)
//   xhr.onload = function() {
//     if (xhr.status === 200) {
//        console.log(xhr.responseXML);
//        var country = xhr.responseXML.getElementsByTagName("geoplugin_countryName")[0].innerHTML 
//        p.textContent = country;
//        console.log(country);
//       // xhr.responseText.forEach(element => {
//       //   console.log(element);
//       // });
      

//     }
//     // var xmlDoc = xhr.responseText;
//     // var country = xmlDoc.getElementsByTagName("geoplugin_countryName")
//     // p.textContent = country;
//   }
//   xhr.send('');
// }

// var xmlDocc = getDataXML();
// var t = xmlDocc;
// console.log(t);
// console.log(randomIP);

// Extra part

var btn = document.querySelector('.btn');
var p = document.querySelector('.loko');
var ip = document.querySelector('.ip');

var randomIP = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

var xhr = new XMLHttpRequest();

function getXML() {
xhr.open('GET', 'http://www.geoplugin.net/xml.gp?ip='+ randomIP, true)
xhr.onload = function() {
  if (xhr.status === 200) {

     console.log(xhr.responseXML);

    var xmlDoc = xhr.responseXML
    var country = xmlDoc.querySelector('geoplugin_countryName').textContent;

     p.textContent = country;
     console.log(country);

     ip.value = randomIP;
     randomIP = '';
     
     }        
 }
  
xhr.send('');

}

btn.addEventListener('click', getXML)








