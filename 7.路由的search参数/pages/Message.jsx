import React,{useState} from 'react'
import {Link,Outlet} from 'react-router-dom'
export default function Message() {
    const [messages] = useState([
        { id:'001',title:'消息1',content:'sssss1'},
        { id:'002',title:'消息2',content:'sssss2'},
        { id:'003',title:'消息3',content:'sssss3'},
        { id:'004',title:'消息4',content:'sssss4'},

    ])
    return (
        <div>
            <ul>
                { 
                // 路由链接
                    messages.map(m => {
                        return (
                            // 路由传递search参数
                            <li key={m.id}>
                                <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            {/*  指定路由展示位置 */}
            <Outlet></Outlet>
        </div>
    )
}
