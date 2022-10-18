import React from 'react'
import {NavLink,useRoutes,useInRouterContext} from 'react-router-dom'
import router from './routes'
import Header from './components/Header'
export default function App() {
    //根据路由表生成对应的路由规则
    const element = useRoutes(router)
    //useInRouterContext返回一个布尔值，如果当前组件处与路由的上下文中，则该钩子返回true，(即是否被BrowserRouter包裹)
    console.log(useInRouterContext())
    return (
        <div>
            <div className="row">
              <Header></Header>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <NavLink className="list-group-item" to={'/about'}>About</NavLink>
                        <NavLink className="list-group-item" end to={'/home'}>Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
