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
      Math.floor($("body").height() * Math.random()),
      Math.floor($("body").width() * Math.random()),
      1000
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
      5000
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
      5000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  // Create empty div container
  $('body').append("<div class='lineUpDancers'></div>")
  // Place container in the middle of the body

  //Line Up
  $('.lineUp').on('click', function(event) {
    // append them into the div container
    $('.lineUpDancers').append($('.lebron'), $('.durant'), $('.shaq'));
  });

  $('body').append("<div class='verticalLineUp'></div>")
  //Line Up Vertically
  $('.lineUpV').on('click', function(event) {
    // append them into the div container
    $('.verticalLineUp').append($('.lebron'), $('.durant'), $('.shaq'));
  });

  $(".lebron").on('click', function(event) {
    $(".lebron").animate({left: '+=20px'}, "slow")
  });

  // Create div in center of body
  $('body').append("<div class='focus'></div>");
  $('body').append("<div class ='leftBox'></div>");
  $('body').append("<div class ='rightBox'></div>");

  $(document).on('click', '.shaq', function() {
    $('.leftBox').append($('.shaq'));
    $('.focus').append($(this));
    //append all durant into right box
    $('.rightBox').append($('.durant'));
    //append all lebron into left box
    $('.leftBox').append($('.lebron'));
  })

  $(document).on('click', '.lebron', function() {
    $('.rightBox').append($('.lebron'));
    $('.focus').append($(this));
    //append all durant into right box
    $('.rightBox').append($('.durant'));
    //append all lebron into left box
    $('.leftBox').append($('.shaq'));
  })

  $(document).on('click', '.durant', function() {
    $('.rightBox').append($('.durant'));
    $('.rightBox').append($('.durant'));
    $('.focus').append($(this));
    //append all durant into right box
    $('.rightBox').append($('.lebron'));
    //append all lebron into left box
    $('.leftBox').append($('.shaq'));
  })


});

// //.rotateimg180 {
//   -webkit-transform:rotate(180deg);
//   -moz-transform: rotate(180deg);
//   -ms-transform: rotate(180deg);
//   -o-transform: rotate(180deg);
//   transform: rotate(180deg);
// }