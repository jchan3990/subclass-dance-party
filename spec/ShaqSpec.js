describe('shaq', function() {

  var shaq, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    shaq = new Shaq(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shaq.$node).to.be.an.instanceof(jQuery);
  });

  it('shaq.setPosition should be a function', function () {
    expect(typeof shaq.setPosition).to.equal('function')
  })

  it(`should have a 'setPosition' method that is inherited from dancer`, function() {
    expect(shaq.setPosition).to.be.a('function');
  });

});

describe('lebron', function() {

  var lebron, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    lebron = new Lebron(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(lebron.$node).to.be.an.instanceof(jQuery);
  });

  it('shaq.setPosition should be a function', function () {
    expect(typeof lebron.setPosition).to.equal('function')
  })

  it(`should have a 'setPosition' method that is inherited from dancer`, function() {
    expect(lebron.setPosition).to.be.a('function');
  });

});

describe('durant', function() {

  var durant, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    durant = new Durant(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(durant.$node).to.be.an.instanceof(jQuery);
  });

  it('shaq.setPosition should be a function', function () {
    expect(typeof durant.setPosition).to.equal('function')
  })

  it(`should have a 'setPosition' method that is inherited from dancer`, function() {
    expect(durant.setPosition).to.be.a('function');
  });

});