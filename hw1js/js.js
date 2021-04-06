
                                                                   // task1 fizBuz
for(i=1; i<=10; i++){
    if (i % 3 === 0){
        console.log('FizBuz')
    }
    else if(i % 2 == 0){
        console.log('fiz')
    }
    else {
        console.log('buz')
    }
    
}
//                                                                          TASK2 faktorial
let f=1
for(i=1; i<=10; i++){
    f=f*i
    console.log(f)
}

//                                                                             task3   sheet on week
const weeks = prompt ('введите количество недель')
if(!Number(weeks)){
        alert('Нужно вводить число!')
        // return null
}
    else if(weeks <=0) {
        alert('не выделывайся!')
}

let a = 500, b = 1200, x;
if ((weeks* b) % a == 0){
    x = weeks* b / a
    alert(x +' пачек бумаги нужно на ' + weeks+ ' недель')
}
else {
    x = Math.ceil((weeks* b) / a)
    alert(x + ' пачек бумаги нужно на ' + weeks+ ' недель')
}
const set = a;
const weeksAmount = b;
const setAmount = 8;

console.log(setAmount)


 //                                                                               task5 pyramid
let crosses = '#';
let string = '-------';

for (let i = 7; i >=0; i--) {
   
    
      console.log(string + crosses + string)
     
    crosses += "##"
    string = string.substr(0, i-1);
}                        

  //                                                                        task4 delivery


const numOfFlat = prompt ('Введите номер квартиры')
let entrance = (numOfFlat / 27)
if(!Number(numOfFlat)){
    alert('Нужно вводить число!')
}
else if(numOfFlat <=0) {
    alert('не выделывайся!')
}
else if (numOfFlat % 27 == 0){
    entrance = numOfFlat / 27;
    floor = (numOfFlat- 27 * (entrance - 1)) / 3;
}
else if (numOfFlat % 27 !== 0){
    entrance = Math.trunc(numOfFlat / 27) + 1;
    if ((numOfFlat - 27 * (entrance - 1))% 3 == 0) {
        floor = ((numOfFlat - 27 * (entrance - 1)) / 3)
    }
    else {
        floor = Math.trunc ((numOfFlat - 27 * (entrance - 1)) / 3 + 1)
    }
}



alert('Абонент живет в подъезде ' + entrance + ' на этаже ' + floor)