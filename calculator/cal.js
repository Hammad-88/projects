
let display = document.querySelector('#display')
// console.log(display)
function addtodisplay(value){
    display.value += value 
}
function clearDisplay(){
    display.value = '';
}
function result() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        console.log(error)
    }
}