class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(
      "TODO: handleSubmit 제출시 검색어 : ",
      this.state.searchKeyword
    );
    // this.setState({ searchKeyword: "" });

    this.handleReset();
  }

  handleReset() {
    this.setState(
      () => {
        return { searchKeyword: "" };
      },
      () => {
        console.log(
          "setState()가 완료 되는 시점에 돌아오는 콜백 함수 값 : ",
          this.state.searchKeyword
        );
      }
    );
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;

    // 검색어가 삭제됐다고 판단되면, 리셋버튼과 똑같은 효과를 냄
    if (searchKeyword.length <= 0) {
      return this.handleReset();
    }

    this.setState({ searchKeyword });
  }

  render() {
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form
            onSubmit={(event) => this.handleSubmit(event)}
            onReset={(event) => this.handleReset()}
            // TODO
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
              value={this.state.searchKeyword}
              onChange={(event) => this.handleChangeInput(event)}
            />
            {this.state.searchKeyword.length > 0 && (
              <button type="reset" className="btn-reset"></button>
            )}
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
