import React from 'react'
//引入useParams的hook接收params参数
import {useParams} from 'react-router-dom'
export default function Detail() {
  const {id,title,content} = useParams()
  return (
    <div>
        <ul>
            <li>消息编号：{id} </li>
            <li>消息标题：{title} </li>
            <li>消息内容：{content} </li>
        </ul>
    </div>
  )
}
