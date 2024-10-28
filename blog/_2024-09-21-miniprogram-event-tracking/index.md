# 一个小程序组件埋点的优雅思路

```js
function mergeMethods(target, fns) {
  Object.keys(fns).forEach(key => {
    if (typeof fns[key] === 'function') {
      // 如果是组件，fns 需要包裹在 fns 里
      if (target.hasOwnProperty('methods')) {
        target.methods = target.methods || {};
        target.methods[key] = fns[key];
      }
      // 如果是页面，直接混入函数
      else {
        target[key] = fns[key];
      }
    }
  });
  return target
}
```

```js
const mergeMethods = require('../../../utils/mergeMethods')
const track = require('../../utils/track')

const config = {
  properties: {
    commonParams: Object,
  },
  methods: {
    onCompBtnClick() {
      this.track('click', 'comp id', { btnName: '组件按钮' })
    }
  }
}

Component(mergeMethods(config, { track }))
```

```js
const mergeMethods = require('../../utils/mergeMethods')
const track = require('../utils/track')

const config = {
  data: {
    commonParams: {
      channel: 'picture',
      activityId: '123456'
    }
  },
  onPageBtnClick() {
    this.track('click', 'page id', { btnName: '页面按钮' })
  }
}

Page(mergeMethods(config, { track }))
```

```html
<button
  type="primary"
  style="margin-top: 200rpx;"
  bind:tap="onPageBtnClick"
>
  页面按钮
</button>
<comp commonParams="{{commonParams}}" />
```
