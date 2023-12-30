const form = document.getElementById("form");

// when we click on submit btn
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});


const formValidation = () => {
    const username = document.getElementById("inputUsername").value;
    const email = document.getElementById("inputEmail").value;s
    const phone = document.getElementById("inputNumber").value;
    const pass = document.getElementById("inputPassword").value;
    const Cpass = document.getElementById("inputCPassword").value;

//---------
    if (username === "") {
        document.getElementById("username").innerHTML = "** Please enter your name";
        return false;
    }

    if ((username.length <= 2) || (username.length > 20)) {
        document.getElementById("username").innerHTML = "** Name should be between 3 to 20 characters";
        return false;
    }

    if (!isNaN(username)) { //!isNaN ->12345
        document.getElementById("username").innerHTML = "** Please enter only character";
        return false;
    }
//----------
    if (email === "") {
        document.getElementById("emailid").innerHTML = "** Please enter your Email";
        return false;
    }
    if (email.indexOf('@') < 1) { //@goutam.com wrong
        document.getElementById("emailid").innerHTML = "** position of  @ atleast should be between 1";//->g@gmail.com->true
        return false;
    }
    if ( (email.charAt(email.length - 4) != '.'  )  && (email.charAt(email.length - 3) != '.'  )  ) { //g@goutam.com right  and  g@gmail.co->true and g@gmail.in 
        document.getElementById("emailid").innerHTML = "** after the (.) must be 2 or 3 character ";//->but g@goutam.comm and g@goutam.c-> worng  bcz . ke baad 2/3 char hona chahiye
        return false;
    }
//---------
    if (phone === "") {
        document.getElementById("number").innerHTML = "** Please enter your Mobile Number";
        return false;
    }
    if (phone.length != 10) {
        document.getElementById("number").innerHTML = "** Mobile Number should be 10 digit";
        return false;
    }
    if (isNaN(phone)) { //isNaN ->1234abc 
        document.getElementById("number").innerHTML = "** Mobile Number should contain only number";
        return false;
    }
//---------
    if (pass === "") {
        document.getElementById("Password").innerHTML = "** Please enter your Password";
        return false;
    }
    if ((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById("Password").innerHTML = "** Password should be between 5 to 20";
        return false;
    }
//----------
    if (Cpass === "") {
        document.getElementById("CPassword").innerHTML = "** Please enter your Confirm Password";
        return false;
    }
    if (Cpass != pass) {
        document.getElementById("CPassword").innerHTML = "** your password are not matching";
        return false;
    }
    
    // If all validations pass, you can submit the form
    form.submit();
};

