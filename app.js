"use strict"

const button = document.querySelector(".button");
const gifList = document.querySelector(".gif-list");

/** Gets data from the Giphy API and prints it to the console */
async function getGif () {
  let response = await axios.get("http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=1")
  .then(appendGifToPage);
  console.log("data returned in function: ", response.data);
  return response.data;
}

function appendGifToPage(elem) {
  let newGif = document.createElement("div");
  newGif.innerHTML = `<p>This function works! ${elem}</p>`
  gifList.append(newGif);
}


button.addEventListener("click", getGif);