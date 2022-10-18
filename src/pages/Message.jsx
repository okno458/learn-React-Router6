import React,{useState} from 'react'
import {Link,Outlet,useNavigate} from 'react-router-dom'
export default function Message() {
    const [messages] = useState([
        { id:'001',title:'消息1',content:'sssss1'},
        { id:'002',title:'消息2',content:'sssss2'},
        { id:'003',title:'消息3',content:'sssss3'},
        { id:'004',title:'消息4',content:'sssss4'},

    ])
    const navigate = useNavigate()
    function showDetail(m) {
        navigate('detail',{
            replace:false,
            //此处只能传递state参数，想传递search参数和params参数直接在路径后拼接即可
            state:{id:m.id,title:m.title,content:m.content}
        })
    }
    return (
        <div>
            <ul>
                { 
                // 路由链接
                    messages.map(m => {
                        // 路由传递state参数，直接写state属性，值为一个对象
                        return (
                            <li key={m.id}>
                                <Link to={`detail`} state={{
                                    id:m.id,
                                    title:m.title,
                                    content:m.content
                                }}>{m.title}</Link>
                                <button onClick={() => showDetail(m)}>查看详情</button>
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
