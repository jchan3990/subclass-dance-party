var Durant = function(top, left, timeBetweenSteps) {
  Dancer.call(this, arguments);
  this.$node = $('<span class="dancer"><img class="durant" src="https://media.giphy.com/media/PhTcmyWsU6l2SFbN9x/giphy.gif"></img></span>');
  this.setPosition(top,left);
  this.step(timeBetweenSteps);
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Durant.prototype = Object.create(Dancer.prototype);
  Durant.prototype.constructor = Durant;


  Durant.prototype.step = function(timeBetweenSteps) {
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this, timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };

