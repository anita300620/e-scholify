function onLoginClick(){
    var signUpBtn = document.getElementById('signUp')
    var loginBtn = document.getElementById('login')

    var signUpDiv = document.getElementsByClassName("signup-form")
    var loginDiv = document.getElementsByClassName("login-form")

    signUpDiv = signUpDiv[0]
    loginDiv = loginDiv[0]

    loginBtn.setAttribute('class','AM-signup AM_active')
    signUpBtn.setAttribute('class', 'AM-signup')

    loginDiv.setAttribute('class', 'login-form')
    signUpDiv.setAttribute('class', 'signup-form hide')


}

function onSignupClick(){
    var Signupbutton = document.getElementById('signUp')
    var Loginbutton = document.getElementById('login')

    var Signupdiv = document.getElementsByClassName("signup-form")
    var Logindiv = document.getElementsByClassName("login-form")

    Signupdiv = Signupdiv[0]
    Logindiv = Logindiv[0]

    Loginbutton.setAttribute('class', 'AM-signup')
    Signupbutton.setAttribute('class','AM-signup AM_active')

    Logindiv.setAttribute('class', 'login-form hide')
    Signupdiv.setAttribute('class', 'signup-form')
}