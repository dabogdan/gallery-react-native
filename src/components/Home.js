import React from "react";
import { TouchableOpacity, View, Image, Dimensions, ScrollView, Text } from "react-native";
import s from "../components/Home.module.css";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Home = props => {
  const images = props.data;
  return (
    <ScrollView>
      <View className={s.view}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              props.navigation.navigate("ViewImage", { uri: image.urls.regular });
            }}>
            <Image
              source={{ uri: image.urls.regular }}
              className={s.image}
              style={{
                height: deviceHeight / 3,
                width: deviceWidth / 3 - 6,
              }}
            />
            <View style={s.innerFrame}>
              <Text className={s.picName} style={{width: deviceWidth / 3 - 10}}>
                {image.description}
              </Text>
              <Text className={s.author} style={{width: deviceWidth / 3 - 10}}>
                {image.user.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
