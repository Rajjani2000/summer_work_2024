const func = () =>
{
    console.log('Fired Func');
    return 44;
}
const addTwo = (par1, par2, par3) =>
{
    return par1();
}
console.log(addTwo(func))