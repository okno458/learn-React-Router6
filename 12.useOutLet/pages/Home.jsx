import React from 'react'
import {NavLink,Outlet,useOutlet} from 'react-router-dom'
export default function Home() {
  /**
   * useOutlet的作用：用来呈现当前组件中渲染的嵌套路由
   *  如果嵌套路由没有挂载，返回值为null
   *  如果嵌套路由已经挂载，则展示嵌套路由对象
   */
  console.log('outlet', useOutlet())
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="message">Message</NavLink>
          </li>
        </ul> 
         <h4>
          {/* 指定路由组件呈现的位置，相当于vue的<router-link></router-link> */}
           <Outlet></Outlet>
         </h4>
      </div>
    </div>
  )
}
