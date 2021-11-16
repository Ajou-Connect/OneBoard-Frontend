import React, { Component } from 'react';
import { version, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: [moment(), moment()],
    };
  }

  startIncrease = () => {
    const startTime = this.state.range[0].add(1, 'days');
    console.log('startIncrease: ', startTime.format(dateFormat));
    this.setState({
      range: [startTime, this.state.range[1]],
    });
  };

  startDecrease = () => {
    const startTime = moment(this.state.range[0]).subtract(1, 'days');
    console.log('startDecrease: ', startTime.format(dateFormat));
    this.setState({
      range: [startTime, this.state.range[1]],
    });
  };

  endIncrease = () => {
    const endTime = this.state.range[1].add(1, 'days');
    console.log('endIncrease: ', endTime.format(dateFormat));
    this.forceUpdate();
    // this.setState({
    //   range: [this.state.range[0], endTime]
    // });
  };

  endDecrease = () => {
    const endTime = this.state.range[1].subtract(1, 'days');
    this.setState({
      range: [this.state.range[0], endTime],
    });
  };

  render() {
    const timeStr =
      this.state.range.length !== 0
        ? `From ${this.state.range[0].format(dateFormat)} to ${this.state.range[1].format(
            dateFormat,
          )}`
        : 'Please enter time';
    return (
      <div className="App">
        <p>Current antd version: {version}</p>
        <span> {timeStr} </span>
        <p style={{ marginTop: 20 }}>
          <b>
            It's correct to choose dates of these two below, but it's error when type date in second
            picker.
          </b>
        </p>
        <p>Not assign value. (Correct)</p>
        <RangePicker format={dateFormat} />
        <p style={{ marginTop: '1rem', color: 'red' }}>Assign value. (Not Correct)</p>
        <RangePicker
          defaultValue={this.state.range}
          format={dateFormat}
          onChange={(value, dateString) => this.setState({ range: value })}
        />
        <div className="button-container">
          <button onClick={this.startIncrease}>start increase</button>
          <button onClick={this.startDecrease}>start decrease</button>
          <button onClick={this.endIncrease}>end increase</button>
          <button onClick={this.endDecrease}>end decrease</button>
        </div>
      </div>
    );
  }
}

export default Test;
