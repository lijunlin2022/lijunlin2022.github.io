# Chrome 模拟移动端浏览器

工作中，有时移动端浏览器行为和 Chrome 浏览器行为不一样。为了方便调试，我们可以使用 Chrome 浏览器模拟移动端浏览器。

模拟的原理，就是伪造 User-Agent（简称 UA）HTTP 协议头。

1. 访问需要调试的网站，打开开发者工具。

2. 点击三个数点，选择 More tools -> Network conditions。

3. 在 User agent 那一栏取消勾选 Select automatically。（默认勾选代表访问网站时用的 Chrome 默认的 UA）。

4. 点击 Custom… 的下拉框选择要伪装的 UA，或者直接在下面的输入框里直接输入。

5. 刷新页面，这时候 UA 已经是你改过的了，可以在 Console 里输入 navigator.userAgent 验证。

:::note

这种方式修改只能在当前 tab 生效，新建 tab 时仍旧是默认 UA。

:::