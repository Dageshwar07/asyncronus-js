//scenario
/** register
 * sendemail
 * login
 * getuser data
 * display user data
*/

function waitForThreeSecond() {
    let wait = 3000 + new Date().getTime()
    while (new Date() < wait) {

    }
}


waitForThreeSecond()

function register() {

    console.log("user register")
    waitForThreeSecond()
}
function sendemail() {
    console.log("email send")
    waitForThreeSecond()


}
function login() {
    console.log("user can login")
    waitForThreeSecond()

}
function getUserData() {
    setTimeout(() => {
        console.log("get user data")

    }, 3000);

}
function displayUserData() {

    console.log("display user data")
}

register()
sendemail()
login()
getUserData()
displayUserData()