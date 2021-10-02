// To run: cd into data folder and run node parse.js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')
const fs = require('fs')
const input = fs.readFileSync('./Current 2021-2022 Club List - Club List 2021-2022.csv', 'utf8');
const records = parse(input, {
    columns: ["registration", 
            "approval",
            "printedReg",
            "name",
            "category",
            "missionStatement",
            "advisorName",
            "presidentNames",
            "presidentEmails",
            "meetingTimeAndLocation",
            "registrationLink",
            "advisorIsMediaMod",
            "",
            "",
            "yearbookMod"
        ],
    skip_empty_lines: true
    });
    records.shift();
console.log(records);
fs.writeFileSync('./clubs.json', JSON.stringify(records, null, 2));
