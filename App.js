import React from "react";
import ListView from "./pages/ListView";
import Social from "./pages/Social";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Selection from "./pages/Selection";
import Login from "./pages/Login";
import { Text } from "react-native";
import { UserContextProvider } from "./pages/userContext";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Social") {
                iconName = focused ? "share-social-outline" : "share-social";
              } else if (route.name === "ListView") {
                iconName = focused ? "list-outline" : "list-circle";
              } else if (route.name === "Selection") {
                iconName = focused ? "apps-outline" : "apps-outline";
              } else if (route.name === "Login") {
                iconName = focused ? "log-out-outline" : "log-out-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              backgroundColor: "white",
              fontSize: 20,
              padding: 10,
            },
            tabBarLabelStyle: { fontSize: 12, fontWeight: 600 },
          })}
        >
          <Tab.Screen name="Social" component={Social} />
          <Tab.Screen name="ListView" component={ListView} />
          <Tab.Screen name="Selection" component={Selection} />
          <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}
