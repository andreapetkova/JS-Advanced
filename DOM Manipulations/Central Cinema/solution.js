function solve() {
  const input = {
    name: document.getElementById("container").children[0],
    hall: document.getElementById("container").children[1],
    price: document.getElementById("container").children[2],
  };

  const moviesOnScreen = document.getElementById("movies").children[1];
  const archive = document.getElementById("archive").children[1];

  document
    .getElementById("container")
    .children[3].addEventListener("click", addMovie);

  function addMovie(event) {
    event.preventDefault();

    if (
      input.name.value &&
      input.hall.value &&
      input.price.value &&
      !Number.isNaN(Number(input.price.value))
    ) {
      let newMovie = document.createElement("li");

      let currName = createElement("span", input.name.value);
      let currHall = createElement("strong", `Hall: ${input.hall.value}`);

      let div = document.createElement("div");
      let currPrice = createElement("strong", Number(input.price.value).toFixed(2));
      let ticketsSold = document.createElement("input");
      ticketsSold.placeholder = "Tickets Sold";
      let buttonArchive = createElement("button", "Archive");
      div.appendChild(currPrice);
      div.appendChild(ticketsSold);
      div.appendChild(buttonArchive);

      newMovie.appendChild(currName);
      newMovie.appendChild(currHall);
      newMovie.appendChild(div);

      moviesOnScreen.appendChild(newMovie);
      Object.values(input).forEach((i) => (i.value = ""));

      buttonArchive.addEventListener("click", movieArchive);

      function movieArchive() {
        if (ticketsSold.value && !Number.isNaN(Number(ticketsSold.value))) {
          let totalPrice = Number(ticketsSold.value) * Number(currPrice.textContent);
          currHall.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
          div.remove();

          let buttonDelete = createElement("button", "Delete");
          newMovie.appendChild(buttonDelete);
          archive.appendChild(newMovie);

          buttonDelete.addEventListener("click", onDelete);

        }
      }

      document.querySelector("#archive button").addEventListener("click", onClear);
      
      function onDelete() {
        newMovie.remove();
      }

      function onClear() {
         Array.from(archive.childNodes).forEach(li => li.remove())
      }

    }
  }

  function createElement(type, content) {
    let el = document.createElement(type);
    el.textContent = content;
    return el;
  }
}
