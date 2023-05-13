const items = [
  {
    name: "orange",
    value: "🍊",
  },
  {
    name: "banana",
    value: "🍌",
  },
  {
    name: "dog",
    value: "🐶",
  },
  {
    name: "ambulance",
    value: "🚑",
  },
  {
    name: "dog",
    value: "🐷",
  },
  {
    name: "burger",
    value: "🍔",
  },
  {
    name: "orange2",
    value: "🍊",
  },
  {
    name: "banana2",
    value: "🍌",
  },
  {
    name: "dog2",
    value: "🐶",
  },
  {
    name: "ambulance2",
    value: "🚑",
  },
  {
    name: "dog2",
    value: "🐷",
  },
  {
    name: "burger2",
    value: "🍔",
  },
  {
    name: "orange2",
    value: "🍊",
  },
  {
    name: "banana2",
    value: "🍌",
  },
  {
    name: "dog2",
    value: "🐶",
  },
  {
    name: "ambulance2",
    value: "🚑",
  },
  {
    name: "dog2",
    value: "🐷",
  },
  {
    name: "burger2",
    value: "🍔",
  },
  {
    name: "orange3",
    value: "🍊",
  },
  {
    name: "banana3",
    value: "🍌",
  },
  {
    name: "dog3",
    value: "🐶",
  },
  {
    name: "ambulance3",
    value: "🚑",
  },
  {
    name: "dog3",
    value: "🐷",
  },
  {
    name: "burger2",
    value: "🍔",
  },
];
console.log(items[0]["name"]);
const board = document.querySelector(".board__container");
const move = document.getElementById("move");
items.sort(() => 0.5 - Math.random());

function Board() {
  for (let i = 0; i < items.length; i++) {
    let boardItem = `<div class="items" name="${items[i]["name"]}">
                     <h1>${items[i]["value"]}</h1></div>`;
    board.insertAdjacentHTML("beforeend", boardItem);
  }
  gameChecker();
}

function gameChecker() {
  let SelectedItem = [];
  let moveCount = 0;
  const item = document.querySelectorAll(".items");
  item.forEach((e) =>
    e.addEventListener("click", () => {
      e.classList.add("active");
      SelectedItem.push(e);
      moveCount += 1;
      move.innerText = moveCount;
      if (SelectedItem.length == 2) {
        Score(SelectedItem[0], SelectedItem[1]);
        SelectedItem = [];
      }
    })
  );
}
Board();

function Score(value1, value2) {
  if (
    value1.innerText == value2.innerText &&
    value1.attributes["name"].nodeValue != value2.attributes["name"].nodeValue
  ) {
    value1.classList.add("item-remove");
    value2.classList.add("item-remove");
  } else {
    setTimeout(() => {
      value1.classList.remove("active");
      value2.classList.remove("active");
    }, 1000);
  }
}
