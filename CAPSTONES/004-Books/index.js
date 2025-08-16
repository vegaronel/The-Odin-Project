const bookList = document.querySelector("#book-list");
const title = document.getElementById("title");
const addButton = document.querySelector("#addButton");
const showModal = document.getElementById("showModal");
const newBookModal = document.querySelector(".action-container");
const closeButton = document.getElementById("closeButton");
const errorTitle = document.getElementById("error-title");
const imageLink = document.getElementById("image-link");

const myLibrary = [];

function Books(id, title, img, finished) {
  this.id = id;
  this.title = title;
  this.img = img;
  this.finished = finished;
}

function addBookToLibrary() {
  const readStatus = document.querySelector('input[name="finished"]:checked');
  if (!title.value) {
    return (errorTitle.style.display = "block");
  }
  const newBook = new Books(
    crypto.randomUUID(),
    title.value,
    imageLink.value,
    readStatus.value
  );
  myLibrary.push(newBook);
  showBooks();
  title.value = "";
  imageLink.value = "";
  errorTitle.style.display = "none";
  newBookModal.style.display = "none";
}

function showBooks() {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h2");
  const isRead = document.createElement("small");

  myLibrary.forEach((item) => {
    div.classList.add("book-item");
    img.classList.add("book-image");
    isRead.textContent = item.finished;
    img.src = item.img
      ? item.img
      : "https://media.istockphoto.com/id/162833245/photo/blank-book.jpg?s=612x612&w=0&k=20&c=7e-A5MDfHe0hGY2tO3WI_MgrGQ5HWgigMEVkKk1bR14=";
    title.textContent = item.title;
    div.append(img);
    div.append(title);
    div.append(isRead);
    bookList.append(div);
  });
}

showBooks();
addButton.addEventListener("click", addBookToLibrary);

showModal.addEventListener("click", function () {
  newBookModal.style.display = "block";
});
closeButton.addEventListener("click", function () {
  newBookModal.style.display = "none";
});
