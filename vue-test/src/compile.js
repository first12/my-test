// 负责解析模板

class Compile {
  constructor (el, vm) {
    // el:
    // vm: vm
    this.el = typeof el === 'string' ? document.querySelector(el) : el;
    this.vm = vm;
    // 编译
    if (this.el) {
      //把 el 中的所有子节点放到内存中。 fragment
      let fragment = this.node2fragment(this.el);
      // 在内存中编译 fragment， 把fragment一次性放入dom
      console.log(fragment);
      this.compile(fragment)

    }
  }
  // 在内存中编译文档碎片
  compile(fragment){
    console.log(typeof fragment)
    let childNodes = fragment.childNodes;
    childNodes.forEach((node) => {
      console.log(node.nodeType)
      if (this.isElementNode(node)) {
        // 元素节点
        this.compileElement(node);
      }
      if (this.isTextNode(node)) {
        // 文本节点
        this.compileText(node);
      }
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    })
  }
  //解析元素节点
  compileElement(){}
  // 解析文本节点
  compileText(){}
  // dom转fragment
  node2fragment(node){
    let fragement = document.createDocumentFragment();
    let childNode = node.childNodes;
    console.log(childNode)
    this.toArray(childNode).forEach(node => {
      console.log(node)
      fragement.appendChild(node);
    })
    return fragement;
  }

  // 转数组
  toArray(objArr) {
    return [].slice.call(objArr);
  }
  // 判断元素节点
  isElementNode(node) {
    // nodeType ： 节点类型： 1：元素节点，  3： 文本节点
    return node.nodeType === 1;
  }
  isTextNode(node) {
    // nodeType ： 节点类型： 1：元素节点，  3： 文本节点
    return node.nodeType === 3;
  }
}