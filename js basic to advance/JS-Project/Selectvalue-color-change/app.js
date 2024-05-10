let div = document.querySelector('#box')


function bgChange(colorVal){
    if(colorVal == "red"){
        div.style.display = "block"
        div.style.background = colorVal;
        div.textContent = "this is red div"
    }
    if(colorVal == "yellow"){
        div.style.display = "block"
        div.style.background = colorVal;
        div.textContent = "this is yellow div"
    }
    if(colorVal == "green"){
        div.style.display = "block"
        div.style.background = colorVal;
        div.textContent = "this is green div"
    }
    if(colorVal == "coral"){
        div.style.display = "block"
        div.style.background = colorVal;
        div.textContent = "this is coral div";
    }
    if(colorVal == "blue") {
        div.style.display = "block"
        div.style.background = colorVal;
        div.textContent = "this is blue div";
    }
    

}

//Only for background change
// let div = document.querySelector('#box')

// function bgChange(colorVal){
//     console.log("Selected-Value:" + colorVal)
//    div.style.backgroundColor = colorVal; //select val-> this.value se mil rhi hme jo colorVal me aa rhi
// }
