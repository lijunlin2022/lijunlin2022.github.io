# 父组件调用子组件方法

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