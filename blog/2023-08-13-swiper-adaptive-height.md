# Swiper 自适应高度

# 小程序 swiper 自适应高度

```xml
<swiper
  style="height: {{swiperHeight}}px;"
  bindchange="changeSwiper"
>
  <block
    wx:for="{{wholeList}}"
    wx:key="tab"
    wx:for-item="wholeListItem"
  >
    <swiper-item>
      <view id="swiper-item-content-{{index}}">
        <block
          wx:for="{{wholeListItem.list}}"
          wx:key="item"
        >
          <view
            style="background: #eee; height: 49px; border-bottom: 1px solid #777;"
          >
            {{item}}
          </view>
        </block>
      </view>
    </swiper-item>
  </block>
</swiper>
```

```js
Page({
  data: {
    wholeList: [
      { tab: 'A', list: [] },
      { tab: 'B', list: [] },
      { tab: 'C', list: [] },
      { tab: 'D', list: [] }
    ]
  },
  onLoad() {
    this.changeList(0)
  },
  changeSwiper(e) {
    this.changeList(e.detail.current)
  },
  changeList(current) {
    const list2D = [
      ['A0', 'A1', 'A2', 'A3', 'A4'],
      ['B0', 'B1', 'B2', 'B3', 'B4', 'B5'],
      ['C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6'],
      ['D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7']
    ]
    const newWholeList = this.data.wholeList
    newWholeList.forEach((_, index) => {
      newWholeList[index].list = (index === current) ? list2D[index] : []
    })
    this.setData({
      wholeList: newWholeList
    }, () => {
      this.updateSwiperHeight(current)
    })
  },
  updateSwiperHeight(current) {
    const content =
      this.createSelectorQuery()
      .select(`#swiper-item-content-${current}`)
    content.boundingClientRect(rect => {
      this.setData({
        swiperHeight: rect && rect.height
      })
    }).exec()
  }
})
```
