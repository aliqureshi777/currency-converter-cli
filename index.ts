#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
    usd: 1,
    pkr: 280,
    dhr: 77,
}

let converter = await inquirer.prompt([
    {
        message: "From",
        type: "list",
        choices: ["usd", "pkr", "dhr"],
        name: "from",

    },
    {
        message: "To",
        type: "list",
        choices: ["usd", "pkr", "dhr"],
        name: "to",

    },
    {
        message: "Enter amount:",
        type: "number",
        name: "amount",

    }

]);
let fromamount = currency[converter.from];
let toamount = currency[converter.to];
let baseamount = converter.amount / fromamount;
let answer = baseamount * toamount;
console.log(answer);
