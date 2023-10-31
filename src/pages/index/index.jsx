import { Component } from "react";
import { View, Button, Text } from "@tarojs/components";

import Txt from "./Txt.jsx";
import "./index.less";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // counter: 1, 
      show: true };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Button
          className="add_btn"
          onClick={() => {
            this.setState({
              // counter: this.state.counter + 1,
              show: !this.state.show,
            });
            this.txt.update();
          }}
        >
          +
        </Button>
        {/* <Text> outer:{this.state.counter}{this.state.show}</Text> */}
        {this.state.show && (
          <View>
            <Text>Show</Text>
          </View>
        )}
          <Txt
            ref={(e) => {
              this.txt = e;
            }}
          ></Txt>
      </View>
    );
  }
}

export default Index;
