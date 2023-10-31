import React, { Component } from "react";
import { View, Text, CustomWrapper } from "@tarojs/components";

export default class Txt extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((preState) => {
        return { counter: preState.counter + 1 };
      });
    }, 1000);
  }

  update() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <CustomWrapper>
        <View>
          <Text>inner:{this.state.counter}</Text>
        </View>
      </CustomWrapper>
    );
  }
}
