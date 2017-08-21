 var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.showall('burgers', function(res) {
      cb(res);
    });
  },

  create: function(val, cb) {
    orm.create('burgers', val, function(res) {
      cb(res);
    });
  },

  update: function(val, cb) {
    orm.update('burgers', val, function(res) {
      cb(res);
    });
  },

  delete: function(cb) {
    orm.empty('burgers', function(res) {
      cb(res);
    });
  }
};

module.exports = burger;