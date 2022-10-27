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

//     (function (noOReps, breakPause, doWorkout) {
//     doWorkout(noOReps, breakPause)
// })(12, 3, biceps)
// (15, 3, chest)

console.log("*******************************************************")

// doLegsWorkout(doSquats, doLaunges, totalTme)
// function doLegsWorkout(doSquats, doLaunges, computeTime2) {
//     console.log("Legs workout:")
//     doSquats(10, 4);
//     doLaunges(8, 3);
//     computeTime2(4, 40);
// }

// (function (noOfReps, breakPause) {
//     console.log("Exercitiul va avea", noOfReps, "repetari cu", breakPause, "secunde de pauza intre seturi")
// }) ()
// let launges = function (noOfReps, breakPause) {
//     console.log("Exercitiul va avea", noOfReps, "repetari cu", breakPause, "secunde de pauza intre seturi")
// };
let launges = () => console.log("hi")
launges()

// function computeTime2(noOfReps, breakPause) {
//     console.log("Exercitiul va avea", noOfReps, "serii cu", breakPause, "secunde de pauza")
// }

//doLegsWorkout(doSquats, doLaunges, computeTime2)
// //doLegsWorkout(12, 20, squats, launges, 4, 40, time2)
//
// //doCardio(time, minKcals)
// function doCardio(time, minKcals) {
//     console.log("Am alergat", time, "minute si am ars", minKcals, "calorii")
// }
// doCardio(30, 200)
//
//
// console.log("****************************************************")
//
//
// //c. Scrie o functie filter care primeste 2 patrametri: un array de numere si o functie filterFunc care primeste un numar si returneaza un boolean
// //Functia filter, filtreaza elementele array-ului in functie de filterFunc
// //Adica rezultatul lui filgterfunc pe element este adevarat, elementul se pastreaza in array, altfel se scoate
// //Altfel spus: re returneaza un array doar cu elementle care respecta filterfunc (returneaza true)
//
// //functie care filtreaa elementele elementele impare
// //se returneaza doar elementele impare
// function filterOddNumbers(array) {
//     let res = [];
//     let contor = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (isOdd(array[i])) {
//             res[contor++] = array[i]
//         }
//     }
//     return res;
// }
// console.log("******", filterOddNumbers([3, 4, 5, 7, 6, 8]))
//
// //functie care filtreaza elementele prime
// function filterPrimeNo(array) {
//     let res = [];
//     let contor = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (isPrime(array[i])) {
//             res[contor++] = array[i]
//         }
//     }
//     return res;
// }
// console.log(filterPrimeNo([4, 66, 5, 13, 12]))
//
// //functie care filtreaza elementel care sunt puteri ale lui 2
// function filterPowerOf2No(array) {
//     let res = [];
//     let contor = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (isPowerOfTwo(array[i])) {
//             res[contor++] = array[i]
//         }
//     }
//     return res;
// }
// console.log(filterPowerOf2No([4, 66, 5, 13, 12, 32, 22]))
//
// function filter(array, filterFunc) {
//     for (let i = 0; i < array.length; i++) {
//         filterFunc(array[i])
//     }
// }
// console.log(filter([4, 5, 3, 6, 77, 6], isPrime))
//
// // Functia filter parcurge array-ul si aplica functia filterFunc pe fiecare element.
// // Pentru filterFunc creeaza 3 functii care le dai pe rand ca argument la apelul functie filter
// // Functia isPrime
// function isPrime(x) {
//     if (x < 2) {
//         return true;
//     }
//     for (let i = 2; i < x; i++) {
//         if (x % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
//
//
// // Functia isOdd
// function isOdd(x) {
//     if (x < 2) {
//         return true;
//     }
//     for (let i = 2; i < x; i++) {
//         if (x % 2 === 0) {
//             return false;
//         }
//     }
//     return true;
// }
//
// // Functia isPowerOfTwo: functie care verifica daca nr. Primit ca parametru este putere a lui 2 (la asta va ganditi singuri cum ati face voi pe foaie, scrieti in comentarii pasi si apoi implementati, nu va uitati pe net ca nu e grea)
// function isPowerOfTwo(x) {
//     let num = x;
//     for (let i = 1; i <= x; i++) {
//         num /= 2
//         if (num / 2 === 1) {
//             return true
//         }
//     }
//     return false;
// }
// console.log(isPowerOfTwo(64))
//
// // function isPowerOfTwo2(x) {
// //   for (let i = 1; i <= x; i++) {
// //     x /= 2
// //     if (x / 2 === 1) {
// //       return true
// //     }
// //   }
// //   return false;
// // }
// // console.log(isPowerOfTwo2(64))
//
// console.log("****************************************************")
//
// //d. Scrie o functie care mimeaza curatenia din bucatarie: cleanKitchen(washDishes, cleanFloor)
// function cleanKitchen(washDishes, cleanFloor) {
//     washDishes([3, 2, 5], 2);
//     cleanFloor()
// }
//
// // Functia washDishes(dishes[], washDish): parcurge array-ul de farfurii si apeleaza funcția washDish pe fiecare.
// function washDishes(dishes, washDish) {
//     for (let i = 0; i < dishes.length; i++) {
//         washDish([dishes[i]])
//     }
// }
// washDishes([1,5], washDish)
// // Functia washDish primeste un parametru care reprezinta nr-ul farafuriei pe care il spala (a catea farfurie o spala) si afiseaza mesajul:
// // “Washing first dish” (daca se primeste 1 ca param)
// // “Washing second dish” (daca se primeste 2 ca param)
// // “Washing <number>th dish” (daca se primeste orice alt nr ca param)
// function washDish(dishNo) {
//     if (dishNo === 1) {
//         console.log("Washing first dish")
//     }
//     else if (dishNo === 2) {
//         console.log("Washing second dish")
//     }
//     else {
//         console.log("Washing < number > th dish")
//     }
// }
//
// // Functia cleanFloor afiseaza 1 mesaj sugestiv.
// function cleanFloor() {
//     console.log("The last thing you have to do is clean the floor")
// }
//
// //cleanKitchen(washDishes, cleanFloor)
//
// console.log("****************************************************")
// // e.  Scrie o functie find care primeste ca parametruu un array de obiecte user si o functie findBy, care parcurge array-ul si apeleaza functia findBy pe fiecare element)
// let users = [
//     {
//         name: "Ana",
//         age: 36,
//         isMarried: true,
//         hasLicense: true,
//         city: "Brasov",
//     },
//     {
//         name: "Cristian",
//         age: 25,
//         isMarried: false,
//         hasLicense: true,
//         city: "Bucuresti",
//     },
//     {
//         name: "Ioana",
//         age: 27,
//         isMarried: false,
//         hasLicense: false,
//         city: "Suceava",
//     },
// ]
//
// function find(array, verifyUser) {
//     for (let i = 0; i < array.length; i++) {
//         if (verifyUser(array[i], "name", "Ioana")) {
//             console.log(array[i])
//         }
//     }
// }
// find(users, verifyUser)
//
//
// function find2(array, verifyUser, property, comparationValue) {
//     for (let i = 0; i < array.length; i++) {
//         if (verifyUser(array[i], property, comparationValue)) {
//             console.log(array[i])
//         }
//     }
// }
// find2(users, verifyUser, "age", 25)
// find2(users, verifyUser, "city", "Brasov")
// function verifyUser(user, propertyName, comparationValue) {
//     //implementare folosind if
//     // if (user[propertyName] === comparationValue) {
//     //   return true;
//     // }
//     // return false;
//     //implementarea intr-o singura linie de cod
//     return user[propertyName] === comparationValue
// }