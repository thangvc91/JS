/*
    Array methos:
    forEach();
    every();
    some();
    find();
    filter();
    map();
    reduce()
*/
var courses = [
    {
        id:1,
        name: 'JavaScript',
        coin:250
    },
    {
        id:2,
        name: 'HTML, CSS',
        coin:0
    },
    {
        id:3,
        name: 'Ruby',
        coin:0
    },
    {
        id:4,
        name: 'PHP',
        coin:400
    },
    {
        id:5,
        name: 'PHP',
        coin:700
    },
    {
        id:6,
        name: 'React',
        coin:500
    }
];

//cach su dung ham forEach trong JS
// de duyet qua cac phan tu trong list
courses.forEach(function(course,index){
    console.log(index,course);
});

//every kiem tra xem trong course toan bo deu la mien phi - loop co dieu kien, dung lai  khi gap dieu kien sai
var isFree  = courses.every(function(course,index){
    return course.coin === 0;
});
console.log(isFree);

//tim thong tin trong list 
var course =  courses.find(function(course,index){
    return course.name === 'PHP'
});
console.log(course);

//filter 
var  listcourses = courses.filter(function(course, index){
    return course.name === 'PHP'
});
console.log(listcourses)