var date = new Date();
var year = date.getFullYear();
var mon = date.getMonth() + 1 //do month tra ve 0->11
var day = date.getDate();

console.log(`Ngay ${day} thang ${mon} nam ${year}`)