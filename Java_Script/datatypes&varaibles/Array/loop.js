let fruit = ["Mango","Banana","Apple"];

for (let i =0; i<fruit.length;i++)
{
    console.log(fruit[i]);
}

//poping element
for(let j =0;j<=fruit.length;j++)
{
    console.log("Array POP Status is",fruit)
    fruit.pop()
}

//shifting element
for(let k=0;k<=fruit.length;k++)
{
    console.log("Array Shift Status is ",fruit)
    fruit.shift();
}