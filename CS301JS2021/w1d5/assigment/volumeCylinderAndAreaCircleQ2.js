function areaOfCircle(radius) {
    area = Math.PI * Math.pow(radius, 2);
    return area;
}

function volume_of_cylinder(radius, h) {
    volume = areaOfCircle(radius) * h
    return volume;
}
let prompt = require("prompt-sync")();
let question = +(prompt("if you want to calculate area enter 1 or if you want to calcualte volume enter 2: "));
if (question === 1) {
    let radius = +(prompt("Enter the radius of the circle: "))
    console.log(areaOfCircle(radius))
} if (question === 2) {
    let radius = +(prompt("Enter the radius of the cylinder: "))
    let height = +(prompt("Enter the height of the cylinder: "))
    console.log(volume_of_cylinder(radius, height))
}
