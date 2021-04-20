
// hw4 main task



const studentArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
// {
//     // раскомментить для проверки нового абитуриента
//     name: 'Дима',
//     surname: 'Сын ректора',
//     ratingPoint: 2000,
//     schoolPoint: 15,
//     course: 2,
// },
];



class Students {
  
    constructor(enrollee){
        this.id = newId++, //можно сделать new Date(), но получается очень длинный айди. Знаем, можем, не стали.
        this.name = enrollee.name,
        this.surname = enrollee.surname,
        this.ratingPoint = enrollee.ratingPoint,
        this.schoolPoint = enrollee.schoolPoint,
        this.isSelfPayment = enrollee.isSelfPayment

    }
}
let newId = 1
let enrolleeAll = []

for(let enrollee of studentArr){

    // console.log(enrollee)
    let student = new Students(enrollee)
    enrolleeAll.push(student)
    

}
console.log(enrolleeAll)

enrolleeAll.sort((a, b) => {
    if(a.ratingPoint < b.ratingPoint){
      return 1
    }
    else if(a.ratingPoint === b.ratingPoint){
      return  a.schoolPoint < b.schoolPoint ? 1 : -1
    }
    else{
        return -1
    }
    
})
enrolleeAll.sort()

let kontract = [];
let budzet = [];

budzet = [...enrolleeAll]

let ost = budzet.splice(5)

let losers = ost.concat(kontract);
for(let y of budzet){
    y.isSelfPayment = false
}
for(let y of losers){
    y.isSelfPayment = true
}

let newStudents = budzet.concat(losers)
// console.log(budzet)
// console.log(losers)

console.log(newStudents)




