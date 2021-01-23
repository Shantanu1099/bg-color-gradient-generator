var css = document.querySelectorAll("h2")[1];
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector(".bWrap");

changeGradient = () => {
    body.style.background = 
    "linear-gradient(to right,"+ 
    color1.value + 
    ", " +
    color2.value +
    ")";
    
    css.textContent = "Left  "+color1.value+"  ,  "+
    color2.value+"  Right";
};

// console.log(color2.value);

color1.addEventListener("input", changeGradient);
    // console.log(event.target.value);
    // console.log(color1.value); Both logs are Same

color2.addEventListener("input", changeGradient);