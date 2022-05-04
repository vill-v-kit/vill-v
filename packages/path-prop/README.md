# @vill-v/path-prop

neta了崩坏3 往世乐土的英杰维尔薇

![npm (scoped)](https://img.shields.io/npm/v/@vill-v/path-prop?style=flat-square)

**一个基于路径字符串对对象进行操作的工具**

_只是个人项目，整体较为随便，作为开发途中的经验总结，如有相似的需求，推荐copy或阅读源码，不建议将该包在实际项目中使用_

**如有幸被实际使用在项目内，不胜荣幸**

```ts

const obj = {test: [{test1: 'test2'}]}

getByPath(obj, 'test[0].test1')
// -> test2

const obj1 = {test: [{test1: 'test2'}]}

setByPath(obj1, 'test[0].test1', 'test3')
// obj -> {test: [{test1: 'test3'}]}

const obj2 = {test: [{test1: 'test2'}]}

delByPath(obj2, 'test[0]')

// obj -> {test: []}

const obj3 = {test: [{test1: 'test2'}]}

hasByPath(obj3, 'test[0].test1')
// -> true
```
