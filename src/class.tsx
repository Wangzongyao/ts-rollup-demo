import * as React from 'react'


let func: (x: number, y: number) => number = function (x: number, y: number) : number { return x + y} 


interface ClassCompProps {
    message: string,
}

class ClassComp extends React.Component {
    greeting: string
    constructor (props: ClassCompProps) {
        super(props)
        this.greeting = props.message
    }
    greet () {
        return `hello ${this.greeting}`
    }
    render () {
        return (
            <div>{this.greet()}</div>
        )
    }
}

export default ClassComp

