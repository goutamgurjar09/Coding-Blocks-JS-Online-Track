function generateOTP(length){
    let otp = "";
    for(let i=0; i<length; i++){
        otp += Math.floor(Math.random() * 10) //to generate otp between  0 to 9   and 10 exclusive
    }
    return otp;
}

// Generate a 6-digit OT
const otp = generateOTP(6);
console.log(otp);
