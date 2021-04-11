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
const array =[];
for (let key in citiesAndCountries){
	console.log(`${key} - это ${citiesAndCountries[key]}`)
	array.push(`${key} - это ${citiesAndCountries[key]}`)
}
console.log(array)

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

// task3
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг' ,'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',  'Sunday'],
}
function getNameOfDay(){
    const lang = 'ru';
    const day = 4;
    console.log(namesOfDays[lang][day-1])
}
getNameOfDay()

const users = [
	{
		id: 1,
		nane: 'vasya',
	},
	{
		id: 2,
		nane: 'slava',
	},
	{
		id: 3,
		nane: 'gena',
	},
]
// for (let urod of users){
// 	console.log(urod)
// }
// const [pervy, vtoroy] = users;

// console.log(vtoroy)