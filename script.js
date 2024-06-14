const imageDiv = document.querySelector(".image");

const API_KEY = "bb2006d9d3454578be1a99cfad65913d";

let category = "dogs";

fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${category}`,
    { mode: "cors" }
)
    .then(function (response) {
        return response.json();
    })

    .then(function (response) {
        let url = response.data.images.original.url;
        imageDiv.innerHTML = `<img src="${url}" alt="">`;
    });