# createStyleObject

一个css 提示方法

别名: `cso`

## Demo

```tsx
import {cso, CSSProperties, createStyleObject} from '@vill-v/broswer'

const App = () => {
  return <ul>
    <li style={cso({width: '100%'})}></li>
    <li style={createStyleObject({width: '100%'})}></li>
    <li style={{width: '100%'} as CSSProperties}></li>
  </ul>
}
```
