import { Component } from "react";
import { View, Button, Text, CustomWrapper } from "@tarojs/components";

import "./index.less";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      innerCounter: 1,
      show: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((preState) => ({
        innerCounter: preState.innerCounter + 1,
      }));
    }, 100);
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    console.log("render", this.state);
    return (
      <View>
        <Button
          onClick={() => {
            this.setState((preState) => ({
              counter: preState.counter + 1,
              innerCounter: preState.innerCounter + 1,
              show: !preState.show,
            }));
          }}
        >
          +
        </Button>
        {this.state.show && (
          <View>
            <Text>Show</Text>
          </View>
        )}
        <Text>outer:{this.state.counter}</Text>
        <CustomWrapper>
          <Text>CustomWrapper inner:{this.state.innerCounter}</Text>
        </CustomWrapper>
      </View>
    );
  }
}

export default Index;
