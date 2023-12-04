let clickArea = document.querySelector('.inner-div')
let clickCount = document.querySelector('.click-count')

let likeCount = 0;
clickArea.addEventListener('dblclick',()=>{
    clickCount.innerHTML = ++likeCount;
    let heart = document.createElement('i')
    heart.classList.add('fa-solid')
    heart.classList.add('fa-heart')
    clickArea.appendChild(heart)

    //remove the heart 1sec se km time me
    setTimeout(function(){
        heart.remove()
    },800)

})

