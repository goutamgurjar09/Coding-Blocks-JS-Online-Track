//How to get One and All checked checkbox value in JavaScript?

//this fun  will simply set  all checkbox value  to true and
//selects all checkboxes with the class (pl) when the "Check all" button is clicked.

function checkAll() {
    var inputs = document.querySelectorAll('.pl'); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].checked = true; 
    } 
}


//this fun will get  checkbox value if all/any of them checkbox is checked to true and display in result div when the "Submit" button is clicked.
function getCheckboxValue() {
    var inputs = document.querySelectorAll('.pl');
    var selectedLanguages = [];
    
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) { //== true
            selectedLanguages.push(inputs[i].value);
        }
    }
    
    if (selectedLanguages.length === 0) {
        document.getElementById("result").innerText = "You have not selected anything";
    } else {
        document.getElementById("result").innerText = "You have selected " + selectedLanguages.join(", ") + " languages";
    }
}