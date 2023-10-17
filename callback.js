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

function register(cb) {

    setTimeout(() => {

        console.log("user register")
        cb()
    }, 5000)

}
function sendemail(cb) {
    setTimeout(() => {
        console.log("email send")
        cb()

    }, 3000);


}
function login(cb) {
    setTimeout(() => {
        console.log("user can login")
        cb()

    }, 2000);

}
function getUserData(cb) {
    setTimeout(() => {
        console.log("get user data")
        cb()

    }, 1000);

}
function displayUserData() {
    setTimeout(() => {
        console.log("display user data")
    }, 1000);
}
register(function () {
    sendemail(function () {
        login(function () {
            getUserData(function () {
                displayUserData(function () {

                })

            })
        })

    })

})


console.log("other application work")