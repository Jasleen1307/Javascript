//TASK3
/*const tag=document.getElementsByTagName("p");
for(let i=0;i<tag.length;i++){
    if ((i+1)%2===0){
        tag[i].style.color="blue"
    }
    else{
        tag[i].style.color="green"
    }
}
tag[tag.length-1].style.fontWeight="bold"
const tag=document.querySelectorAll("p");
console.log(tag);
tag.forEach((tag,index)=>{
    if (index%2===0){
        tag.style.color="blue"
    }
    else{
        tag.style.color="green"
    }
}) 
tag[tag.length-1].style.fontWeight="bold"*/
//CHANGE PROPERTIES
//innerhtml
//innertext
//textcontent
//createelement
// const demo=document.getElementById("demo");
// demo.innerHTML="<b>This is a new para</b>"
// console.log(demo.innerHTML)

// create a new element and append 
const newpara = document.createElement("p");
newpara.textContent = "This is a dynamically created paragraph";
console.log(newpara)

document.getElementById("content").append(newpara);


// const image=document.createElement("img");
// image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")

// image.setAttribute("alt","K.R Mangalam");

// document.getElementById("gallery").append(image);

setInterval(() => {
    let date = new Date()
    console.log(date);

    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    document.getElementById("digi-clock").textContent= hour + ":" + min + ":" + second;

}, 1000) 





