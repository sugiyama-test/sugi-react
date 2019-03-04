import React, {Component} from 'react';
 
class App extends Component {
  // この関数を追加
  handleClick(event) {
    console.log('handleClick is called');
  }
 
  render() {
    return (
      <div>
        {/* 関数を呼び出す記述を追加 */}
        <button onClick={this.handleClick}>Get Data</button>
      </div>
    );
  }
}
 
export default App