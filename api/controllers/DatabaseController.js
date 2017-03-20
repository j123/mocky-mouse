/**
 * DatabaseController
 *
 * @description :: Server-side logic for managing Databases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');
var async = require('async');

const carJsonFile = require('../../data/fixtures/car.json');
const driverJsonFile = require('../../data/fixtures/driver.json');

var DatabaseController = {
	init: function (req, res) {
	  async.waterfall([
	    function(cb) {
	      // car
        console.log('Car JSON = ', JSON.stringify(carJsonFile));
	      Car.create(carJsonFile).exec(function(err, created) {
	        console.log('Car data = ', JSON.stringify(created));
	        cb(err);
	      });
	    },

	    function(cb) {
	      // driver
        console.log('Driver JSON = ', JSON.stringify(driverJsonFile));
	      Driver.create(driverJsonFile).exec(function(err, created) {
	        console.log('Driver data = ', JSON.stringify(created));
	        cb(err);
	      });
	    }

	  ], function(err) {
	    if (err) {
	      console.log('err=', err);
	    }
		  res.send(204);
	  });

	},

  createCar: function (req, res) {
    Car.create(req.body).exec(function(err, created){
      res.created(created);
    });
  },

  createDriver: function (req, res) {
    var vin = req.params.vin;
    var reqBody = req.body;
  	var values = {
  		vin: vin,
  		userId: reqBody.userId,
  		userName: reqBody.userName,
  		userRole: reqBody.userRole,
  		carPermission: reqBody.carPermission,
  		avatarUrl: reqBody.avatarUrl
  	};
    Driver.create(values).exec(function(err, created){
      res.created(created);
    });
  },

};
module.exports = DatabaseController;
