import * as React from 'react'

export interface Person {
    realName: string,
    sex: string,
}

export const Component = (person: Person) => <div>{person.realName}({person.sex})</div>
