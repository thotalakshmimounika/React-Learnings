/*
var - functional scope - it can be redeclared, reassign
let - block scope - can be execute within the block - no redeclare, only reassign
constant - block scope - no redeclare, no reassign
*/

function display()
{
var msg = "good morning"
let let_msg = "good morning"
const org = "Accenture"
{
    var msg = "helllo World .."
    var msg ="Hello Mounika"//redeclare
    msg="HELLLO"//reassign

    let let_msg = "helllo World .."
    //let let_msg = "Hello Mounika" - cannot redeclare
    let_msg ="HELLO" //reassign

    const org = "Accenture Pvt lmtd"
    //const org ="Accenture company" - cannot redeclare
    //org = "Accenture company" - gives error in terminal output - cannot reassign

    console.log("var :"+msg)
    console.log("Let :"+let_msg)
}
console.log("-----Outside of block----")
console.log("var :"+msg)
console.log("let :"+let_msg)
}
display()