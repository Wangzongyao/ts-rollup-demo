import * as React from 'react'

export interface Person {
    realName: string,
    sex: string,
}

function wranUser(): void {
    console.log('this is void')
}
interface Point {
    readonly x: number,
    readonly y: number,
}

// 变量声明实践
export const Component = (person: Person) => {
    const booleanFlag: boolean = true
    const numberValue: number = 12.34
    const stringValue: string = 'Wangzongyao'
    const arrayValue: number[] = [1, 4]
    const tupleValue: [string, number] = ['ok', 9]

    enum enumValue { R, G, B }
    const color: enumValue = enumValue.R

    const anyValue: React.ReactNode = <span>123</span>

    const nullValue: null = null

    const undefinedValue: undefined = undefined
    wranUser()
  
    return (
        <div>
            {booleanFlag ? 'Yes' : 'No'}<br />
            {numberValue}<br />
            {person.realName}({person.sex})<br />
            {stringValue}<br />
            {arrayValue.map((item, key) => <div key={key}>{item}</div>)}<br />
            {tupleValue.map((item, key) => <div key={key}>{item}</div>)}<br />
            {color}<br />
            {anyValue}<br />
        </div>
    )
}
