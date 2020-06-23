import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Component } from './person'
import ClassComp from './class'

function App () {
    return (
        <div> 
            <Component realName='wangzongyao' sex='man' />
            <ClassComp message='wangzongyao' />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('app'),
);
