let input = document.querySelector('#password')

function generatePassword(){
    const length = 12;    //total size of password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; // Define the characters to include in the password
    let password = "";
    for(let i=0; i<length; i++){ 
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    // Display the generated password in the input field
    input.value = password;
}