// console.log("Hello World!!");

// let num = 90;
// let nums = [34, 76, 12];
// console.log(nums[1]);
// console.log(nums.length);
// nums[1] = 90;
// console.log(nums)
// nums[5] = 78;
// console.log(nums)
// console.log(nums[3])
// let x;
// console.log(x);
// let arr = [2, 3, 4, true, "Ankur", 455.23,undefined];
// console.log(arr)
// console.log(arr[6])
// let arr = [2, 3, 4, true, "Ankur", 455.23,undefined,[45,34,12]];
// console.log(arr)
// console.log(arr[7][12])
// console.log(arr["4"])

//METHODS IN ARRAYS => DYNAMIC IN NATURE
// let arr = [20, 30]
// arr.push(40);
// arr.push(50)
// arr.push(60)

// let result=arr.push(40,50,60)
// console.log(result) //return the updated length of the array

//REMOVING THE LAST ELEMENT FROM THE ARRAY
// let arr = [20, 30, 40, 50, 60]
// console.log(arr)
// let result=arr.pop();
// console.log(result)
// console.log(arr)
// arr.pop();
// arr.pop();
// console.log(arr)
// arr.pop();
// arr.pop();
// console.log(arr)
// arr.pop();
// console.log(arr)

// adding element from the front side
// let arr = [20, 30, 40, 50, 60]
// let result = arr.unshift(-12, -23)
// console.log(result)
// console.log(arr)

// deleting element from the frontside
// let arr = [20, 30, 40, 50, 60]
// let result = arr.shift();
// console.log(result, arr);

//*******************SPLICE**************************
//.splice(startIndex,deleteCount,..... newElements)
//delete elements from anywhere in array

// let arr = [20, 30, 40, 50, 60];
// let result = arr.splice(1, 3);
// console.log(arr,result);


//Inserting elements from anywhere in array
// let arr = [20, 30, 40, 50, 60];
// let result = arr.splice(1, 0,21,22,23,24,25);
// console.log(arr,result);


//Opertation on 2d Arrays
// let arr = [10, [2, 3, 1], 90, 80];
// let result = arr[1].splice(1, 1, 20);
// console.log(arr[1][1]);
// console.log(arr, result);


//*****************OBJECTS*************************//
let obj = {
    name: "Aravind",
    age: 23,
    
};
console.log(obj.age, obj["age"]);

obj.age = 24;
console.log(obj);
obj["age"] = 25;
console.log(obj);

// deleting existing property in obj
delete obj.age;
console.log(obj);

//creating new property in obj
obj.domain = "SDE";
console.log(obj);
obj["role"] = "frontend Dev";
console.log(obj);
