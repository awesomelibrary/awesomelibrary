module.exports = function(app) {
  
  var fs = require('fs')
    , path = require('path')
    , less = require('less');
  
  return  function(req, res) {
    var assetPath = path.join(app.get('root'), req.params[0]);
    fs.stat(assetPath, function(err, stats) {
      if (!err && stats.isFile()) {
        if (/\.(less)$/i.test(assetPath)) {
          res.type('css');
          fs.readFile(assetPath, "utf8", function(err, data) {
            
            var parser = new(less.Parser)({
                paths: [path.dirname(assetPath)]
            });
            
            parser.parse(data, function(err, tree) {
              if (err) {
                console.log(err);
                res.send(500);
              } else {
                res.send(tree.toCSS());
              }
            });
          });
        } else {
          res.sendfile(assetPath);
        }
      } else {
        res.send(404);
      };
    });
  };
};