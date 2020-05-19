var Shaq = function(top, left, timeBetweenSteps) {
  Dancer.call(this, arguments);
  this.$node = $('<span class="dancer"><img class="shaq" src="https://media.giphy.com/media/As7Up7Llu1cXbxl5op/giphy.gif"></img></span>');
  this.setPosition(top,left);
  // this.step(timeBetweenSteps);
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Shaq.prototype = Object.create(Dancer.prototype);
  Shaq.prototype.constructor = Shaq;


  // Shaq.prototype.step = function(timeBetweenSteps) {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   //Dancer.prototype.step.call(this, timeBetweenSteps);
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   this.$node.toggle();
  // };

