//argument la gi 
//cach su dung for of



//cach su dung for of
function writelog(){
    let mystring = '';
    for (const iterator of arguments) {
        console.log(iterator)
        mystring += `${iterator} - `
        
    }
    console.log(mystring)
}
writelog('log1','log2','log3')


//luu y trong JS ham alert, confirm la nhung ham ma user phai click vao no 
//xong thi cac khoi lenh phia sau no moi dc thuc thi 

// let x = confirm("Anh Thang rat dep trai")
// //sau khi popup len browser , user bam confirm thi doan console.log phia sau moi chay dc
// console.log(x)


//dinh nghia ham trong ham

function showmes(){
    function showmes1(){
        console.log("ham trong ham")
    }
    showmes1()
}
showmes()

//luu y neu goi rieng ham showmes1 se bi loi 

