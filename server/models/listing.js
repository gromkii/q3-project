var bookshelf = require('../db/bookshelf');

require('./user');

var Listing = bookshelf.Model.extend({
  tableName:'listings',
  user: function(){
    return this.belongsTo('User')
  }
});

module.export = bookshelf.model('Listing', Listing);
