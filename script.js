

let searchInput = document.getElementById("text");

let searchEngine = document.getElementsByName("searchEngine");
console.log(searchEngine)
let submitBtn = document.getElementById("submitBtn");
let searchForm = document.getElementById("searchForm");
let results = document.getElementById("results");

searchForm.addEventListener('submit', function (e) {
  results.innerHTML = "";
  e.preventDefault();
  for (i = 0; i < searchEngine.length; i++) {

    if (searchEngine[i].checked) {

      // document.location.href = `index.html?input=${searchInput.value}&searchEngine=${searchEngine[i].value}`;
      if (searchEngine[i].value == "google") {

        googleSearch(searchInput.value);
      }
      


    }
  }

})




