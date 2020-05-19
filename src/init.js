$(document).ready(function() {
  window.dancers = [];
  //shaq
  $('.addShaq').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var Shaq = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new Shaq(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      2000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

    //lebron
  $('.addLebron').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var Lebron = window[dancerMakerFunctionName];
    var dancer = new Lebron(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      2000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  //durant
   $('.addDurant').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var Durant = window[dancerMakerFunctionName];
    var dancer = new Durant(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      2000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  // Create empty div container
  // Place container in the middle of the body

  //Line Up
  $('.lineUp').on('click', function(event) {

    // Loop through the window[dancers] array
    // Store them into the div container

  });


});

