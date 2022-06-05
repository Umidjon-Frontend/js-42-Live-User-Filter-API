const filter = document.querySelector(".filter");
const userList = document.querySelector(".user-list");

const listItem = [];

filter.addEventListener("input", (e) => {
  filterData(e.target.value);
});

getData();

async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=50");
  const { results } = await res.json();

  userList.innerHTML = "";

  results.forEach((item) => {
    const li = document.createElement("li");

    listItem.push(li);

    li.innerHTML = `
      <img src=${item.picture.large} alt=${item.name.first}>
      <div class="user-info">
        <h4>${item.name.first} ${item.name.last}</h4>
        <p>${item.location.city}, ${item.location.country}</p>
      </div>
    `;
    userList.appendChild(li);
  });
}

function filterData(name) {
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(name.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
