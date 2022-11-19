let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

//v1
function getCitiesWithPopulationGraterThan(cities, thrseold = 3000000) {
    let bigCities = []
    for (let c of cities) {
        if (c.population > thrseold) {
            bigCities.push(c);
        }
    }
    return bigCities;
}

console.log(getCitiesWithPopulationGraterThan(cities))

//v2
let bigCities = cities.filter(function (city) {
    return city.population > 3000000
})
console.log(bigCities)

//v3
let bigCities2 = cities
    .filter(city => city.population > 3000000)
    .map(city => city.name)
console.log(bigCities2)




