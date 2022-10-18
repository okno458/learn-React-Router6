import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'
export default function Home() {
  /**
   * Navigate组件
   *  作用：只要<Navigate/>组件被渲染，就会修改路径，切换视图
   *  replace属性用于控制跳转模式，(push或者replace，默认是push)
   * 
   * 
   */
  const [sum,setSum] = useState(1)
  return (
    <div>
       <h3>我是Home的内容</h3>
       {sum === 2 ? <Navigate to="/about" replace/> : <h4>当前sum的值为{sum}</h4> }
       <button onClick={() => setSum(2)}>将sum变为2</button>
    </div>
  )
}
