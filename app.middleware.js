module.exports = function myMiddle(req, res, next) {
    console.log('Server is hit');
    console.log("url " + req.url);

    next();
  }
