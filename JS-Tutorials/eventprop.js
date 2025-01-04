// document.addEventListener("DOMContentLoaded",()=>{
//     const event1 = document.getElementById("event1");
//     event1.addEventListener ('click',()=>
//     console.log('Event 1 clicked')); 
// })

document.addEventListener("DOMContentLoaded",()=>{
    //event bubbling
    let parent = document.getElementById('parent')
    parent.addEventListener('click',()=> {
        console.log('parent clicked')
    });

    let child = document.getElementById('child')
    child.addEventListener('click',()=>{
        console.log('child clicked')
    }
    );

    let event1 = document.getElementById('event1')
    event1.addEventListener('click',()=>{
        console.log('event1 clicked')
    }  
   );

    let event2 = document.getElementById('event2')
    event2.addEventListener('click',()=>
    console.log('event2 clicked'));

//event delegation
    let tasks = document.getElementById('tasks')
    tasks.addEventListener('click',(e)=>
    e.target.classList.toggle("completed")
   );
    

})