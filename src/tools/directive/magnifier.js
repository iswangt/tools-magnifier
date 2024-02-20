const magnifier = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {
    const getOffsetTop = (el) => {  
      let offsetTop = el.offsetTop;  
      let parent = el.offsetParent;  
      while (parent) {  
        offsetTop += parent.offsetTop;  
        parent = parent.offsetParent;  
      }
      return offsetTop;  
    }
    const getOffsetLeft = (el) => {  
      let offsetLeft = el.offsetLeft;  
      let parent = el.offsetParent;  
      while (parent) {  
        offsetLeft += parent.offsetLeft;  
        parent = parent.offsetParent;  
      }  
      return offsetLeft;  
    }
    let params =  Object.assign({
      magnifierSize: '100px',
      borderColor: '#e1d5d5',
      circular: false,
      scale: 2
    }, binding.value)
    el.style.position = 'relative'
    el.style.cursor = 'none'
    let divNode = document.createElement('div')
    divNode.style.cssText = `
      width: ${params.magnifierSize};
      height: ${params.magnifierSize};
      position: absolute;
      top: 0px;
      left: 0px;
      display: none;
      overflow: hidden;
      border: 1px solid ${params.borderColor};
      ${params.circular ? 'border-radius: 50%;' : ''}
    `
    let mirrorNode = el.cloneNode(true)
    mirrorNode.style.cssText =  `
      position: absolute;
      top: 0px;
      left: 0px;
      margin: 0px;
      padding: 0px;
      transform: scale(${params.scale});
      transform-origin: 0% 0%;
    `
    divNode.appendChild(mirrorNode)
    el.appendChild(divNode)
    // 元素移动
    el.onmousemove = ev => {
      ev.preventDefault()
      // 放大区域计算
      divNode.style.display = 'block'
      // 计算鼠标距离当前div的偏移量
      let left = ev.pageX - getOffsetLeft(el) - parseInt(params.magnifierSize) / 2
      let top = ev.pageY - getOffsetTop(el) - parseInt(params.magnifierSize) / 2
      divNode.style.top = top + 'px'
      divNode.style.left = left + 'px'
      // 创建的缩放元素计算
      mirrorNode.style.top = parseInt(params.magnifierSize) / 2 - (parseInt(divNode.style.top) + parseInt(params.magnifierSize) / 2) * params.scale + 'px'
      mirrorNode.style.left = parseInt(params.magnifierSize) / 2 - (parseInt(divNode.style.left) + parseInt(params.magnifierSize) / 2) * params.scale + 'px'
    }
    el.onmouseout = ev => {
      // console.log('onmouseup', ev)
      divNode.style.display = 'none'
    }
  },
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}

export {
  magnifier
}
export default magnifier