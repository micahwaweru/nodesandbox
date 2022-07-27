import inquirer from 'inquirer';
import fs from 'fs'


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    }

  ])
  .then((response) =>{
    console.log(response)


});



