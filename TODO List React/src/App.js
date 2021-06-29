import { Component } from "react/cjs/react.production.min";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id != id);

    this.setState({
      list: updatedList
    });
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">MY TO DO LIST</h1>
        <div className="container">
          <div>Add item..
            <br />
            <input
              type="text"
              placeholder="Type new item"
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <button className="btn"
              onClick={e => this.addItem()}
            >Add it</button>
            <br />
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button className="btn" onClick={() => this.deleteItem(item.id)}>X</button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
