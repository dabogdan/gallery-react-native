import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home";
import ViewImage from "./src/components/ViewImage";
import { useEffect, useState } from "react";
import axios from "axios";
import { ActivityIndicator } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPics = async () => {
    setLoading(true);
    const result = await axios(
      'https://api.unsplash.com/photos?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
    );
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getPics();
  }, []);

  return (
    isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ title: "Gallery" }} data={data}>
            {props => <Home {...props} data={data} />}
          </Stack.Screen>
          <Stack.Screen name="ViewImage" component={ViewImage} options={{ title: "Image view" }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

export default App;
