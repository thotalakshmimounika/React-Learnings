//Function Statements
function display()
{
    console.log("Hellow World")
}
display()

function Sum(num1,num2)
{
    return num1+num2
}

console.log(Sum(3,5))

//function Expressions
let sub=function(num1,num2)
{
    return num1-num2
}
let add=function(num1,num2)
{
    return num1+num2
}

console.log(sub(30,20))
// callback function

function calculate(num1,num2,opr)
//num1=30,num2=20,opr=function(num1,num2){    return num1*num2 }
{
console.log("result:"+opr(num1,num2))//opr(30,20)//600
}

calculate(30,20,sub)//sub is a callback
calculate(30,20,add)//add is a callback
calculate(30,20,function(num1,num2){return num1*num2})

//Arrow function

let add_arrow=(num1,num2)=>{
    let res=num1+num2
    return res    
}

calculate(30,20,add_arrow)
calculate(30,20,(num1,num2)=>num1/num2)
calculate(30,20,(num1,num2)=>num1%num2)
calculate(3,2,(num1,num2)=>num1**num2)