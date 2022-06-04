// cac loai function

// 1. Declaration Function
// 2. Expression Function 
// 3. Arrow function

//devlaration function -> phai co ten ham
showmes()
showmes2()
function showmes(){
    console.log('This is Declaration Function')
}

//expression function xuat hien toan tu gan = , function o dang annonymous
const showmes2 = function(){
    console.log('this is expression function')
}

//diem khac biet cua declaration function la co the goi truoc khi build ham 
//vi du ham showmes() khai bao o dong so 8 , thi ta co the call function nay o tren no van chay dc

//doi voi expression function chi  co the call function sau khi no duoc khoi tao
// showmes()
// showmes2()