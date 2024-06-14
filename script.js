const imageDiv = document.querySelector(".image");

const categoryInput = document.querySelector(".category");
const submit = document.querySelector(".submit");

const newBtn = document.querySelector(".new");

const API_KEY = "bb2006d9d3454578be1a99cfad65913d";

const promisesLoadGif = (category) => {
    fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${category}`,
        { mode: "cors" }
    )
        .then((response) => {
            return response.json();
        })

        .then((response) => {
            let url = response.data.images.original.url;
            console.log(url);
            imageDiv.innerHTML = `<img src="${url}" alt="">`;
        });
};

const asyncLoadGif = async (category) => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${category}`,
        { mode: "cors" }
    );

    let responseJson = await response.json();

    let url = responseJson.data.images.original.url;
    console.log(url);
    imageDiv.innerHTML = `<img src="${url}" alt="">`;
};

submit.addEventListener("click", () => {
    let category = categoryInput.value;
    console.log(category);

    asyncLoadGif(category);
});

newBtn.addEventListener("click", () => {
    let category = categoryInput.value;
    console.log(category);

    asyncLoadGif(category);
});
