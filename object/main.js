let myemail = 'email'
let myinfo = {
    name: 'Van Thang',
    age: 18,
    address :'TPHCM',
    [myemail]:'abc@cba.com', //thuoc tinh
    getName: function(){
        return this.name;  //this o day = myinfo , nhung khong dung myinfo vi co the trong
                            //1 ngu canh nao do, minh change myinfo -> myinfo1 -> this de dynamic
    },
    getAge: function(){  //tao 1 phuong thuc getAge
        return this.age; 
    }
};
console.log(myinfo)
console.log(typeof myinfo.getName) // () la toan tu call cua function //method
console.log(myinfo.getName()) 
//delete key 
// delete myinfo.age
// console.log(myinfo)


//trong 1 object co the co :
//1 - Function --> Phuong thuc //method 
//other (string, number..) --> thuoc tinh
