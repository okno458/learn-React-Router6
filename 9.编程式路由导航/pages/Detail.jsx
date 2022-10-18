import React from 'react'
//引用useLocation的hook
import {useLocation} from 'react-router-dom'
export default function Detail() {
  //使用连续结构赋值获取传递的state参数
  const {state:{id,title,content}} = useLocation()
  return (
    <div>
        <ul>
           
            <li>消息编号：{id} </li>
            <li>消息标题：{title} </li>
            <li>消息内容：{content}</li>
        </ul>
    </div>
  )
}
