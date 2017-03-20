var fs = require('fs');
var async = require('async');

var databse = {
	init: function (callback) {

	  const carJsonFile = __dirname + '/fixtures/car.json';
	  const driverJsonFile = __dirname + '/fixtures/driver.json';

	  console.log('__dirname=', __dirname);
	  async.waterfall([
	    function(cb) {
	      // car
	      var carJson = JSON.parse(fs.readFileSync(carJsonFile));
	      console.log('car json = ', carJson);
	      Car.create(carJson).exec(function(err, created) {
	        console.log('car data = ', JSON.stringify(created));
	        cb(err);
	      });
	    },

	    function(cb) {
	      // driver
	      var driverJson = JSON.parse(fs.readFileSync(driverJsonFile));
	      console.log('car json = ', driverJson);
	      Driver.create(driverJson).exec(function(err, created) {
	        console.log('driver data = ', JSON.stringify(created));
	        cb(err);
	      });
	    }

	  ], function(err) {
	    if (err) {
	      console.log('err=', err);
	    }
		  return callback();
	  });
	}

};
module.exports = databse;

