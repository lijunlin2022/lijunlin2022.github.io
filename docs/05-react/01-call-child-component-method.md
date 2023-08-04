# 父组件调用子组件方法

React 使用 Function Components 时，如果父组件要调用子组件的方法，则需要用到三个 Hooks:

- useRef
- forwardRef
- useImperativeHandle

用法如下：

```jsx
// highlight-next-line
import { useRef, forwardRef, useImperativeHandle } from 'react'

// highlight-next-line
const Child = forwardRef((props, ref) => {
  const printSomething = () =>{
    alert('alert from child function')
  }
  // highlight-next-line
  useImperativeHandle(ref, () => ({
    printSomething: printSomething
  }))

  return <div>Child Component</div>
})

const Parent = (props) => {
  // highlight-next-line
  const childRef = useRef()

  return (
    <div>
      {/* highlight-next-line */}
      <Child ref={childRef} />
      <button onClick={() => childRef.current.printSomething()}>Click</button>
    </div>
  )
}

export default Parent
```

下面是一个实时演示：

```jsx live
function Parent(props) {

  const Child = forwardRef((props, ref) => {
    const printSomething = () =>{
      alert('alert from child function')
    }
    useImperativeHandle(ref, () => ({
      printSomething: printSomething
    }))

    return <div>Child Component</div>
  })

  const childRef = useRef()

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.printSomething()}>Click</button>
    </div>
  )
}
```