import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', '#ccc']
    };
  }
  showColor(color) {
    return {
      backgroundColor: color
    };
  }
  //Set state color and active Class for each <span>
  setActiveColor(color) {
    this.props.onReceiveColor(color);
  }
  
  render() {
    const eleColors = this.state.colors.map((color, index) => {
      return <span
              key = {index}
              style = { this.showColor(color) }
              className = { this.props.color === color ? 'active' : ''}
              onClick = {() => {this.setActiveColor(color)}}
              >
              </span>
    });
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{minHeight: '80px'}}>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">ColorPicker</h3>
            </div>
            <div className="panel-body">
                { eleColors }
              <hr />
            </div>
          </div>
        </div>
    );
  }
}

export default ColorPicker;
