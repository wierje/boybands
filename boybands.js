var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];

var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

for (var i = 0; i < bands.length; i += 1) {
    var currentBand = bands[i];
    console.log("The current boyband is", currentBand);
    document.getElementById("boy-bands").innerHTML += "<p>" + currentBand + "</p>";
}

for (var i = 0; i < vegetables.length; i += 1) {
    var currentVegetable = vegetables[i];
    console.log("The current veggie is", currentVegetable);
    document.getElementById("veggies").innerHTML += "<p>" + currentVegetable + "</p>";
}


