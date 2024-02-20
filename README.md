### 安装
```bash
$ npm i tools-magnifier -save  
$ yarn add tools-magnifier
```

![加载失败](./magnifier.png)

### 使用 自定义放大镜指令（支持pc）
#### 全局部分导入  
```bash
import { magnifier } from 'tools-magnifier'
app.directive('mag', magnifier)
```
#### 组件中使用：
```bash
<div v-mag></div>
```
#### 组件内部分导入  
```bash
import { magnifier } from 'tools-magnifier'
const vMag = magnifier
```
#### 组件中使用：
```bash
<div v-mag="params"></div>
```

### 配置参数
```bash
params: {
  magnifierSize: '100px', // 放大镜大小（单位px）
  borderColor: '#e1d5d5', // 放大镜边框颜色
  circular: false, // 放大镜是否设置为圆
  scale: 2 // 放大镜放大倍数
}
注：指令限于使用到块级元素上
```
