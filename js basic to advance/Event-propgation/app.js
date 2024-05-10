//Event propagation
//Event propagation is a process that occurs in the DOM (Document Object Model) when an event is triggered. 

//There are two ways/phase to handle this event propagation order of HTML DOM is-> Event Bubbling and Event Capturing.

//1.Event Bubbling ->  (means executing event from bottom to top)->  In this phase, the event starts from the target element and bubbles up through its ancestors in the DOM tree.
//ex-

        let div1 = document.querySelector("#div1"); 
        let div2 = document.querySelector("#div2"); 
        let div3 = document.querySelector("#div3"); 
  
        // div1.addEventListener("click", function (event) { 
        //     alert("outer div 1 event clicked"); 
        // },false); 
  
        // div2.addEventListener("click", function (event) { 
        //     alert("middle div 2 event clicked"); 
        // },false); 
  
        // div3.addEventListener("click", function (event) { 
        //     alert("inner div 3 event clicked"); 
        // },false); 

//Note: By default, event handlers are attached during the bubbling phase.
// However, you can explicitly specify the capturing phase by setting the third parameter of addEventListener to true.

//Exmple->In this example, we will create three div  and each div will have an event handler. When we click on inner div 3, 
//it will give an alert msg as "inner div 3 event clicked” then all the way up “middle div 2 event clicked” and “outer div 1 event clicked” alerts will display.
// This is how event bubbling happens from the “bottom to top”.


//---------------------------

//2.Event Capturing -> (means executing event from top to botton)-> In this phase, the event starts from the root of the DOM tree(parent element) and trickles down to the target element that triggered the event.

//ex-in this example event handlers are attached during the capturing phase  when we set third parameter value to true.
div1.addEventListener("click", function (event) { 
    alert("outer div 1 event clicked"); 
},true); 

div2.addEventListener("click", function (event) { 
    alert("middle div 2 event clicked"); 
},true); 

div3.addEventListener("click", function (event) { 
    alert("inner div 3 event clicked"); 
},true); 


//Example: In this example, we will create three div  and each div will have an event handler. When we click on inner div 3, it will give an alert msg as "outer div 1 event clicked"
//  and then all the way down "middle div 2 event clicked" and then "inner div 3 event clicked" alerts will display. 
//This is how event capturing or trickling happens from the “top to bottom”.


//Understanding event bubbling and capturing is essential for handling events efficiently in complex DOM structures and for managing event propagation effectively.



//event stop propgation:-
//event stop propgation is a process that occurs in the DOM (Document Object Model) and it's used to stop the Propagation of event fourther .

        div1.addEventListener("click", function (event) { 
            alert("outer div 1 event clicked"); 
        },false); 
  
        div2.addEventListener("click", function (event) { 
            alert("middle div 2 event clicked"); 
        },false); 
  
        div3.addEventListener("click", function (event) { 
            event.stopPropagation();                         //iske baad upr bale event execute/call nhi hoga bcz hmne ->stopPropagation() kr diya
            alert("inner div 3 event clicked"); 
        },false); 

        
