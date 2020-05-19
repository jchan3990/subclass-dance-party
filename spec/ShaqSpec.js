describe('shaq', function() {

  var shaq, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shaq = new Shaq(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shaq.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a class name called shaq', function () {
    expect('.')
  })

  it('should append shaq to body', function() {
    sinon.spy(shaq.$node, 'toggle');
    //shaq.step();
    expect(shaq.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shaq, 'step');
      expect(shaq.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shaq.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shaq.step.callCount).to.be.equal(2);
    });
  });
});
