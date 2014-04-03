'use strict';

var mongoose = require('mongoose');

var Employee = mongoose.Schema({

  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization',
    required: true
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: /.+@.+\..+/
  },

  passwdSha256: {
    type: String,
    required: true
  },

  firstName: {
    type: String,
    required: true,
    trim: true
  },

  secondName: {
    type: String,
    trim: true
  },

  lastName: {
    type: String,
    required: true,
    trim: true
  }

});

module.exports = mongoose.model(Employee, 'Employee');