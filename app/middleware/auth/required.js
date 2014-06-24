module.exports = exports = function (req, res, next) {
  console.log(req.auth);

  if (req.auth && req.auth.user) {
    return next();
  }

  var error = {
    id: 'not_authorized',
    message: 'You are not authorized!',
    url: 'http://myapi/auth'
  };

  res.set('WWW-Authenticate', 'Basic realm="coinfigures"');
  res.json(401, error);
};
