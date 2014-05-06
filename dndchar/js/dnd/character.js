var Character = Backbone.Model.extend({
  defaults: function() {
    return {
      name: 'Nameless',
      state: 'Creation Step #1'
    };
  },
  initialize: function() {
    this.set(this.defaults());
  }
});

var CharacterList = Backbone.Collection.extend({
  model: Character,
  localStorage: new Backbone.LocalStorage('dnd-characters')
});

var Characters = new CharacterList;

var CharacterListItemView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#character-list-item-template').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});