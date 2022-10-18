import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
export default function Home() {
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
