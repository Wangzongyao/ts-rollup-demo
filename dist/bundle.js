'use strict';

var User = /** @class */ (function () {
    function User(realName, sex) {
        this.realName = realName;
        this.sex = sex;
        this.IDCard = realName + "(" + sex + ")";
    }
    User.prototype.getUser = function (person) {
        return this.IDCard + (person.realName + "(" + person.sex + ")");
    };
    return User;
}());
var user = new User('wzy', 'man');
document.body.innerHTML = user.getUser({ realName: 'jy', sex: 'woman' });
