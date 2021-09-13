const age = parseInt(prompt("How old are you?"))
if(isNaN(age) || age < 0){ // age == NaN (Number가 아닐 경우)
    // condition == true
    console.log("Please write a real positive number.")
} else if ( age < 19 ){
    console.log("You are too young.")
}
else{
    console.log("You can drink.")
}