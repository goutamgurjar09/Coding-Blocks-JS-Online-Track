// filter array
let filterarray = [];
// productarray array
let productarray = [
    {
        id: 1,
        name: "Apple iphone14",
        src:  "./images/iphone14.jpeg",
        price: 399,
        desc: " Lorem ipsum dolor sit amet consectetur"
    },
    {
        id: 2,
        name: "Digital Watch",
        src: "./images/digitalwatch.jpg",
        price: 399,
        desc: " Lorem ipsum dolor sit amet consectetur"

    },
    {
        id: 3,
        name: "Headphones",
        src: "./images/headphone.jpg",
        price: 399,
        desc: " Lorem ipsum dolor sit amet consectetur"

    },
    {
        id: 4,
        name: "Mobile Cover",
        src: "./images/mobilecover.jpeg",
        price: 399,
        desc: " Lorem ipsum dolor sit amet consectetur "

    },
    {
        id: 5,
        name: "Earphones",
        src: "./images/earphones.jpeg",
        price: 399,
        desc: " Lorem ipsum dolor sit amet consectetur "

    },
    {
        id: 6,
        name: "Samsung Galaxy",
        src: "./images/samsung.jpeg",
        price: 399,
        desc: " Lorem ipsum dolor sit amet consectetur "
    },
    {
        id:7,
        name:"Mobile Charger",
        src: "./images/mobilecharger.jpeg",
        price: 399,
        desc:" Lorem ipsum dolor sit amet consectetur"
        
    },
    {
        id:8,
        name:"Apple iphone15",
        src: "./images/iphone15.jpeg",
        price: 399,
        desc: " Lorem ipsum dolor sit amet consectetur"
    }

]

let showerror = document.querySelector('#para');
let searchInput = document.querySelector('#searchInput');
let card = document.getElementById('card'); // Make sure to define the card element

searchInput.addEventListener('input', (e) => {
    let inputText = e.target.value;
    searchproduct(inputText);
});

function showProductArry(productArrayToShow) {
    card.innerHTML = ""; // Clear the previous cards
    for (let i = 0; i < productArrayToShow.length; i++) {
        card.innerHTML += `
            <div class="col-sm-6 col-md-6 col-lg-3 mt-4 mb-lg-0">
                <div class="card text-black">
                    <img class="card-img-top images" src="${productArrayToShow[i].src}" alt="Product Image" />
                    <div class="card-body">
                        <div class="text-center mt-1">
                            <h4 class="card-title">${productArrayToShow[i].name}</h4>
                            <h6 class="text-primary mb-1 pb-3">Starting at $${productArrayToShow[i].price}</h6>
                        </div>
                        <div class="text-center">
                            <div class="d-flex flex-column mb-4">
                                <span>${productArrayToShow[i].desc}</span>
                            </div>
                        </div>
                        <div class="d-flex flex-row">
                            <button type="button" class="btn btn-danger flex-fill ms-1">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}
// show the initial gallery means show  all products in starting before serching
showProductArry(productarray);

//---------------------------
//step-1
function searchproduct(inputTextName) {
    filterarray = productarray.filter((Carditem) => {
        if (Carditem.name.toLowerCase().includes(inputTextName.toLowerCase())) {
            return Carditem.name;
        }
    });

    if (inputTextName === "") {
        showProductArry(productarray);
    } 
    else {
        if (filterarray.length === 0) {
            showerror.innerHTML = "Search Not found!";
            card.innerHTML = "";
        } else {
            showerror.innerHTML = ""; 
            showProductArry(filterarray);
        }
    }
}











// // filter array
// let filterarray = [];
// // gallery array
// let productarray = [
//     {
//         id: 1,
//         name: "Apple iphone14",
//         src:  "./images/iphone14.jpeg",
//         price: 399,
//         desc: " Lorem ipsum dolor sit amet consectetur"
//     },
//     {
//         id: 2,
//         name: "Digital Watch",
//         src: "./images/digitalwatch.jpg",
//         price: 399,
//         desc: " Lorem ipsum dolor sit amet consectetur"

//     },
//     {
//         id: 3,
//         name: "Headphones",
//         src: "./images/headphone.jpg",
//         price: 399,
//         desc: " Lorem ipsum dolor sit amet consectetur"

//     },
//     {
//         id: 4,
//         name: "Mobile Cover",
//         src: "./images/mobilecover.jpeg",
//         price: 399,
//         desc: " Lorem ipsum dolor sit amet consectetur "

//     },
//     {
//         id: 5,
//         name: "Earphones",
//         src: "./images/earphones.jpeg",
//         price: 399,
//         desc: " Lorem ipsum dolor sit amet consectetur "

//     },
//     {
//         id: 6,
//         name: "Samsung Galaxy",
//         src: "./images/samsung.jpeg",
//         price: 399,
//         desc: " Lorem ipsum dolor sit amet consectetur "
//     },
//     {
//         id:7,
//         name:"Mobile Charger",
//         src: "./images/mobilecharger.jpeg",
//         price: 399,
//         desc:" Lorem ipsum dolor sit amet consectetur"
        
//     },
//     {
//         id:8,
//         name:"Apple iphone15",
//         src: "./images/iphone15.jpeg",
//         price: 399,
//         desc: " Lorem ipsum dolor sit amet consectetur"
//     }

// ]

// let showerror = document.querySelector('#para')
// let searchInput = document.querySelector('#searchInput')
// //let searchBtn = document.querySelector('#searchBtn') 

// //-----------------
// searchInput.addEventListener('input',(e)=>{
//         let inputText = e.target.value
//         //console.log(inputText)
//         searchproduct(inputText)      
// })

// //-------------------------
// function searchproduct(inputTextName){ 
//     //console.log('Search product:', inputTextName); //means jo vhi input value daloge vo aayega
//     filterarray = productarray.filter( (Carditem)=>{ //means productarray me se filter krege each item/card and name  ko match krege inputvalue se dono ydi true hai to return/show krege cardItem ko  and Carditem is an object of aaray
//         if(Carditem.name.toLowerCase().includes(inputTextName.toLowerCase())){
//             return Carditem.name
//         }
//     })
//     if(inputTextName === "" ){
//         showProductArry(productarray)
//     }
//     else{
//         if(filterarray === ""){
//             showerror.innerText = "Search Not found !";
//         }
//         else{
//             showProductArry(filterarray)
//         }
        
//     }
// }


// //------------------
// function showProductArry(productarray){
//     card.innerText ="";  // Clear the previous cards
//    //console.log(productarray)
//    for(let i=0; i<productarray.length; i++){
//        card.innerText += `
//             <div class="col-sm-6 col-md-6 col-lg-3 mt-4  mb-lg-0">
//                 <div class="card text-black">
//                     <img  class="card-img-top images" src="${productarray[i].src}" alt="Apple Computer" />

//                     <div class="card-body">
//                         <div class="text-center mt-1">
//                             <h4 class="card-title">iPhone X</h4>
//                             <h6 class="text-primary mb-1 pb-3">Starting at ${productarray[i].price}</h6>
//                         </div>
            
//                         <div class="text-center">
//                             <div class="d-flex flex-column mb-4">
//                             <span> ${productarray[i].desc}</span>
//                             </div>
//                         </div>
            
//                         <div class="d-flex flex-row">
//                             <button type="button" class="btn btn-danger flex-fill ms-1">Add to cart</button>
//                         </div>
//                     </div>
//                 </div>
//             </div> `
        
//    }
// }
// showProductArry(productarray);
