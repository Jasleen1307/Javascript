/*function pro (){
    return new Promise ((res,rej)=>{
        let a=10;
        if (a>50){
            res();
        }
        else{
            rej()
        }
    })
}
pro()
.then(()=> console.log("promise resolved"))
.catch(()=> console.log("promise rejected"))
.finally(()=> console.log("inside finally"))
console.log("a");
setTimeout(()=>{
    console.log("b")
},2000)
console.log("c")
setTimeout(()=>{
    console.log("d")
},2000)*/
console.log("a");
setTimeout(()=>{
    console.log("b")
},0)
Promise.resolve().then(()=>{
    console.log("Promise")
})
console.log("e") 
