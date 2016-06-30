'use strict';

/* code goes here */

$('#myform').submit(function(event) {
   
   /* do whatever we want with the form's data */
   var searchTerm = $('#movieTitle').val();

   var url = 'http://omdbapi.com/?'+searchTerm;

   console.log(url);
   $.get(url);
   //don't submit as usual!
   event.preventDefault();    //current standard
   return false;              //older browsers
});