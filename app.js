"use strict"

const button = document.querySelector(".button");
const gifList = document.querySelector(".gif-list");

/** Gets data from the Giphy API and prints it to the console */
async function getGif () {
  // let response = await axios.get("http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=1")
  // .then(appendGifToPage);

  // return response.data;

  const response = await axios.get("http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=1");
  appendGifToPage(response.data.data[0].images.original.url)
  console.log(response);
  // console.log("data returned in function: ", response.data);
}


// const newGif = JSON.parse(getGif());
// console.log(newGif);

function appendGifToPage(elem) {
  let newGif = document.createElement("div");
  newGif.innerHTML = `<img src="${elem}">`
  gifList.append(newGif);
}






button.addEventListener("click", getGif);