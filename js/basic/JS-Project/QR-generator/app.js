let input = document.querySelector('#input')
let div = document.querySelector('#Qrcode')


function Qrgenerator (){
    let text = input.value;
    let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    div.innerHTML = `<img src="${apiUrl}" alt="qrcode">`
}




// function Qrgenerator (){
//     let text = input.value;
//     let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
//     fetch(apiUrl)
//     .then((res) => {
//         console.log(res);  // Log the entire response
//         return res.blob();  // Return the response body as a Blob-> res.blob() is used to read the response body as a Blob and  you can use them to create object URLs or perform other operations with binary data.


//     })
//     .then((data) => {
//         console.log(data);  // Log the Blob data
//     })
//     .catch((error) => {
//         console.error('Error fetching QR code:', error);
//     });

//     div.innerHTML = `<img src="${apiUrl}" alt="qrcode">`
// }

//If you want to see the data returned by the QR code API, you can log it to the console. However, since the QR code API returns an image, not JSON data, you won't be able to use res.json() as you would with a JSON-based API. Instead, you can log the response directly.
// A Blob (Binary Large Object) is a data type that represents raw binary data and Keep in mind that this won't be human-readable like JSON.. It can store various types of data, such as images, audio, or any binary data. Blobs are commonly used in web development for handling binary data, like when dealing with files or images.

// In the context of a web API response, like the QR code API you're using, when you make a request to fetch an image, the response body is often a Blob. Blobs are used to represent the binary content of the image, and you can use them to create object URLs or perform other operations with binary data.