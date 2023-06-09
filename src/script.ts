// simple types string, number, boolean
let firstName: string = 'Sabbir'
let lastName: string = 'Hossain'

// special types any 
let age;
age = 45
age = 'Sabbir'

// typscript array 
let foods: Array<any> = []
let foods2: string[] = []
let ages: number[] = []
let privateArray: readonly number[] = [30, 45, 36]

foods.push('Mango', 12, false)
foods2.push('Mango')
ages.push(30)

// define our tuple
let ourTuple: [number, boolean, string];
ourTuple = [30, true, 'Mango',]

let readOnlyTuple: readonly [number, boolean, string];
readOnlyTuple = [30, true, 'Mango',]

// typscript object 
// let car : object
// car = {
//   name:'Sabbir',
//   age: 30,
//   isStudent: true, 
// }

let car : {name: string, age: number, isStudent: boolean, skill?:string[]}
car = {
  name:'Sabbir',
  age: 30,
  isStudent: true, 
}

// enums 
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
console.log(StatusCodes.Accepted);


// Type Aliases
type companyName = string;
type companyStartDate = string;
type companyEndDate = string;
type numberOfEmployee = number;

type ourCompany = {
   name: companyName,
   startDate: companyStartDate,
   endDate: companyEndDate,
   employes: numberOfEmployee
}

const companyName: companyName = 'SozaCare'
const companyStartDate: companyStartDate = '2023-05-08'
const companyEndDate: companyEndDate = '2024-05-08'
const companyEmployees: numberOfEmployee = 5

const ourCompany : ourCompany = {
  name: companyName,
  startDate: companyStartDate,
  endDate: companyEndDate,
  employes: companyEmployees
}

// interfaces
interface sozaCare {
   name: string;
   startDate: string;
   endDate: string;
   employees?: number
}

const sozaCare : sozaCare = {
   name: 'SozaCare',
   startDate: '2015-05-08',
   endDate: '2015-05-08',
   employees:5,
   
}


interface location extends sozaCare {
   location:string
}


const sozaCare1 : location = {
  name: 'SozaCare',
  startDate: '2015-05-08',
  endDate: '2015-05-08',
  employees:5,
  location:'Rangpur'
}
