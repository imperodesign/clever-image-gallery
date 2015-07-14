'use strict';

// Dependencies
const router = require('express').Router();

// Require CleverCore
const CleverCore = require('clever-core');

// Load config
const config = CleverCore.loadConfig();

// Load controller
const galleriesAdminCtrl = require('../controllers/galleries-admin');

// Exports
module.exports = function(ImageGalleriesPackage, app, auth, database, storage) {

  // Show registration form
  router.get('/', auth.requiresAdmin, galleriesAdminCtrl.showGalleries.bind(null, ImageGalleriesPackage));

  router.get('/create', auth.requiresAdmin, galleriesAdminCtrl.createGallery.bind(null, ImageGalleriesPackage));

  router.get('/:id', auth.requiresAdmin, galleriesAdminCtrl.showGallery.bind(null, ImageGalleriesPackage));

  router.get('/:id/edit', auth.requiresAdmin, galleriesAdminCtrl.editGallery.bind(null, ImageGalleriesPackage));

  return new CleverCore.CleverRoute(router, 'admin', false);

};
