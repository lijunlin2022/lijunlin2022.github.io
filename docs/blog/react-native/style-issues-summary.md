# 样式问题总结

## 1 React Native Image 在 Android 设备上 borderRadius 失效

React Native 可以直接在 Image 上设置圆角，但是这个图片的圆角只在 iOS 设备上生效，Android 不生效。

```jsx
<Image
  resizeMode='center'
  source={{ url: 'https://xxx.png' }}
  style={{ width: 50, height: 50, borderRadius: 8 }}
/>
```

为了让圆角在 iOS 和 Android 都生效，可以采取在 Image 外卖包一层 View 的写法。

```jsx
<View style={{ width: 50, height: 50, borderRadius: 8, overflow: 'hidden' }}>
  <Image
    resizeMode='center'
    source={{ url: 'https://xxx.png' }}
    style={{ width: 50, height: 50 }}
  />
</View>
```