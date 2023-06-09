"use strict";
// simple types string, number, boolean
let firstName = 'Sabbir';
let lastName = 'Hossain';
// special types any 
let age;
age = 45;
age = 'Sabbir';
// typscript array 
let foods = [];
let foods2 = [];
let ages = [];
let privateArray = [30, 45, 36];
foods.push('Mango', 12, false);
foods2.push('Mango');
ages.push(30);
// define our tuple
let ourTuple;
ourTuple = [30, true, 'Mango',];
let readOnlyTuple;
readOnlyTuple = [30, true, 'Mango',];
// typscript object 
// let car : object
// car = {
//   name:'Sabbir',
//   age: 30,
//   isStudent: true, 
// }
let car;
car = {
    name: 'Sabbir',
    age: 30,
    isStudent: true,
};
// enums 
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.Accepted);
const companyName = 'SozaCare';
const companyStartDate = '2023-05-08';
const companyEndDate = '2024-05-08';
const companyEmployees = 5;
const ourCompany = {
    name: companyName,
    startDate: companyStartDate,
    endDate: companyEndDate,
    employes: companyEmployees
};
const sozaCare = {
    name: 'SozaCare',
    startDate: '2015-05-08',
    endDate: '2015-05-08',
    employees: 5,
};
const sozaCare1 = {
    name: 'SozaCare',
    startDate: '2015-05-08',
    endDate: '2015-05-08',
    employees: 5,
    location: 'Rangpur'
};
