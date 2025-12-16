// Write a function to calculate the factorial of a number.

function fact(num){
    let ans=1;
    for(let i=2;i<=num;i++)
        ans=ans*i;
    console.log(ans);
}

fact(0);