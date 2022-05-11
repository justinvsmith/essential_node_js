console.log(process.pid);
console.log(process.versions.node);

/*we can use the process object to load information from terminal when we
run our programs */

//gets us the process arguments array
console.log(process.argv);

//Add first and last name to process arguments array

/*const [, , firstName, lastName] = process.argv;

console.log(`Your name is ${firstName} ${lastName}`); */


//function using flags to use info from the terminal command.

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);