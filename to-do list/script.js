
let inputbox= document.querySelector('#input-box')
let licont =  document.querySelector('.list-cont') 
const btn = document.querySelector('button')
btn.addEventListener('click',()=>{
if (inputbox.value === '') {
   alert('write something')
} else {
  let li =  document.createElement('LI')  // li will be created
   li.innerHTML = inputbox.value
   licont.appendChild(li)
   let span = document.createElement("span")
   span.innerHTML = "\u00d7"
   li.appendChild(span)
}
inputbox.value = '';
savedata()   
})

licont.addEventListener('click',(e)=>{   // task k liye function
   if (e.target.tagName==='LI') {
       e.target.classList.toggle('itemno1')  // li list par line-through ho jaye ga
       savedata()
   } else if (e.target.tagName==='SPAN') {
       e.target.parentElement.remove() // span ka parent li hai to pori line remove ho jaye gi
       savedata()
   } 
})

function savedata() {
   localStorage.setItem('data',licont.innerHTML) // to save data
}


function getinfo() {
   licont.innerHTML = localStorage.getItem('data')  //  refresh hony par b save rhy ga
}
getinfo()