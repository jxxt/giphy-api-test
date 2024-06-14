const imageDiv = document.querySelector(".image");

const categoryInput = document.querySelector(".category");
const submit = document.querySelector(".submit");

const newBtn = document.querySelector(".new");

const API_KEY = "bb2006d9d3454578be1a99cfad65913d";

const loadGif = (category) => {
    fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${category}`,
        { mode: "cors" }
    )
        .then(function (response) {
            return response.json();
        })

        .then(function (response) {
            let url = response.data.images.original.url;
            console.log(url);
            imageDiv.innerHTML = `<img src="${url}" alt="">`;
        });
};

submit.addEventListener("click", () => {
    let category = categoryInput.value;
    console.log(category);

    loadGif(category);
});

//

newBtn.addEventListener("click", () => {
    let category = categoryInput.value;
    console.log(category);

    loadGif(category);
});
