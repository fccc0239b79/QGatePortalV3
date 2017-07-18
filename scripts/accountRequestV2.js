window.addEventListener('load', function() {
  setup();
});

/**
 * Function gets data from server.
 */
function setup() {

  var xhr = new XMLHttpRequest();

  xhr.withCredentials = true;

  // xhr.addEventListener("readystatechange", function () {
  //   if (this.readyState === 4) {
  //      getCustomerDetails(JSON.parse(xhr.responseText));
  //   }
  // });

  xhr.open("GET", "https://dev.qgatecloud.com/portals/partner/v1/accounts/search?criteria=&pageindex=1&pagesize=10");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("partnerportalauthorization", "11B856AB07624B129730692FC4BE357D3AAF7A8242A94470A32FB7C06C3464ED313AE456AAEFDCD4C918DBBE4DEA47B5048D993A2675FE6418597EB2BBE5971770F");
xhr.setRequestHeader("partnersecuritytoken", "QCSCFoNBYA5LmZr0mQ5nvz2v6QiJSOSFiRuHc2EIuHsL1BovGm7vlITKYMOUWVZxKoKliLxG2JBXb83YqwNLenqWHh8a4YNaWDk1xNwZQ/NvCVURC1GaJ7n1utJGRsweo/CsymZ/fvf8cv+XwK6rhWfvTGRXhD62W5sw3bIflAG2xg01");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "b7b2a996-95d1-3c55-c380-11f0244124cf");


  xhr.onload = function() {
    if (xhr.status === 200) {

      createContent(JSON.parse(xhr.responseText));
      // getCustomerDetails(JSON.parse(xhr.responseText));
    } else {
      document.querySelector('body').innerHTML = 'sorry, sth went wrong...';
      console.log("error");
    }
  }

  xhr.send();

}


/**
* Function creates new table content depends on number of accounts in db.
*/

// global variable to deleteRow


function createContent(data) {
  var accountsNumber = data['Content'];

var accountID;

  for (var i = 0; i < accountsNumber.length; i++) {


    //console.log(accountsNumber[i].AccountID);


    var tableRow = document.createElement('tr');
    var tableCellAccountName = document.createElement('td');
    var accountDetailsLink = document.createElement('a');
    accountDetailsLink.id = i;
    accountDetailsLink.href = 'accountDetails.html';
    // accountDetailsLink.href = 'accountDetails.html?index=' + i;
    accountDetailsLink.className = 'accountlink';
    //accountDetailsLink.addEventListener("click", func, false);
    accountDetailsLink.onclick = function() {accountID = accountDetailsLink.id; alert(accountID)};

    var tableCellCity = document.createElement('td');
    var tableCellCountry = document.createElement('td');
    var tableCellRegion = document.createElement('td');

    accountDetailsLink.textContent = accountsNumber[i].Name;
    tableCellCity.textContent = accountsNumber[i].Address.City;
    tableCellCountry.textContent = accountsNumber[i].Address.Country;
    tableCellRegion.textContent = accountsNumber[i].Address.State;

    window.tableBody.appendChild(tableRow);
    tableRow.appendChild(tableCellAccountName);
    tableCellAccountName.appendChild(accountDetailsLink);
    tableRow.appendChild(tableCellCity);
    tableRow.appendChild(tableCellCountry);
    tableRow.appendChild(tableCellRegion);

  }


}

function func() {
  // var x = document.getElementById(i.innerText);
  // alert(x);
  alert("!");
}
