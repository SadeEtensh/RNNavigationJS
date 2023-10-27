import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreeen from "./screens/DashboardScreeen";
import SettingScreen from "./screens/SettingScreen";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // drawerActiveBackgroundColor: "#330099",
            // drawerInactiveBackgroundColor: "orange",
            drawerActiveTintColor: "orange",
            drawerContentStyle: {
              backgroundColor: "#330099",
            },
          }}
        />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Dashboad" component={DashboardScreeen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
