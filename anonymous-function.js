(function(){
    console.log("Hello")
})();

(function (noOfReps, breakPause) {
    console.log("Exercitiul va avea", noOfReps, "repetari cu", breakPause, "secunde de pauza intre seturi")
}) (22,33)

//1.a.
function doLaundry(wash, dry, fold) {
    wash(20, 45);
    dry(33, 44);
    fold("KonMary");
}

let wash = function (degrees, time) {
    console.log("Hainele se spala la", degrees, "de grade, in", time, "minute")
};


let dry = function (rotations, time) {
    console.log("Functia de uscare a hainelor necesita ", rotations, "de rotatii in", time, "minute")
};

let fold = function (foldMethod) {
    console.log("Pentru a impaturi hainele se foloseste metoda ", foldMethod)
}

doLaundry(wash, dry, fold)

console.log("************************bbbb***************************")

// b. Scrie cate o functie care mimeaza 3 workout-uri de la sala
// doUpperWorkout(doBiceps, doChest, totalTme)
function doUpperWorkout1(doWorkout1, doWorkout2, doWorkout3) {
    doWorkout1(12, 3);
    doWorkout2(15, 3);
    doWorkout3(4, 40);
};

let biceps = function (noOfReps, breakPause) {
    console.log("Exercitiul pentru biceps va avea", noOfReps, "repetari cu", breakPause, "secunde pe fiecare repetare")
};

let chest = function (noOfReps, breakPause) {
    console.log("Exercitiul pt piept va avea", noOfReps, "repetari cu", breakPause, "secunde pe fiecare repetare")
};

let time1 = function (noOfReps, breakPause) {
    console.log("Fiecare exercitiu va avea", noOfReps, "serii cu", breakPause, "secunde de pauza intre exercitii")
};

doUpperWorkout1(biceps, chest, time1)

console.log("*******************************************************")
