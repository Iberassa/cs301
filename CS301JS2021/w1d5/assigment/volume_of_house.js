function houseVolume() {
    let prompt = require("prompt-sync")();
    let a = +(prompt("Enter the first side of the roof triangle: "));
    let b = +(prompt("Enter the second side of the roof triangle: "));
    let c = +(prompt("Enter the third side of the roof triangle: "));
    let depth = +(prompt("Enter the depth of the house: "));
    let height = +(prompt("Enter the height of the house: "));
    let weidth = +(prompt("Enter the weidth of the house: "));
    console.log(livingVolume() + roofVolume());
    function livingVolume() {
        let volume_living = weidth * height * depth
        return volume_living;
    }
    function roofVolume() {
        volume_roof = roofarea() * depth
        return volume_roof;
        function roofarea() {
            area = Math.sqrt(sweep() * (sweep() - a) * (sweep() - b) * (sweep() - c));
            return area;
            function sweep() {
                s = (a + b + c) / 2;
                return s
            }
        }
    }
}

houseVolume()