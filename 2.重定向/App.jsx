import React from 'react'
import {NavLink,Routes,Route,Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
export default function App() {
    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <NavLink className="list-group-item" to={'/About'}>About</NavLink>
                        <NavLink className="list-group-item" to={'/Home'}>Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 
                                 <Routes/>与<Route/>
                                  1.v6版本中移除了<Switch/>,引入了新的替代者<Routes/>
                                  2.<Routes/>与<Route/>需要配合使用，且必须要用<Routes/>包裹<Route/>
                                  3.<Route/>相当于一个if语句，如果其路径与当前URL向匹配，则展示对应的组件
                                  4.<Route caseSensitive/>属性用于指定匹配时是否区分大小写，默认值为false
                                  5.当URL发生变化时，<Routes>都会查看其所有子元素<Route/>元素已找到最佳匹配并呈现组件
                                  6.<Route/>也可以嵌套使用，也可以配合userRoutes()配置路由表，需要通过<Outlet/>组件来渲染其子路由
                            */}
                            <Routes>
                               <Route path={'/about'} element={<About/>}></Route>
                               <Route path={'/home'} element={<Home/>} ></Route>
                               <Route path="/" element={<Navigate to="/about" />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
