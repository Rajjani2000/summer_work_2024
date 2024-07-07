let a = [1,2,3];

a.forEach((a,index,array)=>{
    array[index] = a * 2;
});

console.log(a);