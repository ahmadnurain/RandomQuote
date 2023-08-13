const apiurl = "https://api.quotable.io/random";
const text = document.querySelector("p");
const author = document.querySelector(".author");
const button = document.querySelector("button");
const addbutton = document.querySelector(".button");
const createbutton = document.createElement("button");

button.addEventListener("click", () => {
  button.innerHTML = "Loading Quote...";
  fetch(apiurl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      //data quote random
      text.innerHTML = data.content;
      author.innerHTML = `-- ${data.author}`;
      button.innerHTML = "New Quote";

      //add button copy
      createbutton.innerHTML = "Copy Quote";

      createbutton.addEventListener("click", () => {
        navigator.clipboard.writeText(text.innerHTML + author.innerHTML);
        createbutton.innerHTML = "Copied text";
      });
      addbutton.appendChild(createbutton);
    })
    .catch((err) => {
      console.log(err);
    });
});
