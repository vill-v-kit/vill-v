# safeAwait 

在使用 async await 语法糖时，拦截错误

适合在一些请求发生错误时，还是要执行后续方法的业务

## Demo
```ts
await safeAwait(Promise.reject())
await safeAwait(()=>Promise.reject())
```

## DTS
```ts

/**
 * 安全的await
 * 用于阻止await报错，影响后续流程
 * @param arg
 */
declare function safeAwait(arg: Promise<any>): Promise<any>;
declare function safeAwait(arg: () => Promise<any>): Promise<any>;

```
