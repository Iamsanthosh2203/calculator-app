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