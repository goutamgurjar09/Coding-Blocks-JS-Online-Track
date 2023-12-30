
let mydiv = document.querySelector('#mydiv')

let fleg = true;
function commentform(){
    let contactForm  = `<form action='Comment'>    
     Enter Name:<br><input type='text' name='name'/><br/>  
     Enter Email:<br><input type='email' name='email'/><br>Enter Comment:<br/>  
     <textarea rows='5' cols='70'></textarea><br><input type='submit' value='Post Comment'/>
    </form>`
    if(fleg){
        mydiv.innerHTML = contactForm 
        fleg = false;
    }
    else{
        mydiv.innerHTML = "" 
        fleg = true;  
    }  
}



//--------------------------------------
// let fleg = true;: This variable fleg is used as a flag to determine whether the comment form should be displayed or hidden.
//  It is initially set to true, indicating that the form should be displayed.


// The if(fleg) block checks if fleg is true. If it is, it sets the inner HTML of mydiv to the contactForm, effectively displaying the comment form. 
// Then, it sets fleg to false to indicate that the form is now displayed.

// The else block is executed if fleg is not true. In this case, it sets the inner HTML of mydiv 
// to an empty string, effectively hiding the comment form. It then sets fleg to true to indicate that the form is now hidden.





//Note: Remember that initially If fleg is false, then !fleg would be true, and if fleg is true, then !fleg would be false.


// let fleg = false;

// function commentform() {
//     let contactForm = `<form action='Comment'>    
//          Enter Name:<br><input type='text' name='name'/><br/>  
//          Enter Email:<br><input type='email' name='email'/><br>Enter Comment:<br/>  
//          <textarea rows='5' cols='70'></textarea><br><input type='submit' value='Post Comment'/>
//     </form>`;

//     if (!fleg) {  //true kr dega
//         mydiv.innerHTML = contactForm;
//         fleg = true;
//     } else {
//         mydiv.innerHTML = "";
//         fleg = false;
//     }
// }