var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];


for (var i = 0; i < bands.length; i += 1) {
    var currentBand = bands[i];
    console.log(currentBand);
    document.getElementById("boy-bands").innerHTML += "<p>" + currentBand + "</p>";
    console.log("The current value of i is", i);
}


var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
console.log(vegetables[0]);