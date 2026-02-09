//addEventListener-easy syntax and use DOM,2 parameters
/*document.getElementById("btn").addEventListener("click",()=>{
    const add=document.createElement("h2").
    textContent="New submerge heading"
    const image=document.createElement("img")
    image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")
    image.setAttribute("alt","K.R.Mangalam")
    document.getElementById("content").append(add)
    document.getElementById("content").append(image) 

})*/
document.getElementById("btn").addEventListener("click",()=>{
            //create h2 tag
    const subHead = document.createElement("h2").textContent="New Sub Heading"
            //create image
    const image=document.createElement("img")
    image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")

    image.setAttribute("alt","K.R Mangalam");

          //append both h2 and image inside content div
    document.getElementById("content").append(subHead)
    document.getElementById("content").append(image)
})
