import React from "react";
import { Dimensions, ImageBackground, View } from "react-native";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const ViewImage = (props) => {
  return (
    <View>
      <ImageBackground source={{ uri: props.route.params.uri }} style={{width: deviceWidth, height: deviceHeight}}/>
    </View>
  );
};

export default ViewImage;
