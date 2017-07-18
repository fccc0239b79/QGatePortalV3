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
  xhr.setRequestHeader("partnersecuritytoken", "QCSm2yn9RnydZ7k1RrVd9Ff+U0TmjkQAb2G8kJCxLO7A8FULzjPG8iD01vXWO1BIhErqP9T/dhxh81So/c/kJJ6ygmRGAl7Bz+pFFr/1/5ua7vlbQTd7cl4zjcyQqWNkFtxdvlNs90YAWjHnkMZM+SMArETEvLSPov/SAZUp4e2sss01");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("postman-token", "f58582bb-f99f-cad4-566a-f1beba294315");

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
function createContent(data) {
  var accountsNumber = data['Content'];



  for (var i = 0; i < accountsNumber.length; i++) {

    var accountId = accountsNumber[i].AccountID;

    var tableRow = document.createElement('tr');
    var tableCellAccountName = document.createElement('td');
    var accountDetailsLink = document.createElement('a');
    accountDetailsLink.id = i;
    accountDetailsLink.href = 'accountDetails.html?AccountID=' + accountId;
    // accountDetailsLink.href = 'accountDetails.html?index=' + i;
    accountDetailsLink.className = 'accountlink';
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
