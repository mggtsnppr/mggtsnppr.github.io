var App = Backbone.Model.extend({

});

var AppRouter = Backbone.Router.extend({
  initialize: function(params) {
    this.model = new App();
  },
  routes: {
    "": 'charList',
    "character/add": 'add',
    "character/remove/:id": 'remove',
    "character/:id": 'character'
  },
  charList: function() {
    console.log('charlist');
  },
  character: function(id) {
    console.log('character #' + id);
  },
  add: function() {
    console.log('add character');
  },
  remove: function(id) {
    console.log('remove character #' + id);
  }
});