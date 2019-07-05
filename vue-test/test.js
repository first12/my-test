function debounce(fn, wait = 50) {
  // 通过闭包缓存一个定时器 id计算机远程连接原理
  let timer = null
  // 将 debounce 处理结果当作函数返回
  // 触发事件回调时执行这个返回函数
  debugger
  return function(...args) {
    // 如果已经设定过定时器就清空上一次的定时器
    if (timer) clearTimeout(timer)

    // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
    timer = setTimeout(() => {
      console.log(args);
      fn.apply(this, args)
  }, wait)
  }
}

// DEMO
// 执行 debounce 函数返回新函数
const betterFn = debounce(() => console.log('fn 防抖执行了'), 1000)
// 停止滑动 1 秒后执行函数 () => console.log('fn 防抖执行了')
document.addEventListener('scroll', betterFn(222))
