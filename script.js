let eq = document.getElementById("equation");
let inputs = document.querySelectorAll('input.in');
console.log(inputs.length);

inputs.forEach(x=>{
    console.log(x);
    x.addEventListener("click",()=>{
        eq.value += x.value;
    })
})

function clearall() {
    eq.value= "";
}

function solve() {
    eq.value = eval(eq.value);
}

function clearone() {
    eq.value = eq.value.slice(0,eq.value.length-1);
}