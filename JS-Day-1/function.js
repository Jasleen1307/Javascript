/*console.log(2==2);
console.log([]==[]);
console.log(![]); 
console.log(true+true);
console.log([1,2]+[3,4]);*/

//FUNCTION
//1. Regular

/*function sample(a){
    console.log(a,"sample")
}
sample(5)

function sample(){
    return "sample";
}
console.log(sample());*/

//2. Arrow

/*const sample=()=>console.log("sample")
sample()
const sample=()=>"sample"
console.log(sample()) 
const sample=(a,b)=>{
    return a+b;
}
console.log(sample(5,10));*/

//3. Callback 
/*function sample(callback){
    console.log("sample");
    callback();
} 
function demo(){
    console.log("demo");
}
//sample(demo());
sample(demo);*/

console.log(null==undefined);
console.log(null===undefined);
console.log([]==[]);
console.log(!!"false");
console.log(! []);
//console.log([]+());