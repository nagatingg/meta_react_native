// if else

var result = 50;
    if ( result > 40) {
        console.log("Congrulations you passed.");
    } else {
        console.log("Unfortunately you did not pass.");
    }

// if, else if, else

var place1 = "first";

 if (place1 == "first"); {
    console.log("Gold");
 } if (place1 == "second") {
    console.log("Silver");
 } else if (place1 == "third") {
   console.log("Bronze");
 } else {
    console.log("No medal");
 }

// switch statement

var place2 = "first";

switch(place2) {
    case "first":
        console.log("Gold");
        break;
    case "second":
        console.log("Silver");
        break;
    case "third":
        console.log("Bronze");
        break;
    default:
        console.log("No medal");
}