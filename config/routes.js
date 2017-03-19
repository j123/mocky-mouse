/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': {
  //   view: 'homepage'
  // }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  // Share
  'GET /cars/:vin/lock': {
    controller: 'ShareController',
    action: 'getLockStatus'
  },
  'POST /cars/:vin/lock/action': {
    controller: 'ShareController',
    action: 'postlockCommand'
  },
  'GET /cars/:vin/drivers': {
    controller: 'ShareController',
    action: 'getDrivers'
  },
  'GET /cars/:vin/drivers/:userId': {
    controller: 'ShareController',
    action: 'getDriver'
  },
  'POST /cars/:vin/drivers/:userId/permission': {
    controller: 'ShareController',
    action: 'grantPermission'
  },
  'DELETE /cars/:vin/drivers/:userId/permission': {
    controller: 'ShareController',
    action: 'revokePermission'
  },
  'GET /cars/:vin/protection': {
    controller: 'ShareController',
    action: 'isProtect'
  },
  'POST /cars/:vin/protection/action': {
    controller: 'ShareController',
    action: 'postProtectCommand'
  },


  // Care
  'GET /cars/:vin/mil': {
    controller: 'CareController',
    action: 'getMilStatus'
  },
  'GET /cars/:vin/charging': {
    controller: 'CareController',
    action: 'getChargingStatus'
  },
  'GET /cars/:vin/battery': {
    controller: 'CareController',
    action: 'getBatteryStatus'
  },
  'GET /cars/:vin/tyrePressure': {
    controller: 'CareController',
    action: 'getTyrePressureStatus'
  },
  'GET /cars/:vin/lamp': {
    controller: 'CareController',
    action: 'getLampStatus'
  },
  'GET /cars/:vin/engineOil': {
    controller: 'CareController',
    action: 'getEngineOilStatus'
  },
  'GET /cars/:vin/fuel': {
    controller: 'CareController',
    action: 'getFuelStatus'
  },
  'POST /cars/:vin/charging/setting/action': {
    controller: 'ShareController',
    action: 'postChargingSetting'
  },
  'POST /cars/:vin/charging/schedule/action': {
    controller: 'ShareController',
    action: 'postChargingSchedule'
  },


  // Notification
  'POST /notification/action': {
    controller: 'NotificationController',
    action: 'postNotification'
  }

};
