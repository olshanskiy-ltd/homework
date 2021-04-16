// task1

  const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const arrayy =[];
for (let key in citiesAndCountries){
	console.log(`${key} - это ${citiesAndCountries[key]}`)
	arrayy.push(`${key} - это ${citiesAndCountries[key]}`)
}
console.log(arrayy)

// task2
let array = []
function getArray(){
    const amount = 9;
    let el = 1;
    for(let i=1; i <= amount / 3; i++){
        
        let b = []
        for(let y = 1; y < 4; y++){
            
            b.push(el)
            el = el+1;
           
        }
        array.push(b)
        
        console.log(b)
        }
        
    }
    console.log(array)


getArray()
console.log(array)

// // task3
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг' ,'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',  'Sunday'],
}
function getNameOfDay(){
    const lang = 'ru';
    const day = 'sdf';
    console.log(namesOfDays[lang][day-1])
	
}
getNameOfDay()

let massive = [19, 5, 42, 2, 77, 544, 27, 14, 90];
massive.sort(function(a, b) {
        return a - b;
}); 

  console.log(massive)
  console.log(massive[0], massive[1])
  console.log(massive[0] + massive[1])

