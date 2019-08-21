var num = parseInt(prompt("Enter the number of lines"));
//Validation of input
if(isNaN(num)){
    alert("Please enter a number");
    location.reload();
}
//Creation of elements
var container = document.querySelector('.container');
for(var i=0; i < num; i++){
    var line = document.createElement('div');
    line.classList.add('line');
    container.appendChild(line);
}
var lines = document.querySelectorAll('.line');
//Reduction of width
i = 0;
if(num > 33){
    var changeWidth = setInterval(reduce_width, 0);
}
i=0;
var timer = setInterval(create, 5);
//Function for animation
function create(){
    if(i < lines.length){
        lines[i].style.transform = "translateY(0)";
        lines[i].style.opacity = 1;
    }
    else{
        clearInterval(timer);
    }
    i++;
}
//Function for reduction of width
function reduce_width(){
    if(i <= num){
        lines[i].style.width = "0.5vw";
        lines[i].style.margin = "4em 0.75% 0";
    }
    else{
        clearInterval(changeWidth);
    }
}