let home    = document.querySelector(".home")
let contact = document.querySelector(".contact")
let about   = document.querySelector(".about")
let content = document.querySelector(".content")
let element = document.querySelector('div')


home.addEventListener("click", ()=>{
    
    console.log('home')

    element.innerHTML = `<p class = "country">Best pizza in your country</p>
    <p class = 'pizza'>Made with passion since 1908</p>
    <div class ='img'>
    <img src ="Food_background/serving-platter-with-grilled-chicken-pieces-topped-with-sauce.jpg" class ="image">
    <img src ="Food_background/beefsnacks.jpg" class ="image">
    <img src ="Food_background/grilled-beef-burger-with-fries-cheese-tomato-generative-ai.jpg" class ="image">
    </div>
  
  
    
    <button class ="order">Order Now</button>
    <p class = "visit">Visit us @ www.pethosphere.org</p>
    
    `
    
      
})
contact.addEventListener("click", ()=>{
    console.log('home')

    element.innerHTML = `
    <p class= "change">Make enquires to us through our contact and mails</p>
    <ol>
      <li>ptosin@gmail.com</li>
      <li>pethosphere@yahoo.com</li>
      <li>phone number: 08090923432</li>
    <ol/>
  
    
    `
      
})
about.addEventListener("click", ()=>{
    console.log('home')

    element.innerHTML = ` <div class= "container">
     <h1>Welcome to a ordering page</h1>
     <h2>Make your order with few step</h2>
     <p>become aspirant with the most beauty of your mindby making your choice with our page and awesome websites for our client and customer let know the your choice  </p>
     </div>
    `
      
})



