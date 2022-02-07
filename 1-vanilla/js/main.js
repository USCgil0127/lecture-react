import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";
// import SearchFormView from "./views/SearchFormView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main");
  const store = new Store(storage);

  const views = {
    // TODO
    // SearchFormView: new SearchFormView(),
  };

  new Controller(store, views);
}

// X 버튼을 안보이게 했다가 값이 들어오면, 보이게 하는 방법
const inputTag = document.querySelector("form input");

const btn = document.querySelector(".btn-reset");
btn.style.display = "none";

inputTag.addEventListener("input", function (e) {
  if (inputTag.value.length === 0) {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
});

// const target = inputTag.value;
// export function show_name(e) {
//   if (e.keyCode == 13) {
//     // 엔터키가 눌렸을 때
//     for (let i = 0; i < storage.productData.length; i++) {
//       const result = document.querySelector(".result");
//       if (storage.productData[i]["name"] === target) {
//         result.textContent = storage.productData[i]["name"];
//       } else {
//         result.textContent = "일치하는 검색결과가 없음!!";
//       }
//     }
//   }
// }

// console.log(storage.productData[0]["name"]);
