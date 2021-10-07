console.log("Welcome to EmployeePayroll");
const IS_ABSENT=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const EMP_WAGE_PER_HRS=20;
const NUM_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let empDailyWageArr = new Array();


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


function calDailyWage(empHrs) {
    return empHrs * EMP_WAGE_PER_HRS;

}


let totalEmpHrs=0;
let totalWorkingDays=0;

while (totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays < NUM_WORKING_DAYS) {
    totalWorkingDays++;
let empCheck=Math.floor(Math.random()*10)%3;
let empHrs = getWorkingHours(empCheck);
totalEmpHrs += empHrs;
empDailyWageArr.push(calDailyWage(empHrs));

}

let empWage=calDailyWage(totalEmpHrs);
console.log(" Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Employee Wage is : " + empWage);

