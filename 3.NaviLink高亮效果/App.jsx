import React from 'react'
import {NavLink,Routes,Route,Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
export default function App() {
    // 定义一个函数，用于改变高亮效果的样式
    function computedClassName({isActive}) {
        return isActive ? "list-group-item atguigu" : 'list-group-item'
    }
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
                        {/* className需要写成一个函数，函数接收一个参数为isActive，值为true时就会给路由添加高亮效果 */}
                        <NavLink className={computedClassName} to={'/About'}>About</NavLink>
                        <NavLink className={computedClassName} to={'/Home'}>Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
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
