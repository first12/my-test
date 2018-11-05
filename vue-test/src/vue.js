
class Vue {
  constructor (options = {}) {
    this.$el = options.el;
    this.$data = options.data;
    this.$methods = options.methods;

    if (this.$el) {
      //如果指定了 el ，对el 解析
      new Compile(this.$el, this);
    }
  }
}