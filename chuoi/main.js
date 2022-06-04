
let h = "Toi Di Hoc Nha"
document.getElementById("js1").innerHTML = h.length 
document.getElementById("js0").innerHTML = "lengh do dai cua chuoi" 
//cat chuoi Hoc tu h
document.getElementById("js3").innerHTML = h.slice(7,10) 
console.log(h.length)

//find index chuoi 

console.log(h.search("Hoc"))

//replace chuoi 
let k = h.replace("Hoc","Choi")

console.log(k)

//split

let languages = 'JavaScript, C++ , PHP'

console.log(languages.split(', ').split(' '))