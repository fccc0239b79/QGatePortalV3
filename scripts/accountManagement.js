
function searchFunction() {

      let input, filter, table, tr, td, i;

      input = document.getElementById("mySearch");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");


      for (i = 0; i < tr.length; i++) {

            td = tr[i].getElementsByTagName("td")[0];

            if (td) {
                  if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                  } else {
                        tr[i].style.display = "none";
                  }
            }
      }
}




// ------------------------------------------- New Account Container Options ------------------------------------

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("newAccount");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that saves data
var saveBtn = document.getElementById("saveBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks 'save' button new data will be add to table
saveBtn.onclick = function() {

      let aName = document.getElementById("acName").value;
      var region = document.getElementById("selectRegion").value;
      var city = document.getElementById("city").value;
      var country = document.getElementById("selectCountry").value;

      var row = "";

      row += "<tr><td><a id='newLink'>" + aName + "</a></td><td>" + city + "</td><td>" + country + "</td><td>" + region + "</td></tr>";

      $(row).appendTo("#myTable tbody");

      var a = document.getElementById("newLink");
      a.setAttribute('href', '#');


      modal.style.display = "none";

}
