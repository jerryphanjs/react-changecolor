import React, { Component } from 'react';

//Component
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

//Style
import './css/Style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onResetDefault = this.onResetDefault.bind(this);
  }
  //Set state color
  onSetColor(params) {
    this.setState({
      color: params
    });
  }
  //Set fontSize
  onChangeSize(value) {
    // 8 <= size <= 36
      this.setState({
        fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
      });

  }
  //Setting default
  onResetDefault(value) {
    if(value) {
      this.setState({
        color: 'red',
        fontSize: 12
      });
    }
  }
  render() {
    return (
      <div className="container" style={{marginTop: '50px'}}>
        <div className="row">
          <ColorPicker
             color={this.state.color}
             onReceiveColor={this.onSetColor}
           />
          <SizeSetting
            fontSize={this.state.fontSize}
            onChangeSize={this.onChangeSize}
          />
        <Reset onSettingDefault={this.onResetDefault}/>
          <Result
            color={this.state.color}
            fontSize={this.state.fontSize}
          />
        </div>
      </div>
    );
  }
}

export default App;
