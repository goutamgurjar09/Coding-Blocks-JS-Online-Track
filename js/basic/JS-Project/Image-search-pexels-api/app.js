const  searchinput = document.querySelector('#search');
const btn = document.querySelector('#btn');
const div = document.querySelector('#box');
const messageDiv = document.querySelector('#message');
const key = "HDxMvu4UhOdZdZrTRYeOMVwG5qvqnrNIZsySAtHP4vmDdfDFtXhMotVA";
//Note: This string is an API key used for authorization when user making requests to the Pexels API.
btn.addEventListener('click', () => {
    // Get the user's input from the text input
    let searchText = searchinput.value.trim()


    // Display  message
    showMessage("Please wait for response");

    const apiurl = `https://api.pexels.com/v1/search?query=${searchText}&per_page=9`;

    // Clear existing images in the div
    div.innerHTML = '';

    if (searchText) { //  searchText == true  means searchText present ho then
        fetch(apiurl, {
            headers: {
                'Authorization': key,
            },
        })
        .then((res) => {
            //console.log(res);
            // Handle the response here
            return res.json(); // Assuming you want to work with JSON data
        })
        .then((data) => {
            console.log(data);
            // Process the data received from the API
            data.photos.forEach(photo => {
                const image = document.createElement('img');
                image.src = photo.src.small;//large
                div.appendChild(image);
            });

            // Clear the text input after processing the API response
            searchinput.value = '';

            // Hide the message after processing
            hideMessage();
        })
        .catch((error) => {
            console.error('Error fetching data:', error);

            // // Display an error message
            // showMessage("Error fetching data. Please try again.");

            // // Hide the error message after 3 seconds
            // setTimeout(() => {
            //     hideMessage();
            // }, 3000);
        });
    } else {
        console.log('Please enter a search term.');
        
    }
});

function showMessage(message) {
    messageDiv.innerHTML = message;
}

function hideMessage() {
    messageDiv.innerHTML = '';
}


//Note: Authentication verifies the identity of a user, while Authorization determines what actions that authenticated user is allowed to perform. Both are crucial components of ensuring secure access to systems and data.






// const searchinput = document.querySelector('#search')
// const btn = document.querySelector('#btn')
// const div = document.querySelector('#box')
// const msgDiv = document.querySelector("#message")
// const key = "HDxMvu4UhOdZdZrTRYeOMVwG5qvqnrNIZsySAtHP4vmDdfDFtXhMotVA";





// btn.addEventListener('click', () => {
//     // Get the user's input from the text input
//     let searchText = searchinput.value.trim()
//     showMessage("pls wait for response")
//     const apiurl = `https://api.pexels.com/v1/search?query=${searchText}&per_page=9`
    
//     // Clear existing images in the div when you search other
//     div.innerHTML = '';
// if(searchText){  
//     fetch(apiurl, {
//         headers: {
//             'Authorization': key,
//         },
//     })
//     .then((res) => {
//         console.log(res);
//         // Handle the response here
//         return res.json(); // Assuming you want to work with JSON data
//     })
//     .then((data) => {
//         console.log(data);
//         // Process the data received from the API
//         data.photos.forEach(photo => {
//             const image = document.createElement('img');
//             image.src = photo.src.large;
//             div.appendChild(image)
//         });
//          // Clear the text input after processing the API response
//          searchinput.value = '';
//          searchinput.value = '';
        
//     })
    
//     .catch((error) => {
//         console.error('Error fetching data:', error);
//         // Display an error message
//         showMessage("Error fetching data. Please try again.");

//         // You may want to add a delay and then hide the error message
//         setTimeout(() => {
//             hideMessage();
//         }, 3000); // 3000 milliseconds (3 seconds) delay
//     });
   
// }

// else{
//    alert("please enter valid term")
// }

// });

// function showMessage(msg){
//     msgDiv.innerHTML = msg
// }
// function hideMessage() {
//     messageDiv.innerHTML = '';
// }