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
      // console.log(fragment);
      this.compile(fragment)
      this.el.appendChild(fragment)
      // console.log(fragment)
    }
  }
  // 在内存中编译文档碎片
  compile(fragment){
    // console.log(typeof fragment)
    let childNodes = fragment.childNodes;
    childNodes.forEach((node) => {
      // console.log(node.nodeType)
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
  compileElement(node){
    let attributes = node.attributes;
    this.toArray(attributes).forEach(attr => {
      let attrName = attr.name;
      let attrVal = attr.value;
      if (this.isDirective(attrName)) {
        // console.log(attrName)
        let type = attrName.slice(2)
        // console.log(type)
        // if (type == 'text') {
        //   node.textContent = this.vm.$data[attrVal];
        // }
        // if (type === 'html') {
        //   node.innerHTML = this.vm.$data[attrVal];
        // }
        // // model
        // if (type === 'model') {
        //   node.value = this.vm.$data[attrVal];
        // }
        if (this.isEventDirective(type)) {
          console.log('12122')
          // let event = type.split(':')[1];
          // node.addEventListener(event, this.vm.$methods[attrVal].bind(this.vm))
          compileUtil['eventHandle'](node, this.vm, type, attrVal)
        } else {
          compileUtil[type] && compileUtil[type](node, this.vm, attrVal)
        }
      }
    })
  }
  // 解析文本节点
  compileText(node){
   
    let txt = node.textContent;
    let reg = /\{\{(.+)\}\}/;
    if (reg.test(txt)) {
      let expstr = RegExp.$1;
      let content = this.vm.$data[expstr];
      node.textContent = txt.replace(reg, content);
    }
  }
  // dom转fragment
  node2fragment(node){
    let fragement = document.createDocumentFragment();
    let childNode = node.childNodes;
    // console.log(childNode)
    this.toArray(childNode).forEach(node => {
      // console.log(node)
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
  isDirective(attr) {
    return attr.startsWith('v-');
  }
  isEventDirective(attr) {
    return attr.split(':')[0] === 'on';
  }


}
let compileUtil = {
  text(node, vm, attrVal) {
    node.textContent = vm.$data[attrVal];
  },
  html(node, vm, attrVal) {
    node.innerHTML = vm.$data[attrVal];
  },
  model(node, vm, attrVal) {
    node.value = vm.$data[attrVal];
  },
  eventHandle(node, vm, type, attrVal){
    let event = type.split(':')[1];
    let fn = vm.$methods && vm.$methods[attrVal];
    if (event && fn) {
      node.addEventListener(event, fn.bind(vm))
    }
  }
}