new Vue ({
  el: '#container',
  data: {
    todos: [],
    error: '',
    newName: '',
    newQuantity: '',
    filter: 'all',
  },
  methods: {
    add: function() {
      if (this.newName) {
        (this.newQuantity === '') ? this.newQuantity = 1 : this.newQuantity;
        this.todos.push({
          name: this.newName,
          quantity: this.newQuantity,
          completed: false,
        });
        this.newQuantity = this.newName = this.error = '';
      }
      else {
        this.error = 'Il vous manque votre article !'
      }
    },
    deleteTodo : function(todo) {
      this.todos.splice(this.todos.indexOf(todo),1)
    },
    deleteAll : function() {
      this.todos = [];
    },
    toggle: function(todo) {
      todo.completed = !todo.completed;
    },
  },
  computed: {
    allDone: {
      get () {
        return this.countStart === 0;
      },
      set (value) {
        if (value == true) {
          this.todos.map(todo => todo.completed = true)
        }
        else {
          this.todos.map(todo => todo.completed = false)
        }
      }
    },
    countStart () {
      return this.todos.filter(todo => !todo.completed).length;
    },
    doneTodo () {
      if (this.filter === 'done') {
        return this.todos.filter(todo => todo.completed)
      }
      else if (this.filter === 'todo') {
        return this.todos.filter(todo => !todo.completed)
      }
      return this.todos
    }
  }
})
