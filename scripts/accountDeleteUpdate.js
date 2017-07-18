window.addEventListener('load', function() {
  setup();
});


function deleteAccount() {

  if (confirm("Do you want to delete an account ?") == true) {

    window.location.href = 'accountManagement.html';

  }
}

function deleteTableRow() {
  document.getElementById("myTable").deleteRow(1);
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function setup() {

  var AccountId = getQueryVariable("AccountID");

  var xhr = new XMLHttpRequest();

  xhr.withCredentials = true;

  // xhr.addEventListener("readystatechange", function () {
  //   if (this.readyState === 4) {
  //      getCustomerDetails(JSON.parse(xhr.responseText));
  //   }
  // });

  xhr.open("GET", "https://dev.qgatecloud.com/portals/partner/v1/accounts/" + AccountId);
  xhr.setRequestHeader("accept", "application/JSON");
  xhr.setRequestHeader("partnerportalauthorization", "11B856AB07624B129730692FC4BE357D3AAF7A8242A94470A32FB7C06C3464ED313AE456AAEFDCD4C918DBBE4DEA47B5048D993A2675FE6418597EB2BBE5971770F");
  xhr.setRequestHeader("partnersecuritytoken", "QCSm2yn9RnydZ7k1RrVd9Ff+U0TmjkQAb2G8kJCxLO7A8FULzjPG8iD01vXWO1BIhErqP9T/dhxh81So/c/kJJ6ygmRGAl7Bz+pFFr/1/5ua7vlbQTd7cl4zjcyQqWNkFtxdvlNs90YAWjHnkMZM+SMArETEvLSPov/SAZUp4e2sss01");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("postman-token", "77b5674c-d0b9-95db-9373-bdc44e756f7d");

  xhr.onload = function() {
    if (xhr.status === 200) {
      getCustomerDetails(JSON.parse(xhr.responseText));
    } else {
      document.querySelector('body').innerHTML = 'sorry, sth went wrong...';
      console.log("error");
    }
  }

  xhr.send();

}



function getCustomerDetails(data) {
  console.log(data);

  var name = window.markName;
  name.textContent = data.Name;

  var street1 = window.firstParagraph;
  var street2 = window.secondParagraph;
  var city = window.thirdParagraph;
  var state = window.fourthParagraph;
  var zipCode = window.fifthParagraph;
  var country = window.sixthParagraph;

  street1.textContent = data.Address.Street1;
  street2.textContent = data.Address.Street2;
  city.textContent = data.Address.City;
  state.textContent = data.Address.State;
  zipCode.textContent = data.Address.PostalCode;
  country.textContent = data.Address.Country;

  // console.log(data);
  //
  // var index = getQueryVariable("index");
  //
  // var name = window.markName;
  // name.textContent = data.Content[index].Name;
  //
  // var street1 = window.firstParagraph;
  // var street2 = window.secondParagraph;
  // var city = window.thirdParagraph;
  // var state = window.fourthParagraph;
  // var zipCode = window.fifthParagraph;
  // var country = window.sixthParagraph;
  //
  // street1.textContent = data.Content[index].Address.Street1;
  // street2.textContent = data.Content[index].Address.Street2;
  // city.textContent = data.Content[index].Address.City;
  // state.textContent = data.Content[index].Address.State;
  // zipCode.textContent = data.Content[index].Address.PostalCode;
  // country.textContent = data.Content[index].Address.Country;

}



// ------------------------------------------- New Account Container Options ------------------------------------

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("editAccount");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that saves data
var updateBtn = document.getElementById("updateBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks 'save' button new data will be add to table
updateBtn.onclick = function() {

  var street1 = document.getElementById("street").value;
  var street2 = document.getElementById("street2").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var postCode = document.getElementById("postCode").value;
  var country = document.getElementById("selectCountry").value;

  // delete all values
  document.getElementById('firstParagraph').innerHTML = '';
  document.getElementById('secondParagraph').innerHTML = '';
  document.getElementById('thirdParagraph').innerHTML = '';
  document.getElementById('fourthParagraph').innerHTML = '';
  document.getElementById('fifthParagraph').innerHTML = '';
  document.getElementById('sixthParagraph').innerHTML = '';

  // insert new values
  document.getElementById('firstParagraph').innerHTML = street1;
  document.getElementById('secondParagraph').innerHTML = street2;
  document.getElementById('thirdParagraph').innerHTML = city;
  document.getElementById('fourthParagraph').innerHTML = state;
  document.getElementById('fifthParagraph').innerHTML = postCode;
  document.getElementById('sixthParagraph').innerHTML = country;

  modal.style.display = "none";

}
