import React, { Component } from "react";
import { View } from "react-native";
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#52555A" }}>
        <LottieView
          source={require("./splashJson/MoreAnimation.json")}
          autoPlay={true}
          loop={true}
          speed={1}
          onAnimationFinish={() => {
            console.log("Animation Finished");
          }}
        />
      </View>
    );
  }
}