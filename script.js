const buttons = document.querySelectorAll(".button");
const output = document.querySelector("#output");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    output.value += value;
  });
});

const clearButton = document.querySelectorAll(".buttonClear");

clearButton.forEach((button) => {
  button.addEventListener("click", () => {
    output.value = "";
  });
});


const calButton = document.getElementById("calc");

calButton.addEventListener("click",function(){
    let answer = eval(output.value)
    output.value=answer;

    if(!output.value){
      output.value = "Error";
    }else{
      output.value = answer;
    }
})


const sun = document.getElementById("sun")
const global = document.getElementById("global")
const container = document.getElementById("container")
const nav = document.getElementById("nav")
const containerTwo = document.getElementById("containerTwo")

sun.addEventListener("click",function(){
  global.classList.add("gray")
  container.classList.add("white")
  nav.classList.add("gray")
  output.classList.add('gray')
  containerTwo.classList.add('gray')
})

moon.addEventListener("click",function(){
  global.classList.remove("gray")
  container.classList.remove("white")
  nav.classList.remove("gray")
  output.classList.remove('gray')
  containerTwo.classList.remove('gray')
})