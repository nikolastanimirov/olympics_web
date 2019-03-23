import React from "react";

import { View, Image } from "react";

import Swiper from "react";

const Slider = props => (
  <View style={styles.container}>
    <Image style={styles.image} source={props.uri} />
  </View>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex: 1
  }
};
class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSlider: [
        require("../sources/sponsors/amizade.png"),
        require("../sources/sponsors/amizade.png"),
        require("../sources/sponsors/amizade.png")
      ]
    };
  }
  render() {
    return (
      <View>
        <Swiper autoplay height={240}>
          {this.state.imageSlider.map((item, i) => (
            <Slider uri={item} key={i} />
          ))}
        </Swiper>
      </View>
    );
  }
}

export default Slide;
