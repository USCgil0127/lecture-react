class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "이게 들어가나?",
    };
  }

  handleChangeInput(event) {
    // // this.state.searchKeyword = event.target.value;
    // 이 변화 값만으로는 여전히 input 값이 변화되지 않는다.
    // 리엑트는 필요한 순간에만 UI를 그리는 render()를 돌린다.
    // 즉, state를 변경했다고 해서, 다시 render()를 돌리지는 않는다.
    // 다시 말해서, 이 상황에서는 강제로 돌리기 위한 메소드를 써줘야 한다.
    // // this.forceUpdate();
    // // // this.render();  // 이건 왜 안되지??
    // 그런데, 이러면 지금 Model : value 변경, Controller : 화면 변경
    // 하는 코드가 됐다.
    // 이렇게 하면, 뭔가 리엑트를 제대로 사용한 것처럼 보이지는 않는다.
    // 리엑트를 좀 더 올바르게 사용하려면, 리엑트 컴포넌트 스스로가 이 state의 변화를 인지하고, 스스로 render()를 호출하도록 해야한다.
    // **중요  : 컴포넌트의 상태를 변경하려면, 직접 수정하지 말고,
    // 컴포넌트 클래스가 제공하는 setState()하는 메소드를 사용하자!!
    //

    this.setState({
      // 이렇게 하면, 리엑트는 state가 변경됐는지를 인지하고 render()를 다시 그리게 된다.
      // 이 메소드는 " 컴포넌트의 상태를 변화시키겠다!! " 라고 하는 컴포넌트와의 직접적인 약속이다.
      searchKeyword: event.target.value,
    });
  }

  render() {
    // render()는 리엑트 엘리먼트를 반환해야 한다.
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
              value={this.state.searchKeyword}
              onChange={(event) => this.handleChangeInput(event)}
            />
            <button type="reset" className="btn-reset"></button>
          </form>
        </div>
      </>
    );
  }
}

// element 대신에 JSX 문법으로 <App />으로 전달해줬다.
ReactDOM.render(<App />, document.querySelector("#app"));

// input 에다가 무언가를 입력하면, change 이벤트가 발생한다.
// HTML에서는 onchange라는 이벤트를 써서 change 이벤트를 받는다.
// 그러나, JSX는 onChange 로 받는다.

// 리엑트에서 이벤트를 처리하는 핸들러 이름은 앞에 handle로 시작한다.
