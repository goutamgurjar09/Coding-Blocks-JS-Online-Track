let input = document.getElementById('input');
let text = document.getElementById('text');


input.addEventListener('input', function () {
    console.log(input.value);
    text.innerText = input.value;
})