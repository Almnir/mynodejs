var multiparty = require('multiparty')
var util = require('util')

function show(req, res) {
	res.render('upload');
}

function load(req, res) {
	var form = new multiparty.Form();
	form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
}

exports.show = show;
exports.load = load;