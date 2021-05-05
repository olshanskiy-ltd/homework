




// task1
const array = ['Vasya', 'Petya', 'Alexey']
let removeUser = function(arr, i){
    return arr.splice(i, 1)
}
// или 
let removeUser2 = (arr, i) => arr.splice(i, 1)
// проверка таск1
console.log(removeUser(array, 1))
console.log(array)

const arri = [1, 14,13,'n', 33, 'loshadka']
console.log(arri)
removeUser(arri, 0)

console.log(arri)

removeUser2(arri, 3)
console.log(arri)



// task2
const obj = {name: 'Vasya', age: 1}
let getAllKeys = (ob) => console.log(Object.keys(ob))
// проверка таск2
getAllKeys(obj)



// task3
let getAllValues = (ob) => console.log(Object.values(ob))
// проверка таск3
getAllValues(obj)




// task4

insertIntoarr = function (a, x){
        
            let ops = condidateArr.findIndex(item => item._id == x)
            console.log(ops) // индекс элемента, если найден, если нет - (-1)
            if(ops !== -1){
            return condidateArr.splice(ops, 0, a) // возвращает только в случае, если искомый индекс найден
            }

            else{return null}
            
    // console.log(x)
     
}


// проверка 

let sanya = {
    id: 257,
    name: 'Katyax'
}
let misha = {
    id: 254,
    name: 'mishanya'
}
console.log(condidateArr) // изначальный массив
insertIntoarr(sanya, '5e216bc9acf7f6b2fecd83df') // функция
console.log(condidateArr) // результат функции, элемент добавлен

insertIntoarr(misha, 'errwq') // функция с неподходящими данными
console.log(condidateArr) // результат функции - новый элемент не добавлен


// task5

class Condidate {   //задаю так, вместо Object.assign потому что по принципам ООП в классе параметры должны быть описаны точно.
    constructor(cond){
        this.id = cond._id,
        this.index = cond.index,
        this.guid = cond.guid,
        this.isActive = cond.isActive,
        this.balance = cond.balance,
        this.picture = cond.picture,
        this.age = cond.age,
        this.eyeColor = cond.eyeColor,
        this.name = cond.name,
        this.gender = cond.gender,
        this.company = cond.company,
        this.email = cond.email,
        this.phone = cond.phone,
        this.address = cond.address
        this.about = cond.about,
        this.registered = cond.registered,
        this.latitude = cond.latitude,
        this.longitude = cond.longitude,
        this.tags = cond.tags,
        this.friends = cond.friends
        this.greeting = cond.greeting,
        this.favoriteFruit = cond.favoriteFruit
       


        
    }
     get state() { // необходимая функция для таск5
        let state = this.address.split(',')
        // console.log(state)
        
           return console.log(`${this.name} lives in ${state[2]}`)
        
        }
    
       
    


}

// проверка, создан новый элемент класса, метод действует и на нем
let double = new Condidate({
    "_id": "5e216bc925243c901a802027",
    "index": 64,
    "guid": "34612fe5-b808-49e0-9049-edfbfbe9dca9",
    "isActive": true,
    "balance": "$2,438.16",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "blue",
    "name": "Hicks Faulkner",
    "gender": "male",
    "company": "====================================================OMTRAIL=====================================================",
    "email": "hicksfaulkner@marvane.com",
    "phone": "+1 (947) 505-3097",
    "address": "503 Verona Street, Innsbrook, Arizona, 7939",
    "about": "Tempor sint ullamco quis anim ullamco sint dolore sint labore ea veniam. Eu enim ut exercitation sit proident laboris sint sunt deserunt. Excepteur aute qui laborum reprehenderit dolore est. Occaecat dolor cupidatat aliquip pariatur proident tempor magna nulla ipsum mollit nostrud ad.\r\n",
    "registered": "2019-11-29T09:49:22 -02:00",
    "latitude": 56.05562,
    "longitude": 63.560654,
    "tags": [
        "esse",
        "mollit",
        "magna",
        "aliquip",
        "dolor",
        "minim",
        "culpa"
    ],
    "friends": [
        {
            "id": 0,
            "name": "Andrews Mcguire"
        },
        {
            "id": 1,
            "name": "Fitzgerald Collins"
        },
        {
            "id": 2,
            "name": "Tara Holloway"
        },
        {
            "id": 3,
            "name": "Olivia Wheeler"
        },
        {
            "id": 4,
            "name": "Eva Rowe"
        },
        {
            "id": 5,
            "name": "Turner Burns"
        },
        {
            "id": 6,
            "name": "Della Ingram"
        },
        {
            "id": 7,
            "name": "Fannie Espinoza"
        },
        {
            "id": 8,
            "name": "Bush Douglas"
        },
        {
            "id": 9,
            "name": "Burt England"
        }
    ],
    "greeting": "Hello, Hicks Faulkner! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
})

let condList = condidateArr.map((item) => new Condidate(item)) // создаем новый массив, в который записываем каждого из условия, присвоив ему класс

let novichok = new Condidate({ // новый кандидат с совпаающей компанией с предыдущим кандидатом
    
    "_id": "5e216bc95983a76c8461f88f",
    "index": 3,
    "guid": "307c1d41-6e14-4859-a35b-1094d2878ff4",
    "isActive": true,
    "balance": "$3,030.05",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": "Rosalind Boyd",
    "gender": "female",
    "company": "====================================================OMTRAIL=====================================================",
    "email": "rosalindboyd@comtrail.com",
    "phone": "+1 (969) 525-3624",
    "address": "483 Cherry Street, Sheatown, South Carolina, 3295",
    "about": "Ipsum qui nisi aliqua enim minim consecteturficia. Anim aute mm exercitation do ex tempor.\r\n",
    "registered": "2019-12-14T09:04:47 -02:00",
    "latitude": -11.168989,
    "longitude": 48.676136
})

// //проверка функции
// novichok.state
// condList[14].state
// double.state




// task6 функция выводит массив с названиями фирм без дубликатов

let listOfAllCond = [...condList, double, novichok] //у двух последних кандидатов, для проверки, в новом массиве повторяются компании

let getCompanyNames = (arr) => console.log(arr.map(el => el.company).filter((item, i, arr1) => i === arr1.indexOf(item)))


// // проверка
getCompanyNames(listOfAllCond)


// task7, функция которая выведет мне массив id тех, кто были зарагестрированны в заданном году


let getUsersByYear = function(year) {
        for(let i of condList){
            let str = String(i.registered).substr(0, 4)
            str == year ? console.log(i.id) : null
        
    }
}
// // проверка
getUsersByYear(2016)



// task8, массив с кондидатами, отфильтрованных по кол-ву непрочитанных сообщений

function getCondidatesByUnreadMsg(x){
    let countMissedMail = []
    for(let i = 0; i < listOfAllCond.length; i++){
        if(listOfAllCond[i].greeting == undefined){
            continue
        }
    let greet = listOfAllCond[i].greeting.split(' ')[5];
       if(x == greet){
        
        countMissedMail.push(listOfAllCond[i])
        }
        
    }
    console.log(countMissedMail)
}
// проверка
getCondidatesByUnreadMsg(9)

// task 9

function getCondidatesByGender(gender){
    let genderSort = []
   
    for(let i = 0; i < listOfAllCond.length; i++){
        
        
        if(listOfAllCond[i].gender == undefined){
            continue
        }
        if(gender == listOfAllCond[i].gender){
            genderSort.push(listOfAllCond[i]);
        }
        
    }
    console.log(genderSort)
    
}
// проверка
getCondidatesByGender('male')


