const hamburger = document.querySelector(".hamburger-menu");
const sideBar = document.querySelector(".side-bar");
const mealTable = document.querySelector(".meal-table");
const addButton = document.querySelector(".add-btn");
const deleteButton = document.querySelector(".delete-btn");

let hamburgerClicked = true;
hamburger.addEventListener("click", (e) => {
  sideBar.classList.toggle("hide", hamburgerClicked);
  for (const element of sideBar.children) {
    element.classList.toggle("hide", !hamburgerClicked);
  }
  hamburgerClicked = !hamburgerClicked;
});

addButton.addEventListener("click", (e) => {
  const tableRow = document.createElement("tr");
  const tableFoodData = document.createElement("td");
  const tableAmountData = document.createElement("td");

  // when this is for the meal you should pu mealname, for food, foodname
  const foodInputField = document.createElement("input");
  foodInputField.name = mealTable.children[0].children[1].children[0].children[0].name;
  foodInputField.type = "text";

  const amountInputField = document.createElement("input");
  amountInputField.name = mealTable.children[0].children[1].children[1].children[0].name;
  amountInputField.type = "number";

  tableAmountData.appendChild(amountInputField);
  tableFoodData.appendChild(foodInputField);

  tableRow.appendChild(tableFoodData);
  tableRow.appendChild(tableAmountData);
  mealTable.children[0].appendChild(tableRow);
});

deleteButton.addEventListener("click", (e) => {
  let lastTableRow = mealTable.children[0].children;
  const lastTableIndex = mealTable.children[0].children.length
  lastTableRow = mealTable.children[0].children[lastTableIndex - 1]
  mealTable.children[0].removeChild(lastTableRow)
});
// const foodButton = document.querySelector('.create-food-btn')
// foodButton.addEventListener('submit', e => {
//     let form = document.querySelector('.create-food-form')
//     alert('hey')
//     console.log(form)
// })
