let languages = [
    'Javascript',
    'PHP',
    function(){},
    null,
    {}, //kieu du lieu object
    123
]
console.log(languages)

console.log(typeof languages)


console.log(`array kieu du lieu cua language ${typeof languages} la object`)

console.log(`array kieu du lieu cua {} ${typeof {}} la object`)

//phan biet array voi object = hamg Array.isArray()

console.log(Array.isArray(languages))

console.log(Array.isArray({}))

//hoac check lengh of array

console.log(languages.length)

//xuat phan tu trong array 
let i = 0
for (let index = 0; index < languages.length; index++) {
    const element = languages[index];
    console.log(`element thu ${index} : ${element}
    `)
}