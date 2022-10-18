import React from 'react'
import {useNavigationType} from 'react-router-dom'
export default function News() {
    /**
     * 
     * useNavigationType()的作用：返回当前路由组件的导航类型
     *  返回值：POP,PUSH,REPLACE
     *  注：POP是指在浏览器中直接打开了路由组件(刷新页面)
     */
    console.log(useNavigationType())
    return (
        <div>
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        </div>
    )
}
