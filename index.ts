#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


// 1) computer will genrat a random number. Done...
//2)  user input for guessing number.  Done...
//3)  compare user number with genrat number and show result. Done...
//4)  play again game.  Done...




async function numberGueest(){
    const genratNumber = Math.floor(Math.random() * 6 +1);

    console.log(chalk.bgWhite.magenta.bold.inverse(`       WELCOM TO NUMBER GUEESING GAME       `))

    const number= await inquirer.prompt([{
    message:"pleas guess a number between 1-6",
    name:"guestNumber",
    type:"number",
}])

if(number.guestNumber==genratNumber){
    console.log(chalk.bgBlue.magenta.bold.inverse('congratulation! you gueesed right number'));
}else{
    console.log(chalk.bgWhite.blue.bold.inverse('you gueesed rong number. try again'));
}

const again=await inquirer.prompt([{
    message:"Do you want to again play game .",
    name:'Again',
    type:'list',
    choices:['yes','No'],
}])
if(again.Again== 'yes'){
    numberGueest()
}else{
    console.log(chalk.red.bold.inverse('goodbyee'));
}
}
numberGueest();