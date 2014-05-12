var Character = Backbone.Model.extend({
  defaults: function() {
    return {
      name: 'Nameless',
      state: 'Creation Step #1',
      order: CharacterList.nextOrder()
    };
  }
});

var CharacterList = Backbone.Collection.extend({
  model: Character,
  localStorage: new Backbone.LocalStorage('dnd-characters'),
  nextOrder: function() {
    if (!this.length) return 1;
    return this.last().get('order') + 1;
  }
});

var Characters = new CharacterList;

var CharacterListItemView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#character-list-item-template').html()),
  events: {
    'dblclick': 'process'
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  process: function() {
    alert(this.model.get('state'));
  },
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  }
});

var CharacterListView = Backbone.View.extend({
  tagName: 'ul',
  template: _.template($('#character-list-template').html()),
  render: function() {

  }
});