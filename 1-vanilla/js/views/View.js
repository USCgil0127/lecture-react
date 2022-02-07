import { emit, on } from "../helpers.js";

const tag = "[View]";

// 모든 View들이 공통으로 사용하는 클래스
export default class View {
  constructor(element) {
    if (!element) throw "no element";

    this.element = element;
    this.originalDisplay = this.element.style.display || "";

    return this;
  }

  hide() {
    this.element.style.display = "none";
    return this;
  }

  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }
  
  on(eventName, handler) {
    // 애드 이벤트 리스너 에서 ( 클릭, 함수 )
    on(this.element, eventName, handler);
    return this;
  }

  emit(eventName, data) {
    emit(this.element, eventName, data);
    return this;
  }
}
