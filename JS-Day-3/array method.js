/Array Methods
// 4. Push- add new element in the end of the array and gives the output as new length of the array.
// 5. Pop- delete the element from the end of array and return the element.
/*let fruits=["apple","banana"]
let add=fruits.push("cherry")
console.log(fruits)
console.log(add)
let remove=fruits.pop()
console.log(remove)
// 6. Shift- Remove the first element from an array and return that element.
// 7. Unshift- Add one or more elements to the begining of the array and returns the new length.
let first=fruits.shift()
console.log(first)
//Ques1:Reverse an array with push or pop method.
let arr=[1,2,3,4,5]
let reverse=[]
while(arr.length>0){
    reverse.push(arr.pop())    
}
console.log(reverse)  */
// Ques2 Remove all negative number from ana array.
let array=[5,-3,16,-11,-7,8]
let result= array.filter(num => num >= 0);
console.log(result);
//Ques3 Check if array is palidrome or not.
let arr=[1,2,3,2,1];
function isPalindrome(){
    let reversed=[];
    arr.forEach(val=> reversed.unshift(val));
    return arr.join()===reversed.join();
}
console.log(isPalindrome(arr));