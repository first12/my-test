# TypeScript

1. typescript 是 微软开发的JavaScript的超集。(当前任何JavaScript都是合法的TypeScript代码)

2.TypeScript为JavaScript提供了类型系统和Es6语法支持。

3.TS有自己的编译工具，写好的TS代码最终会通过编译器编译成JavaScript代码。


## ts配置

```
tsc --init
```

设置配置项:
 1.target: 讲ts代码转换成哪个版本的js代码。 es5， es3.
 2.module: 将ts代码转换成js代码之后。使用模块化标准是什么
 3.outDir: 将ts转成js后，代码生成存放的文件路径
 4.rootDir: 需要将哪个目录的ts代码进行转化。ts存放路径
 5.strict: 是否将ts转换为严格模式的 js 代码

 使用配置文件：
 ```
 tsc -p ./tsconfig.json
 ```
 