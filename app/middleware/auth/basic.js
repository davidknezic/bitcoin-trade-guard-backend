module.exports = exports = function (options) {
    var users = options.users;

  // Example:
  // Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
  return function (req, res, next) {
    var header = req.get('Authorization');
    var parts = header.split(' ');

    if (parts[0] != 'Basic') {
      return next();
    }

    var buffer = new Buffer(parts[1], 'base64');
    var userPass = buffer.toString('utf8');

    var userPassArray = userPass.split(':');

    var options = {
      email: userPassArray[0],
      password: userPassArray[1]
    };

    // login attempt
    users.get(options, function (error, user) {
      if (error) next(error);

      req.auth = req.auth || {};
      req.auth.user = user;
    });
  };
};
