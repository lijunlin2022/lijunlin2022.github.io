# graphql

安装

```
pnpm i @apollo/client -S
```

引入 gql 方法，定义 Query 和 Mutation 两个字符串。

```ts
import { gql } from '@apollo/client'

export const FIND = gql`
  query find($id: String!) {
    find(id: $id) {
      avatar
      tel
    }
  }
`

export const UPDATE = gql`
  mutation update($id: String!, $params: UserInput!) {
    update(id: $id, params: $params)
  }
`
```

使用 @apollo/client 提供的两个 hooks, useQuery 和 useMutation

```jsx
import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { FIND, UPDATE } from './graphql/Demo'

function Demo() {
  const [avatar, setAvatar] = useState('')
  const [tel, setTel] = useState('')

  const { loading, data } = useQuery(FIND, {
    variables: {
      id: '2b130fa8-78bf-4540-93ba-5b0960b62a76',
    },
  })

  const [update] = useMutation(UPDATE)

  const changeAvatarHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setAvatar(v.target.value)
  }

  const changeTelHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setTel(v.target.value)
  }

  const clickHandler = () => {
    update({
      variables: {
        id: '2b130fa8-78bf-4540-93ba-5b0960b62a76',
        params: {
          avatar,
          tel,
        },
      },
    })
  }

  return (
    <>
      <p>data: {JSON.stringify(data)}</p>
      <p>loading: {`${loading}`}</p>
      <p>
        avatar:
        <input type="text" onChange={changeAvatarHandler} />
      </p>
      <p>
        telephone:
        <input type="text" onChange={changeTelHandler} />
      </p>
      <button onClick={clickHandler}>更新</button>
    </>
  )
}

export default Demo
```

定义一个用于发送网络请求的 client

```ts
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
})
```

利用提供的 ApolloProvider 包裹 React 的根组件。

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import App from './App.tsx'
import './index.css'
import { client } from './utils/Apollo.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
```

至此，大功告成。