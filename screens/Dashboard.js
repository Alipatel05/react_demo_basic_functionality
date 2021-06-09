import "react-native-gesture-handler";

import React from "react";
import { StyleSheet } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./bottomTabs/Home";
import Settings from "./bottomTabs/Settings";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class Dashboard extends React.Component {
  render() {
    const firstname = this.props.route.params.firstname;
    const lastname = this.props.route.params.lastname;
    const emailId = this.props.route.params.emailId;

    const Tab = createMaterialBottomTabNavigator();
    return (
      <Tab.Navigator
        activeColor="#000000"
        //if neccessary then uncomment inactive color
        // inactiveColor="#3E2465"
        barStyle={{ paddingBottom: 0, backgroundColor: "#FFFFFF" }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="tools" color={color} size={26} />
            ),
          }}
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
