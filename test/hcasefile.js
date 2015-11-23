var HCase = require('hcase');
HCase.baseUrl("http://127.0.0.1/example/");

// 登录接口
HCase.add('userLogin', function() {
	var crypto = require('crypto');
	var password = "123";
	password = crypto.createHash('md5').
	update(password).digest('hex');
	var params = {
		method: "POST",
		url: "/user/login",
		header: {

		},
		body: {
			"userName": 'ziv',
			"password": password
		}
	};
	return params;
});


HCase.add('userRegister', function() {
	var params = {
		method: "POST",
		url: "/user/register",
		body: {
			"email": "wewoor@foxmail.com",
			"password": "123456"
		}
	};
	return params;
});