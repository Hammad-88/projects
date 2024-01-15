

let counter = 1
console.log(counter)
// add button :-
function stop() {
    return
}
function addIt() {
    if (counter === 20) {
        stop()
    }
    else{
       counter =  counter + 1
        console.log(counter,Math.random())
    }
}
//  remove button 
function removeIt() {
    if (counter <= 0) {
        stop()
    } else {
       counter  = counter - 1 
       console.log(counter,Math.random()) 
    }
}
