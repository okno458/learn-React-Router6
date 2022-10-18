import React from 'react'
import {NavLink,Routes,Route} from 'react-router-dom'
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
                        {/* 路由链接 */}
                        <NavLink className="list-group-item" to={'/About'}>About</NavLink>
                        <NavLink className="list-group-item" to={'/Home'}>Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            {/* router6中取消了Switch，改用Routes */}
                            <Routes>
                                {/*router6中取消了components，改用element，并且要写组件标签  */}
                               <Route path={'/about'} element={<About/>}></Route>
                               <Route path={'/home'} element={<Home/>}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
