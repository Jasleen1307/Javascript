let arr=[5,-3,16,-11,-7,8];
let pos=[];
while(arr.length>0){
    let val=arr.shift();
    if (val>0){
        pos.push(val)
    }
}
console.log(pos);
//Ques3 Check if array is palidrome or not.
let array=[1,2,3,2,1];
function palindrome(){
    let arr2=[1,2,3,2,1]
    let original=[];
    let reverse=[];
    for (let i=0;i<arr2.length;i++){
        original.push(arr2[i])
    }
    while (arr2.length>0){
        reverse.push(arr2.pop())
    }
    for (i=0;i<original.length;i++){
        if(original[i]!==reverse[i]){
            return"not a palindrome"
        }
    }
    return "It's a palindrome"
}
console.log(palindrome());