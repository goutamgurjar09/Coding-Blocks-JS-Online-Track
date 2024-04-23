let box = document.querySelector('#box');
let send = document.querySelector('#send');
let input = document.querySelector('#inputmsg');

send.addEventListener('click', () => {
    let inputmsg = input.value;
    if (inputmsg !== '') {
        box.innerHTML += box.innerHTML ? "<hr>" + inputmsg : inputmsg;
        input.value = '';
    }
});

//--------------------
// if (box.innerHTML) {     box.innerHTML==true ->   //if box is not empty means value usme already present hai-> So  fisrt add hr line  then add value/msg   ->"<hr>" + inputmsg;
//     box.innerHTML += "<hr>" + inputmsg;
//     input.value = '';
//    } else {  //means box.innerHTML == false ->              //start me if box is empty means box khali hai ->so value/msg  put kr do
//        box.innerHTML = inputmsg;
//        input.value = '';
//    }