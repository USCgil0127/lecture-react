import View from "./View";
import { qs } from "../helpers";

export default class SearchFormView extends View {
  constructor() {
    super(qs("#search-form-view"));

    this.resetElement = qs("[type=reset]", this.element);
    this.showResetButton(false);
  }

  showResetButton(visible = true) {
    // visible 이 true 이면, 'block'을 주고, 아니면 'None'
    this.resetElement.style.display = visible ? "block" : "none";
  }
}

// 이 새로운 view는 컨트롤러에 집어넣어줘야 한다.

// X 버튼을 안보이게 했다가 값이 들어오면, 보이게 하는 방법
// const inputTag = document.querySelector("form input");

// const btn = document.querySelector(".btn-reset");
// btn.style.display = "none";

// inputTag.addEventListener("input", function (e) {
//   if (inputTag.value.length === 0) {
//     btn.style.display = "none";
//   } else {
//     btn.style.display = "block";
//   }
// });
