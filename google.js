function googleSearch(search) {


    if (search.trim() == "" || search.trim() == " ") {
      return;
    }
  
    fetchData(search);
  
  }
  async function fetchData(search, page = 1) {
    results.innerHTML = " ";
  
    let response = await fetch(`https://api.serpstack.com/search?access_key=48926f2b524d7533b2b46e21e6f9d0e1&query=${search}&page=${page}`);
  
  
    let data = await response.json();
    console.log(data);
  
    data.organic_results.forEach((ele) => {
      let div = document.createElement("div");
      div.innerHTML = ` <a href="https://www.india.gov.in/" class="link">
                      <p class="domain">${ele.domain}</p>
                      <h4 class="title">${ele.title}</h4>
                  </a>
                  <div class="snippet">${ele.snippet}
                  </div>`
      div.classList.add("result", "mt-5");
      results.append(div);
    })
    let div2 = document.createElement("div");
    for (var i = 0; i < 10; i++) {
      let button = document.createElement("button");
      
      button.innerHTML = `${i + 1}`
      button.classList.remove('active')
      button.classList.add("m-1")
      button.addEventListener('click', function () {
        button.classList.add('active');
  
  
  
        fetchData(search, data.pagination.next_page)
  
      })
  
      div2.appendChild(button);
  
    }
    div2.classList.add("pagenation", "mt-5");
    results.append(div2);
    searchInput.value = " ";
  
  }