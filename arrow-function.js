console.log("Before setTimeout")
setTimeout(function () {
    console.log("Execute later after 2 second")
}, 2000)
console.log("After setTimeout")

console.log("Before setTimeout")
setTimeout(() => console.log("Execute later after 1 second"), 1000)
console.log("After setTimeout")


//scrie un arraow function care afiseaza "Salut Bianca"
let sayHi = () => console.log("Salut, Bianca!")
sayHi()


//scrie un arrow function care primeste un string si afiseaza stringul urmat de semnul exclamarii
let say = string => console.log(string, "!")
say("Hello")

//scrie un arr func care primeste 2 stringuri si returneaza concatenarea lor
let getString = (s1, s2) => s1 + s2;
console.log(getString("hello", "world"))

//scrie un arr func care primeste 2 stringuri si returneaza stringul mai lung
let getString2 = (s1, s2) => {
    // if(s1.length > s2.length) {
    //     return s1;
    // }
    // return s2;
    //operatorul if ternar
    return s1.length > s2.length ? s1 : s2
}

console.log(getString2("helloo", "world"))

//scrie un arrow function care verifica daca un numar este par
let isEven1 = (x) => {
    if (x % 2 === 0) {
        return true
    }
    return false;
}
console.log(isEven1(13))

let isEven2 = (x) => x % 2 === 0;
console.log(isEven2(13))

//Scrie un arrow function care returneaza suma a doua numere
let add = (a, b) => a + b;
console.log(add(3, 2))

let arrayAverage = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length
}
console.log(arrayAverage([2, 4, 5]))

// function c(counter){ //76
//     counter++; //76
//     ///
//     return counter; //77
// }

let counterFunc = (counter) => counter > 100 ? 0 : ++counter;
console.log(counterFunc(76))

let nameAge = (name, age) => {
    console.log("hello", name)
    console.log("You are", age, "years old")
}
nameAge("Ana", 26)

let getEveneNo = (array) => {
    let evenNo = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNo.push(array[i]);
        }
    }
    return evenNo;
}
console.log(getEveneNo([3, 33, 44, 7, 2]))

let doLaundry = (wash, dry, fold) => {
    wash(20, 45);
    dry(33, 44);
    fold("KonMari");
}

let wash = (degrees, time) => console.log("Hainele se spala la", degrees, "de grade, in", time, "minute");
//wash(30,45)

let dry = (rotations, time) => console.log("Functia de uscare a hainelor necesita ", rotations, "de rotatii in", time, "minute")
//dry(40,35)

let fold = (foldMethod) => console.log("Pentru a impaturi hainele se foloseste metoda ", foldMethod)
//fold("KonMari")

doLaundry(wash, dry, fold)


// Pentru filterFunc creeaza 3 functii care le dai pe rand ca argument la apelul functie filter
// Functia isPrime
let isPrime = (x) => {
    if (x < 2) {
        return true;
    }
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}


// Functia isOdd
let isOdd = (x) => {
    if (x < 2) {
        return true;
    }
    for (let i = 2; i < x; i++) {
        if (x % 2 === 0) {
            return false;
        }
    }
    return true;
}


// Functia isPowerOfTwo: functie care verifica daca nr. Primit ca parametru este putere a lui 2 (la asta va ganditi singuri cum ati face voi pe foaie, scrieti in comentarii pasi si apoi implementati, nu va uitati pe net ca nu e grea)
let isPowerOfTwo = (x) => {
    let num = x;
    for (let i = 1; i <= x; i++) {
        num /= 2
        if (num / 2 === 1) {
            return true
        }
    }
    return false;
}
console.log(isPowerOfTwo(32))

let filter = (array, filterFunc) => {
    let res = [];
    let contor = 0;
    for (let i = 0; i < array.length; i++) {
        if (filterFunc(array[i])) {
            res[contor++] = array[i]
        }
    }
    return res;
}
console.log(filter([4, 5, 3, 6, 77, 6], isPrime))

let users = [
    {
        name: "Ana",
        age: 36,
        isMarried: true,
        hasLicense: true,
        city: "Brasov",
    },
    {
        name: "Cristian",
        age: 25,
        isMarried: false,
        hasLicense: true,
        city: "Bucuresti",
    },
    {
        name: "Ioana",
        age: 27,
        isMarried: false,
        hasLicense: false,
        city: "Suceava",
    },
]


let verifyBy = (user, namePropt, compVal) => compVal === user[namePropt] ? compVal : user[namePropt]

let find = (array, verifyBy) => {
    for (let i = 0; i < array.length; i++) {
        if (verifyBy(array[i], "name", "Ioana")) {
            console.log(array[i])
        }
    }
}
find(users, verifyBy)

let cleanKitchen = (washDishes, cleanFloor) => {
    washDishes([2, 3], washDish);
    cleanFloor()
}


let washDishes = (dishes, washDish) => {
    for (let i = 0; i < dishes.length; i++) {
        washDish(dishes[i])
    }
}

let washDish = (x) => {
    if (x === 1) {
        console.log("Washing first dish")
    } else if (x === 2) {
        console.log("Washing second dish")
    } else {
        console.log("Washing", x, "th dish")
    }
}

let cleanFloor = () => ("Spala pe jos")
cleanKitchen(washDishes, cleanFloor)

let ispowerOfTwo3 = (x) => {
    let num = 2;
    for (let i = 1; num <= x; i++) {
        num *= 2
        if (num === x)  {
            return true;
        }
    }
    return false;
}
console.log(ispowerOfTwo3(16))
console.log(ispowerOfTwo3(17))
console.log(ispowerOfTwo3(64))