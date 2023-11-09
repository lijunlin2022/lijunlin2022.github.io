---
tags: ['IntersectionObserver']
---

# IntersectionObserver 无限滚动

大家好，我俊霖。

日常开发中，我们常常需要实现一个无限滚动的效果。如下所示：

![](./img/01-intersection-observer-pullup.gif)

## IntersectionObserver

底部的元素出现到视口内部时，就可以触发 `pullUp` 函数。

## 封装 ScrollView

```jsx
function ScrollView({
  children,
  pullUp,
  bottomStatus,
  bottomStyle,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (bottomStatus === 'LOADING') {
          return;
        }
        if (entry.isIntersecting && typeof pullUp === 'function') {
          pullUp();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        thresolds: [0],
      },
    )
    
    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    }
  }, [pullUp]);

  return (
    <>
      <div>{children}</div>
      <div style={bottomStyle}>
        {bottomStatus === 'LOADING' && <LoadingView />}
        {bottomStatus === 'ERROR' && <ErrorView />}
        {bottomStatus === 'NO_MORE' && <NoMoreView />}
        {bottomStatus === 'HAS_MORE' && <div ref={bottomRef}></div>}
      </div>
    </>
  )
}
```
