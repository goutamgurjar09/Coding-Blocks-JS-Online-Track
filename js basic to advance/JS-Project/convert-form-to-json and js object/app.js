//convert html form data to javascript object and JSON

let form = document.querySelector('.form')

form.addEventListener('submit',function(e){
    
    e.preventDefault()        //jb bhi hm form submit krte hai tb page referesh nhi hota and data field me hi rhta hai
    //console.log(e.target)     //return whole form 
    let form_data = new FormData(form) //->e.terget
    //console.log(typeof form_data)   //return an empty formobject but its include various methods
    let obj = Object.fromEntries(form_data)   //fromEntries ->Convert FormData entries to an object
    
   
    console.log(obj)                //returns an js object jisme key and value ->{email: 'gout@gm.com', pwd: 'fkjfjk'}
    console.log(JSON.stringify(obj))   //Converts a JavaScript value to a JavaScript Object Notation (JSON) string. and returns a json obj {"email":"g@gmail.com","pwd":"jdsjcjds"}
})




//---------------------------
// Convert FormData entries to an object
//let obj = Object.fromEntries(form_data.entries());


//--------------------------
//e.preventDefault() prevents the default form submission behavior, which would cause the page to reload.


//-------------------
//* FormData Object:

// It creates a new FormData object named form_data using the selected form (new FormData(form)).
// The FormData object collects form data, including the values entered in the email and password fields.
//and FormData object provides us various method jiske through hm data ko get kr skte hai
//The FormData object does appear empty in the console log because it doesn't automatically display its contents when logged. 
//However, you can access the individual form fields using various methods provided by the FormData object.

//------------
//* Object.fromEntries()

//Certainly! The Object.fromEntries() method is used to transform a list of key-value pairs (as arrays) into an object. 
//In the context of your code, it can be used to convert the entries of the FormData object into a regular JavaScript object

