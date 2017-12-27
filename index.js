var express = require('express');
var app = express();
app.set('port', process.env.PORT || 7777);
//跨域问题解决
app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

	if (req.method == 'OPTIONS') {
		//让options请求快速返回/
		res.send(200);
	} else {
		next();
	}
});
app.get('/login', function (req, res) {
	res.json({code:1,message: true});
})
app.listen(app.get('port'), function () {
	console.log('http://localhost:' + app.get('port'));
})