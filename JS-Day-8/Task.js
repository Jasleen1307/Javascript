//TASK1
/*const profile = document.getElementById("profile");
profile.style.color="pink";
profile.style.backgroundColor="black";
profile.style.padding="20px";
profile.style.textAlign="center"
//TASK2
const highlight = document.getElementsByClassName("important");
console.log(highlight);
for (let i=0; i<highlight.length; i++){
    highlight[i].style.color="Blue";
    highlight[i].style.fontSize="30px";
} */
//TASK3
const id=document.getElementById("Task3");
const tag=document.getElementsByTagName("p");
for(let i=0;i<tag.length;i++){
    if ((i+1)%2===0){
        tag[i].style.color="blue"
    }
    else{
        tag[i].style.color="green"
    }
}
tag[tag.length-1].style.fontWeigth="bold";
