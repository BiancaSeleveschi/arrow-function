//nullish coalescing
let name = null ?? 'John'

function getAge() {

    let age = 23
    return 23
}

let x = getAge() ?? 18

// if (getAge() == null) {
//     x = 18
// } else {
//     x = getAge()
// }
console.log(x)


//optional chaining operator
function getUser(id){
    if (id <= 0){
        return null
    }

    //algoritmul meu
    //cauta-mi user-ul

    return {
        id: id,
        username: 'admin',
        profile: {

            language: 'english'
        }
    }
}

let user = getUser(1)
let profile = user?.profile
console.log(profile)

let avatar = user?.profile?.avatar ?? 'default.png'
console.log(avatar)

let defaultProfile = {avatar: 'default.png', language:'english'}
let profile2 = user?.profile ?? defaultProfile
console.log(profile2)

//ternary operator
let age = 18
let message = age > 16 ? "you can drive" : "you can't drive"
console.log(message)
