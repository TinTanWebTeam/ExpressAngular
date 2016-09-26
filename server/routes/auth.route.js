const express = require('express');

let authRoute = express.Router();

authRoute.get('/',function (req,res) {
	res.end('ok');
});

module.exports = authRoute;