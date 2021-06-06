/**
 * 改写自hutool<br/>
 * 注：
 * <ul>
 *   <li>
 *     <p>由于js为动态语言</p>
 *     <p>js tree-shaking基于es module</p>
 *     <p>无法检测本质上是更改原型链的js class中的dead code</p>
 *     <p>具体参看此条rollup的issues {@link https://github.com/rollup/rollup/issues/349} </p>
 *     <p>请不要在更改代码时，增强项目中使用不到的功能</p>
 *   </li>
 *   <li>改写自JAVA工具库hutool，所以依旧为class风格{@link https://github.com/dromara/hutool}</li>
 *   <li>如想copy一份改写为公用工具库，请基于es module顶层导出，以获得良好的tree-shaking</li>
 * </ul>
 * @author WhiteKite
 */
export * from './StrUtil'
export { default as IdCardUtil } from './IdCardUtil'
export { default as MobileUtil } from './MobileUtil'
export { default as Validator } from './Validator'
export { default as BooleanUtil } from './BooleanUtil'
export { default as Base64Util } from './Base64Util'
