// hw5 Task1

const counter = function counter(x){
    let sum = x;
    // console.log(sum)
    return function(y){
    sum = (y + sum)
   console.log('+', y, ' = ', sum)
}
}

let ax = counter(0)
// проверка
ax(2)
ax(3)
ax(5)
ax(8)
ax(5)
ax(5)
ax(1)
ax(1000)
// __________________________________________________________________________________
// task2 

const arr = function arr(x){
let set = [];
   
    return function(y){
    if(y === undefined){
        set.length = 0      // можно еще set.splise(0)
        console.log(set)
    }
    else{
        set.push(y)
        console.log(set)
     }

    }
}

let ux = arr(0)

// проверка

ux(5)
ux(10)
ux(12)
ux()
ux(5)
ux(1000)
ux(1000)
ux(1000)
ux(1000)
ux(1000)
ux('rtert')
ux()
ux(0)
ux(1000)
ux('rtert')
// __________________________________________________________________________________
// task 4 **
let time;
let getTime = function(time){
    const counter = setInterval(function(){
        let mm = Math.floor(time / 60)
        let ss = time % 60
        if(time > 0){
            --time
            ss = ss < 10 ? `0${ss}`: ss,
            mm = mm < 10 ? `0${mm}` : mm,
            console.log(`${mm}:${ss}`)
        }
                
         else {
            console.log('00:00 - time out')
            clearInterval(counter)   
        }     
    
    }, 1000)
}


getTime(3)