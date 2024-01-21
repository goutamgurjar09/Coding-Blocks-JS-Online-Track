function generateOTP(length) {
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    return otp;
  }
  
  // Generate a 6-digit OTP
  const otp = generateOTP(6);
  console.log(otp);