import React from 'react'
// 引入useSearchParams的hook接收search参数
import {useSearchParams} from 'react-router-dom'
export default function Detail() {
  //解构出search和setSearch
  const [search,setSearch] = useSearchParams()
  //调用search的get方法获取传递的参数
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')

  return (
    <div>
        <ul>
            <li>
              {/* setSearch用于修改传递过来的search参数 */}
              <button onClick={()=>setSearch('id=008') }>更改收到的search参数</button>
            </li>
            <li>消息编号：{id} </li>
            <li>消息标题：{title} </li>
            <li>消息内容：{content} </li>
        </ul>
    </div>
  )
}
