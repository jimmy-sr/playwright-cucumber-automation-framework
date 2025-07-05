import { exec } from "child_process";


import dotenv from 'dotenv';
dotenv.config({ path: './env/.env' })

const retryValue = process.env.RETRY || '0';


//define a common command string for running cucumber tests

const common = `./src/features/*.feature \
--require-module ts-node/register \
--require ./src/step-definitions/**/**/*.ts \
--require ./src/Utils/cucumber-timeout.ts \
-f json:./reports/report.json \
--format html:./reports/report.html \
--retry ${retryValue} \
--tags "not @ignore"` ;

//define an interface for the peofile object
//it defines an interface where each key is a sgring adn value is also a string

interface ProfileCommands {
    [key: string]: string;
}

//define a command string for different test profiles

const profiles: ProfileCommands = {
    smoke: `${common} --tags "@smoke"`,
    regression: `${common} --tags "@regression"`,
    login: `${common} --tags "@login"`,
    contact: `${common} --tags "@contact"`,
}

//GEt the third command line arguent and assign to the profile
// smoke, regression

const profile = process.argv[2];

let command = `npx cucumber-js ${profiles[profile as 'smoke' | 'regression' | 'login' | 'contact']}`;

// Print the constructed command 

// console.log(command);

//execute the command

exec(command, { encoding: 'utf-8' }, (error: Error | null, stdout: string) => {
    //log the out put of the command
    console.log(stdout);

    //check if error during exe

    if (error) {
        console.log(error);
        //throws a new error with simple message
        throw new Error('Some automation test(s) have failed! - please review.');
    }
});