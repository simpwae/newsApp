apikey = "ddcff688a1b47476efb9b8f7642e2c20";
url =
  "https://gnews.io/api/v4/search?q=example&lang=en&country=pk&max=10&apikey=" +
  apikey;

axios
  .get(url)
  .then(function (response) {
    console.log(response.data.articles);
    let str = "";
    for (let items of response.data.articles) {
      str =
        str +
        ` <div class="card my-4 mx-2" style="width: 18rem">
  <img src="${items.image}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${items.title}</h5>
    <p class="card-text">
    ${items.description}
    </p>
    <a href="${items.source.url}" target="_blank" class="btn btn-primary">Visit Website ></a>
  </div>
  </div>
  </div>`;
    }
    document.querySelector(".content").innerHTML = str;
    document.querySelector("#resultCount").innerHTML =
      response.data.totalArticles;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
