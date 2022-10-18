import React from 'react'
import { useResolvedPath } from 'react-router-dom'
export default function News() {
    // useResolvedPath的作用：给定一个url值，解析其中的path,search，hash值
    console.log('useResolvedPath', useResolvedPath('/news?id=0001&name=tom#qwe'))
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
