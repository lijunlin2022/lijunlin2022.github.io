# prettier

提交代码时自动格式化更改过的文件。

```shell
npm install --save-dev husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

```json title="package.json"
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```
