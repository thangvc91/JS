//
//     1 - to string
//     2 - Join
//     3- pop 
//     4- push = append
//     5 - Shift
//     6 - Unshift
//     7 - splicing
//     8 - Concat
//     9 - slicing 
//

let languages = [
    'PHP',
    'JavaScript',
    'Python'
]

//tostring -> chuyen array -> string

let l1 = languages.toString()
console.log(l1)
console.log(typeof l1)

//join convert array -> string

console.log(languages.join(' , '))


//pop : xoa phan tu cuoi mang

console.log(languages.pop()) //outcome -> python

console.log(languages) //outcome ['PHP','JavaScript']


//push = append

console.log(languages.push('HTML'))
console.log(languages)

//shift xoa phan tu dau mang 

console.log(languages.shift()) //outcome 'PHP')
console.log(languages)