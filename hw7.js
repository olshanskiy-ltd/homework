
// Task1
let searchCandidatesByPhoneNumber = function(num){
    let res = []
    // console.log(res.length)
for(let i = 0; i < condidateArr.length; i++){
    let x = num.replace(/\D+/g,'') // будут приняты во внимание только цифры
    // console.log(x)
    if(x == 0){ //если "очистки" x пустой, останавливаем функцию
         console.log('no matches found')
         break
    }
    let y =  condidateArr[i].phone.replace(/\D+/g,'') //из строки с номером тоже нужны только цифры
    if(y.indexOf(x) !== -1){
    res.push(condidateArr[i])
    }
}
res.length !== 0 ? console.log(res) : null
}
// проверка
searchCandidatesByPhoneNumber('2hhg3') // все, кроме цифр выйдет в результат


// task2
let getCandidateById = function(id){
       for(let i = 0; i < condidateArr.length; i++){        
        if(condidateArr[i]._id == id){
            condidateArr[i].registered = condidateArr[i].registered.split('T')[0]
            .split('-')
            .reverse()
            .join('/')
            console.log(condidateArr[i])
        }
    }
}
// проверка
getCandidateById('5e216bc9a6059760578aefa4')

// task3
const sortCandidatesArr = function(x){
    let res = []
    for(let i = 0; i < condidateArr.length; i++){
        condidateArr[i].balance = condidateArr[i].balance //.replace(/\D+/g,'')
        if(x == 'asc'){
            res = condidateArr.sort(function(a, b) {
                let x = b.balance.replace(/\D+/g,'')
                let y = a.balance.replace(/\D+/g,'')
               return y - x;
                
               });
           }
        if(x == 'desc'){
           res = condidateArr.sort(function(a, b) {
               let x = b.balance.replace(/\D+/g,'')
               let y = a.balance.replace(/\D+/g,'')
              return x - y;
               
              });

        }
        else {
           return console.log(condidateArr)
        }
        
    }
    console.log(res)
}
// проверка
sortCandidatesArr('asc')    
