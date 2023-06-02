import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          name: 'Stepan',
          age: 25,
          isToggle: true,
          isToggleVisible: true,
      };
  }

  toggleHandler = () => {
      this.state.isToggle ?
          this.setState({name: 'Mykola', age: 30, isToggle: false}) :
          this.setState({name: 'Stepan', age: 25, isToggle: true});
  }

    toggleVisibility = () => {
      this.state.isToggleVisible ? this.setState({isToggleVisible: false}) : this.setState({isToggleVisible: true});
    }

  render() {
    return (
        <div className="index">
          <div>
              <p className={this.state.isToggleVisible ? '' : 'hide'}>
                  Name: {this.state.name}, age: {this.state.age}
              </p>
              <button onClick={this.toggleHandler}>Click on me</button>
              <button onClick={this.toggleVisibility}>
                  {this.state.isToggleVisible ? 'Скрыть' : 'Показать'}
              </button>
          </div>
        </div>
    );
  }
}


export default App;
