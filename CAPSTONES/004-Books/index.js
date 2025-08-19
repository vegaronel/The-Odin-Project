const bookList = document.querySelector("#book-list");
const title = document.getElementById("title");
const addButton = document.querySelector("#addButton");
const showModal = document.getElementById("showModal");
const newBookModal = document.querySelector(".action-container");
const closeButton = document.getElementById("closeButton");
const errorTitle = document.getElementById("error-title");
const imageFile = document.getElementById("imageFile");
const fileChosen = document.getElementById("fileChosen");
const description = document.getElementById("description");
const numberOfPages = document.getElementById("pages");

let myLibrary = [
  {
    id: crypto.randomUUID(),
    title: "To Kill a Mockingbird",
    img: "https://static1.squarespace.com/static/5fa57aacf5b0a90a76b0d7cc/t/6242b3435418df43b4c7d73c/1648538435933/Harper+Lee+-+To+Kill+A+Mockingbird.jpg?format=1500w",
    finished: "Read",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    pages: 243,
  },
  {
    id: crypto.randomUUID(),
    title: "The Great Gatsby",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg",
    finished: "Not Read",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    pages: 243,
  },
];
function Books(id, title, img, finished, description, pages) {
  this.id = id;
  this.title = title;
  this.img = img;
  this.finished = finished;
  this.description = description;
  this.pages = pages;
}

function addBookToLibrary(event) {
  event.preventDefault();
  const file = imageFile.files[0];

  const readStatus = document.querySelector('input[name="finished"]:checked');
  if (!title.value) {
    return (errorTitle.style.display = "block");
  }
  // if (!file) {
  //   return console.log("error uploading file");
  // }
  const newBook = new Books(
    crypto.randomUUID(),
    title.value,
    file
      ? URL.createObjectURL(file)
      : "https://avatars.githubusercontent.com/u/4441966?s=280&v=4",
    readStatus.value,
    description.value,
    pages.value
  );
  myLibrary.push(newBook);
  showBooks();
  title.value = "";
  imageFile.value = "";
  errorTitle.style.display = "none";
  newBookModal.style.display = "none";
  fileChosen.style.display = "none";
  description.value = "";
  numberOfPages.value = "";
}

function showBooks() {
  let html = "";

  if (myLibrary.length === 0) {
    return (bookList.innerHTML = `<h1 class="no-books">No books</h1>`);
  }
  myLibrary.forEach((item) => {
    html += `
      <div class="book-item">
          <img class="book-image" src="${item.img}" alt="${item.img}">
          <h2>${item.title}</h2>
          <small>Status: ${item.finished}</small>
          <p>Number of pages: ${item.pages}</p>
        <p class="description">${item.description}</p>
        <button class="delete-item" data-id="${item.id}">Delete</button>
      </div>
    `;
  });

  bookList.innerHTML = html;
}

showBooks();
addButton.addEventListener("click", addBookToLibrary);

showModal.addEventListener("click", function () {
  newBookModal.style.display = "block";
});
closeButton.addEventListener("click", function () {
  newBookModal.style.display = "none";
});

imageFile.addEventListener("change", function () {
  const currentImage = imageFile.files[0];
  if (currentImage) {
    fileChosen.style.display = "block";
    fileChosen.src = URL.createObjectURL(currentImage);
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-item")) {
    const id = event.target.dataset.id;
    deleteBook(id);
  }
});

function deleteBook(id) {
  const result = myLibrary.find((item) => item.id === id);
  if (result !== -1) {
    myLibrary.splice(result, 1);
  }
  showBooks();
}
