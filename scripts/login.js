'use strict';

function checkLogin(form) {
      if(form.uname.value == "tester" && form.psw.value == "test") {

            window.location.href='home.html';
            return false;

      } else {
            alert("Sorry, but the username or password doesn't match.");
      }
}
