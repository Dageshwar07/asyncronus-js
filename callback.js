//scenario
/** register
 * sendemail
 * login
 * getuser data
 * display user data
*/

// function waitForThreeSecond() {
//     let wait = 3000 + new Date().getTime()
//     while (new Date() < wait) {

//     }
// }


// waitForThreeSecond()

function register() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("user register")
            res()
        }, 5000)
    })
}
function sendemail() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("email send")
            res()
        }, 3000);
    })

}
function login() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("user can login")
            res()
        }, 2000);
    })

}
function getUserData() {
    return new Promise((res, rej) => {

        setTimeout(() => {
            console.log("get user data")
            res()

        }, 1000);
    })
}
function displayUserData() {

    return new Promise((res, rej) => {

        setTimeout(() => {
            console.log("display user data")
            res()

        }, 1000);
    })

}

// register(function () {
//     sendemail(function () {
//         login(function () {
//             getUserData(function () {
//                 displayUserData()
//             })
//         })
//     })
// })
register()
    .then(sendemail)
    .then(login)
    .then(getUserData)
    .then(displayUserData)


console.log("other application work")