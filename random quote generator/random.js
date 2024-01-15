 let random = ["Why did the computer apply for a job? It wanted to work hard and earn some bytes!",

 "Success is like a good joke—timing is everything. Keep working, and your punchline will come.",
 
 "They say hard work pays off in the future, but I say it pays off now with a good cup of coffee.",
 
 "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
 
 "The early bird might get the worm, but the second mouse gets the cheese. Timing is key!",
 
 "Why did the scarecrow become a successful motivational speaker? Because he was outstanding in his field!",
 
 "The best way to predict the future is to create it. And maybe throw in a few laughs along the way.",
 
 "I'm not lazy; I'm in energy-saving mode. Efficiency is the key to success!",
 
 "They say laughter is the best medicine, but they never mention it's also a great workout for your abs. Double win!",
 
 "Why don't scientists trust atoms? Because they make up everything—except for your hard work and determination.",
 
 "Success is not the key to happiness; happiness is the key to success. If you love what you're doing, you'll be successful.",
 
 "I don't need a hairstylist; my pillow gives me a new hairstyle every morning. But that won't stop me from rocking the day!",
 
 "Why did the bicycle fall over? Because it was two-tired of the same old road. Don't be afraid to take a new path!",
 
 "If you're going to rise, you might as well shine. And maybe tell a joke or two along the way.",
 
 "The only way to do great work is to love what you do. And maybe throw in a few dance moves to make it even better.",
 
 "Why did the motivational speaker become a gardener? Because he knew how to plant seeds of inspiration.",
 
 "The road to success is always under construction. Embrace the detours and enjoy the scenic route!",
 
 "They said I couldn't do it, but when I turned around, I did it. Surprise yourself with your own strength!",
 
 "Why did the pencil go to therapy? It had too many issues, but it also knew how to draw its own path to success.",
 
 "The best way to get something done is to begin. Procrastination might be funny, but accomplishment is even better."

 ]
  let main = document.querySelector('.main')
   let btn = document.querySelector('.gen')
   console.log(btn)
  console.log(main)
 function generate() {
    for (let index = 0; index < Math.random() * random.length; index++) {
        // const element = random[index];
        // console.log(element)
        main.innerHTML = random[index]
    }
 }
 
 btn.addEventListener('click',()=>{
    generate()
 })