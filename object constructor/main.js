//object constructor

//same same voi model cua django , hay class trong python
//object constructor
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    //tao 1 phuong thuc
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
var author = new User('Thang','Van','Avatar');
var user = new User('Vu','Nguyen','Avatar');

//thuoc tinh chung cua ong author va ong user la firstName, lastName, avatar , 
//gio ta se tao them thuoc tinh 
author.title="hoc hoc nua hoc mai"
user.comment="hoc chung nao moi nghi"
console.log(author);
console.log(user);
console.log(author.getName());
console.log(user.getName());
console.log(author.constructor);