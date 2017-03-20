/**
 * Car.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var moment = require("moment");

module.exports = {

  attributes: {
  	vin: 'string',
  	lockStatus: 'integer',
  	protectionStatus: 'boolean',
    timeStamp: {
      type: 'string',
      defaultsTo: function(){
        return moment().unix() * 1000;
      }
    }
  }
};
