let inp = document.querySelector('input')
let btn =  document.querySelector('button')
let list = document.querySelector('#list');

btn.addEventListener('click',(e)=>{
    let notetext =inp.value;
    let li = document.createElement('li');
    li.innerText = notetext;
    list.appendChild(li);
    inp.value = "";  //input text remove/khali ho jaay after append to li

    //li pr click krne pr remove ho jaay and isko addevent. ke bahar nhi likh skte bcz iska scope yhi hai
    li.addEventListener('click',function(){
        li.remove()
        //e.target.remove();
    })

})