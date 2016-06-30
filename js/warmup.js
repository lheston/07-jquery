//event handling practice
/*var h1 = document.querySelector('h1');
h1.addEventListener('click', function(event){
    console.log("You clicked on " + event.target);
});
*/

'use strict';
$(document).ready(function(){ 



//Add an event listener so that when the mouse enters ('mouseenter')
//the image, it's `src` changes to 'img/surprised.png'

var img = document.querySelector('img');
/*
img.addEventListener('mouseenter', function(){
    img.setAttribute('src', 'img/surprised.png');
});*/

//jquery

$('img').mouseenter(function(){
    $(this).attr('src','img/surprised.png')
})


//Extra: add an event listener so that when the mouse leaves ('mouseleave')
//the image, it's source changes back to `img/happy.png'


img.addEventListener('mouseleave', function(){
    img.setAttribute('src', 'img/happy.png');
});
//Add an event listener so that when the 'purple-button' is clicked,
//the 'big' and 'purple' classes are added to the 'instructions'
//paragraph in the header.

var purp = document.querySelector('#purple-button');
var inst = document.querySelector('.instructions')

purp.addEventListener('click', function(){
    inst.classList.add('big', 'purple');
});


//Add an event listener so that when the 'content-button' is clicked,
//the text inside the <input> element is added as a NEW paragraph to the
//'#content' section
//    TIP: You can get what value is typed into the <input> but accessing
//         the elements '.value' property

var contentBtn = document.querySelector('#content-button');
contentBtn.addEventListener('click', function(){
    var text = document.querySelector('input').value;
    console.log(text);
    var p = document.createElement('p');
    p.textContent = text;
    document.querySelector('#content').appendChild(p);
});

});