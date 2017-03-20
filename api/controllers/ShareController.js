/**
 * ShareController
 *
 * @description :: Server-side logic for managing Shares
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var _ = require('lodash');
var uuid = require('node-uuid');

var db = require('../../data/database');

var ShareController = {

  postlockCommand: function (req, res) {
    var vin = req.params.vin;
    var reqBody = req.body;
    var target = reqBody.target;
    var action = reqBody.action;

    if (target !== 'doors_hatch') {
    	res.send(400);
    }
    if (action !== 'open' && action !== 'close') {
    	res.send(400);
    }

    var lockStatus = (action === 'open') ? 0 : 1;
    var criteria = {
      vin: vin
    };
  	var values = {
  		lockStatus: lockStatus,
  	};

  	var commandId = uuid.v4();
  	var resBody = {
  		commandId: commandId
  	};

    Car.update(criteria, values).exec(function(err, updated){
      res.created(resBody);
    });
  },

  getLockStatus: function (req, res) {
    var vin = req.params.vin;
    var criteria = {
      vin: vin
    };
    Car.findOne(criteria).exec(function(err, car){
  		delete car.id;
  		delete car.vin;
  		delete car.protectionStatus;
      res.json(car);
    });
  },

  getDrivers: function (req, res) {
    var vin = req.params.vin;
    var criteria = {
      vin: vin
    };
    Driver.find(criteria).exec(function(err, drivers){
    	_.each(drivers, function(element, index) {
    		delete element.id;
    		delete element.vin;
    	});
    	var resBody = {
    		vin: vin,
    		carDrivers: drivers
    	};
      res.json(resBody);
    });
  },

  getDriver: function (req, res) {
    var vin = req.params.vin;
    var userId = req.params.userId;
    var criteria = {
      vin: vin,
      userId: userId
    };
    Driver.findOne(criteria).exec(function(err, driver){
  		delete driver.id;
      res.json(driver);
    });
  },

  grantPermission: function (req, res) {
    var vin = req.params.vin;
    var userId = req.params.userId;
    var criteria = {
      vin: vin,
      userId: userId
    };
  	var values = {
  		carPermission: true,
  	};
    Driver.update(criteria, values).exec(function(err, updated){
      res.send(204);
    });
  },

  revokePermission: function (req, res) {
    var vin = req.params.vin;
    var userId = req.params.userId;
    var criteria = {
      vin: vin,
      userId: userId
    };
  	var values = {
  		carPermission: false,
  	};
    Driver.update(criteria, values).exec(function(err, updated){
      res.send(204);
    });
  },

};
module.exports = ShareController;
