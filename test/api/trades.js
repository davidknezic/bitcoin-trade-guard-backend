var Observable = require('./fixtures/observable');
var Application = require('./fixtures/app');

describe('GET /trades', function () {
  var observable;
  var app;

  before(function () {
    observable = Observable();
    app = Application(observable);
  });

  it('should', function (done) {
    observable.on('trades:list', function (options, callback, context) {
      callback.call(context, null, []);
    });

    request(app)
      .get('/trades')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
