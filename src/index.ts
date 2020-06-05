interface Person {
    realName: string,
    sex: string,
}

class User {
    IDCard: string
    constructor (public realName, public sex) {
        this.IDCard = `${realName}(${sex})`
    }
    getUser (person: Person) {
        return this.IDCard + `${person.realName}(${person.sex})`
    }
}


const user = new User('wzy', 'man')
document.body.innerHTML = user.getUser({ realName: 'jy', sex: 'woman' });
