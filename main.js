// add event listener
/*

1 - enable you to establish multi events on the same element at the same time 
2 - it warn you if there are error in the browser page
3-  enable you to do task on the element not exists

*/


// 1 - enable you to establish multi events on the same element at the same time 

let btn = document.querySelector("button");
let input = document.querySelector("input");
// btn.onclick=()=>{
//     console.log("my name is : anwar ")
// }

// btn.onclick=()=>{
//     input.remove();                               
// }  

// listener do two tasks at the same time 

// btn.addEventListener('click',()=>{
//     console.log("my name is : anwar ")
// })
// btn.addEventListener('click',function(){
//     input.remove(); 
// })


// 3-  enable you to do task on the element not exists


// btn.onclick= function (){
//     let clone = input.cloneNode(true);
//     clone.className= "anwar"
//     document.body.append(clone);
// }
// clone.onclick=()=>{
//     console.log("hello")              // will return errer as clone still not created 
// }

/////////////////////////////////////////////////////////////////////////////////////////////////

// btn.addEventListener('click',()=>{
//     let clone = input.cloneNode(true);
//     clone.className= "anwar"
//     document.body.append(clone);
// })

// document.addEventListener('click',(e)=>{
//     if(e.target.className === "anwar")
//     {
//         console.log("iam cloned")
//     }
// })

