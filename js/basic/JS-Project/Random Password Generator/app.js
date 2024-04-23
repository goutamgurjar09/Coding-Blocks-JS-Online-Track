let input = document.querySelector('#password')

function generatePassword(){
    const length = 12;    //total size of password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; // Define the characters to include in the password
    let password = "";
    for(let i=0; i<length; i++){ 
      const randomIndexValue = Math.floor(Math.random() * charset.length); //73
      password += charset[randomIndexValue]; //get randomIndexValue from charset and add it to password
    }
    // Display the generated password in the input field
    input.value = password;
}