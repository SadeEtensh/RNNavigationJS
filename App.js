import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Pressable, Text } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          contentStyle: {
            backgroundColor: "#e8e4f1",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Pressable onPress={() => alert("Menu Button pressed")}>
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  Menu
                </Text>
              </Pressable>
            ),
            contentStyle: {
              // screen specific option
              backgroundColor: "#e8e4f1",
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{
            name: "Guest",
          }}
          options={({ route }) => {
            title: route.params.name;
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
