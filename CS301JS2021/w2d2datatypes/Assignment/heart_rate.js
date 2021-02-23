let prompt = require("prompt-sync")();
let age_value = prompt ("Enter your age: ");
let age = parseFloat(age_value);
let maximum_heart_beat = (220- age);
let heart_rate_max = maximum_heart_beat*0.85;
let heart_rate_min = maximum_heart_beat*0.65;
console.log("The fastest and the slowest heart rate necessary to strengthen your heart are " + heart_rate_max +" and "+ heart_rate_min + " respectivly.")
    

