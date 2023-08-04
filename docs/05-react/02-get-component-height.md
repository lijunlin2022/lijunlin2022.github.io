# 获取组件高度

如果有一个列表，列表中有多个 item，且 item 还会在上拉时继续变多，并且我们需要获取每一个 item 的高度，可以使用 useRef 和 useCallback 钩子函数来实现。

useRef 可以创建一个 ref，用于获取 DOM 元素。useCallback 可以缓存一个函数，避免在每次渲染时都创建新的函数。这样，我们就可以在 DOM 更新后立即获取每个 item 的高度。

下面是一个示例代码：


```jsx
import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';

function MyComponent() {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`));
  const [heights, setHeights] = useState({});
  const itemRefs = useRef([]);

  const handleItemRef = useCallback((node, index) => {
    if (node !== null) {
      itemRefs.current[index] = node;
    }
  }, []);

  useLayoutEffect(() => {
    const newHeights = {};
    itemRefs.current.forEach((node, index) => {
      if (node !== null) {
        newHeights[`item${index}`] = node.clientHeight;
      }
    });
    setHeights(heights => ({ ...heights, ...newHeights }));
  }, [items]);

  const handleLoadMore = useCallback(() => {
    const newItems = Array.from({ length: 10 }, (_, index) => `Item ${items.length + index + 1}`);
    setItems(items => [...items, ...newItems]);
  }, [items]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} ref={node => handleItemRef(node, index)}>
          {item}
        </div>
      ))}
      <button onClick={handleLoadMore}>加载更多</button>
        {Object.entries(heights).map(([key, value]) => (
        <p key={key}>
        {key} 的高度为：{value}px
        </p >
      ))}
    </div>
  );
}

export default MyComponent;
```

在上面的代码中，我们使用 useRef 创建了一个空数组 itemRefs，用于存储每个 item 的 ref。在 handleItemRef 函数中，我们将每个 item 的 ref 存储到 itemRefs.current 数组中。在 useLayoutEffect 中，我们遍历了所有的 itemRefs.current，获取了每个 item 的高度，并使用 setHeights 更新了 heights 状态。在 JSX 中，我们使用 items.map 生成了多个 item，并使用 Object.entries 和 map 函数显示了每个 item 的高度。在 handleLoadMore 函数中，我们模拟了上拉加载更多的操作，向 items 数组中添加了 10 个新的 item。

需要注意的是，在 useLayoutEffect 中获取 DOM 高度时，需要将 items 作为依赖项传递给 useLayoutEffect。这样，只有当 items 发生变化时，才会触发 useLayoutEffect 钩子函数。如果不传递依赖项，useLayoutEffect 会在每次组件更新时都执行，这会影响页面性能。
