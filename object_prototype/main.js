function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

//bay gio muon them 1 thuoc tinh cho tat ca cac doi tuong da dc tao  ??? 
//su dung prototype
User.prototype.className = "LOP AAAA";
User.prototype.getClassName = function (){
    return this.className;
}
var user1 = new User('Thang','Van','my_avarta')
var user2 = new User('Thang1','Van1','my_avarta1')

console.log(user1)
console.log(user2)
console.log(user2.className)
console.log(`fullname : ${user1.getName()}`)
console.log(`classname : ${user2.getClassName()}`)

