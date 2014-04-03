'use strict';

var mongoose = require('mongoose');

var Organization = mongoose.Schema({

  title: {
    type: String,
    required: true,
    trim: true
  },

  admins: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }]

});

module.exports = mongoose.model(Organization, 'Organization');