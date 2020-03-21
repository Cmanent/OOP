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
        },
        {
          type: 'input',
          message: 'What is Employee GitHub username?',
          name: 'github',
          when: function (answers) {
            return answers.Title === "Engineer";
          },
          {
            type: 'input',
            message: 'What is Employee school name?',
            name: 'school',
            when: function (answers) {
              return answers.Title === "Intern";
            }, 
          }

    ]).then(answers => {
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
              const Intern = new Intern(answers.name, answers.id, answers.email, answers.school)
              team.push(newIntern)
              break;
          }
          //inquire do you want more or build the html
          function more()
          inquirer
          .prompt([
            {
      
              type: "input",
              name: "more",
              message: "Would you like to add more employee information?",
              choices:["Yes", "No"],

            },
          console.log(team)
          
          menu()
          // switch  (manager you need to create an object based on the class manager)
          // Use user feedback for... whatever!! /// here you build your logic
          // push new object into an array
          // then repeat until the user finish and then build the hmtl
        })
    .catch(error => {
      console.log(error)
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```


function buildHTML() 

  //  var mdfile = generateMarkdown({...answers, ...github.data})
  //  console.log(mdfile)
  //  fs.writeFile("team.html", generateMarkdown({...answers, ...github.data}), function(err,data){
  //    console.log(err,data)
  //  })
  // })
   // buildReadme(answers)
  // Use user feedback for... whatever!!
//})

  // loop the array of objects 
//}
