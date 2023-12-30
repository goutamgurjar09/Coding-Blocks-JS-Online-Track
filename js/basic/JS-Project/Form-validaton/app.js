
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const pass = document.getElementById("Password");
const Cpass = document.getElementById("Cpassword");

//-------------------------
form.addEventListener('submit', (e) => {
    e.preventDefault();
    Validate();
    tableData()
});


//--------------------------
const sendData = (count, successRate) => {
    if (count === successRate) {
        alert("Registration successful");
        //swal(`Good job! ${username.value} success`);
        swal("Good job! " + username.value, "Registration successful" , "success");
        location.href = `SendFormData.html?username = ${username.value}`  //to send form data on other page
    }
};

const SuccessMsg = () => {
    let forminput = document.getElementsByClassName('form-input');
    var count = forminput.length - 1; // 4
    var successRate; // Declare successRate outside the loop
    for (let i = 0; i < forminput.length; i++) {
        if (forminput[i].className === 'form-input success') {
            successRate = i;
            console.log(successRate);
            sendData(count, successRate);
        } else {
            return false;
        }
    }
};


//----------------------
const Validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passVal = pass.value.trim();
    const CpassVal = Cpass.value.trim();


    //validate email

    const isEmail = (emailVal) => {
        var atSymbol = emailVal.indexOf("@");
        if (atSymbol < 1) return false;
        var dot = emailVal.lastIndexOf(".");
        if (dot <= atSymbol + 2 || dot === emailVal.length - 1) return false;
        return true;
    };
    
        
//Note:   //if(dot <= atSymbol + 2) return false; //goutam@gm.com means @ ke baad 2 letter hona chahiye then . use krege
    //if(dot === emailVal.length - 1) return false; //guo@gm.com  -> total len = 10 indexof start with 0 so position of @ = 3 and . = 6    ab ydi last char. nhi ho to-> guo@gm.  then len= 7 , @ = 3 , . = 6  to ab len-1 = 7-1 kr de to 
    //dot 6 === 6  to dot or email dono  equal hoge 
//wrong-> go@g.mcom
//right-> goutam@gm.com
    
    
    //validate username

    if (usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username must be minimum 3 char');
    } else {
        setSuccessMsg(username);
    }

    //validate email

    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid email');
    } else {
        setSuccessMsg(email);
    }
    
    //validate phone
    
    if (phoneVal === "") {
        setErrorMsg(phone, 'mobile number cannot be blank');
    } else if (phoneVal.length != 10 || phoneVal.length > 10) {
        setErrorMsg(phone, 'Not a valid number');
    } else {
        setSuccessMsg(phone);
    }

    //validate Password
    
    if (passVal === "") {
        setErrorMsg(pass, 'password cannot be blank');
    } else if (passVal.length <= 5) {
        setErrorMsg(pass, 'password must be minimum 6 char');
    } else {
        setSuccessMsg(pass);
    }
    
    //validate Confirm Password

    if (CpassVal === "") {
        setErrorMsg(Cpass, 'confirm password cannot be blank');
    } else if (CpassVal != passVal) {
        setErrorMsg(Cpass, 'password are not matching pls fix it');
    } else {
        setSuccessMsg(Cpass);
    }
   
    SuccessMsg()
  
}

//----------------------------
  //error fun
  function setErrorMsg(input, errorMsg) {
    //console.log(input)
    //console.log(errorMsg)

    const formInput = input.parentElement;
    const small = formInput.querySelector('small');
    //console.log(small)
   //// formInput.classList.remove('success');
    formInput.classList.add('error');
    ////formInput.className = "form-input error"
    small.innerText = errorMsg;
    ////small.style.visibility = 'visible';
}

//success function 
function setSuccessMsg(input) {
    const formInput = input.parentElement;
    //console.log(formInput)
    formInput.className = "form-input success"
    
   //// formInput.classList.remove('error');
   // formInput.classList.add('success');//error and success class defined inside css part
    ////small.style.visibility = 'hidden';
}

//-----------------------
//Add data on the table

//let formsubmit = document.querySelector("#submit");

const tableData = () => {
let rowCount = 0;  // add new row to the table


    rowCount++;
    const tbody = document.querySelector('tbody')
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')
    let td6 = document.createElement('td')
    let td7 = document.createElement('td')


    td1.innerText = rowCount;
    td2.innerText = username.value;
    td3.innerText = email.value; 
    td4.innerText = phone.value; 
    td5.innerText = pass.value; 
    td6.innerText = Cpass.value;
    td7.innerHTML = ` <button class="edit"><i class="fa-solid fa-pen-to-square fa-lg"></i></button> 
    <button class="save mx-2"><i class="fa-solid fa-file-circle-check fa-lg"></i></button> 
    <button class="delete"><i class="fa-solid fa-trash-can fa-lg"></i></button>`
 
    // APPEND ALL TD TO ROW
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
    tbody.append(tr)

   //when push data in table then sari input field khali/value ht jay
    // username.value = ""
    // email.value = ""
    // phone.value = ""
    // pass.value = ""
    // Cpass.value = ""



    // action buttons functions 
    const editbtn = document.querySelectorAll('.edit')
    const savebtn = document.querySelectorAll('.save')
    const deletebtn = document.querySelectorAll('.delete')

    // Edit button
        for (let i = 0; i < editbtn.length; i++) {
            editbtn[i].addEventListener('click', () => {
                let parent = editbtn[i].parentElement.parentElement;
                parent.style.border = "2px solid black";
                parent.contentEditable = true;
            });
        }

        // Save button
        for (let i = 0; i < savebtn.length; i++) {
            savebtn[i].addEventListener('click', () => {
                let parent = savebtn[i].parentElement.parentElement;
                parent.style.border = "";
                parent.contentEditable = false;
            });
        }

        // Delete button
        for (let i = 0; i < deletebtn.length; i++) {
            deletebtn[i].addEventListener('click', () => {
                let parent = deletebtn[i].parentElement.parentElement;
                parent.remove();
            });
        }
        // Show success message
       // alert('Form submitted successfully!');





}