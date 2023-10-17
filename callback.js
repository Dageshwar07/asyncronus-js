//scenario
/** register
 * sendemail
 * login
 * getuser data
 * display user data
 * 
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

}
function login() {
    console.log("user can login")
}
function getUserData() {
    console.log("get user data")

}
function displayUserData() {

    console.log("display user data")
}
register()
sendemail()
login()
getUserData()
displayUserData()