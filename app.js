const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
var team = []

function menu() {
  inquirer
    .prompt([
      {

        type: "input",
        name: "name",
        message: "What is your full name?"
      },
      
      {
        type:"input",
        name:"id",
        message:"Please provide your ID.",

      },
       {
         type:"input",
         name:"email",
         message:"Please provide your email adress."
       },
      {
        type: 'list',
        message: 'What is Employee Title',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'Title'
      },
      {
        type: 'input',
        message: 'What is Employee office number?',
        name: 'officeNumber',
        when: function (answers) {
          return answers.Title === "Manager";
        }
      },
        {
          type: 'input',
          message: 'What is Employee GitHub username?',
          name: 'github',
          when: function (answers) {
            return answers.Title === "Engineer";
          }
        },
          {
            type: 'input',
            message: 'What is Employee school name?',
            name: 'school',
            when: function (answers) {
              return answers.Title === "Intern";
            }, 
          }

    ]).
    then(answers => {
      console.log(answers)

          switch (answers.Title) {
            case "Manager":
              const newManager = new Manager(answers.name, answers.id, answers.email, answers.officenumber)
              team.push(newManager)
              break;

            case "Engineer":
              const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
              team.push(newEngineer)
              break;

            case "Intern":
              const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
              team.push(newIntern)
              break;
          }
          more();
    })
          //inquire do you want more or build the html
          function more(){
          inquirer
          .prompt([
            {
      
              type: "list",
              name: "more",
              message: "Would you like to add more employee information?",
              choices:["Yes", "No"],

            }])

          .then(answers => {
            console.log('answers: ', answers); 
          if(answers.more === "Yes"){
            menu()
          }
          else{
            buildHTML();
          }

          
         
       })
    .catch(error => {
      console.log(error)
      if (error.isTtyError) {
        
      }
    }
    )
  }
}

function buildHTML(){ 

  var outputPath = path.resolve (__dirname,"output","team.html")
  console.log(outputPath)
  fs.writeFileSync(outputPath, render(team), "utf-8");
}
menu()
  
