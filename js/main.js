//alert('external js')
/*
var doc = document.getElementsByTagName('p').innerHTML="ghf hfhfh uufh";
console.log(doc[3])

var say = document.getElementById('shoe');
//say.innerHTML  = "hj nmjk nmj gfv";
console.log(say)

var go = document.getElementsByClassName('card-title');
go.innerHTML = "sdjkdsjkj";
console.log(go[5])

var got =document.querySelectorAll('.card-body p')
console.log(got[0])

var get =document.querySelector('.card-body p').style.backgroundColor = "red";
console.log(get)

console.log(sel.getAttribute('src'));
var cop = "u";
var cop = "x";
 
 setTimeout(function() {
    let sel = document.querySelector('#sel img');
sel.setAttribute('src', 'image/living2.jpg')
 }, 2000);
*/
var newDiv = document.createElement("p");
var textp = document.createTextNode("This is a text created with js");
newDiv.appendChild(textp);
var parentdiv = document.getElementById('parentdiv');
var childbefore = document.querySelector('#parentdiv p');
//parentdiv.appendChild(newDiv);
//parentdiv.insertBefore(newDiv,childbefore);
//parentdiv.replaceChild(newDiv, childbefore)
parentdiv.removeChild(childbefore);
