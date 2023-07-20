var age = 25;

if(age >= 65) {
    console.log("You get your income from your pension")
} else if(age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if(age < 18) {
    console.log("You get an allowance")
} else {
    "The value of the age variable is not numerical"
}


var day = "Maandamanz";

switch(day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("Do something")
        break;
    default:
        console.log("There is no such day")
        break;
}