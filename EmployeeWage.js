console.log("Welcome to EmployeePayroll");
const IS_ABSENT=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const EMP_WAGE_PER_HRS=20;
const NUM_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

function getWorkingHours(empCheck){
switch(empCheck) {
    
    case IS_PART_TIME:
        return PART_TIME_HRS;

    case IS_FULL_TIME:
        return FULL_TIME_HRS;
    default:
        return 0;
   }    
}


let totalempHrs=0;
let totalWorkingDays=0;
while (totalempHrs <= MAX_WORKING_HOURS && totalWorkingDays < NUM_WORKING_DAYS) {
    totalWorkingDays++;
let empCheck=Math.floor(Math.random()*10)%3;
totalempHrs += getWorkingHours(empCheck);
}

let empWage=totalempHrs* EMP_WAGE_PER_HRS;
console.log(" Total Days: " + totalWorkingDays + " Total Hrs: " + totalempHrs + " Employee Wage is : " + empWage);

