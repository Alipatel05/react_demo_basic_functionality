import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "./components/Header";
import CarsList from "./components/CarsList";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Dashboard from "./screens/Dashboard";
import SideNavigation from "./screens/SideNavigation";
import SplashScreen from "./screens/SplashScreen";
import firebase from "firebase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { render } from "react-dom";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const navigation = useNavigation();

const firebaseConfig = {
  apiKey: "AIzaSyAGbXvNLl9wFOwcGWWsSZEXWNAcGTV27Ys",
  authDomain: "rndemo-491e8.firebaseapp.com",
  projectId: "rndemo-491e8",
  storageBucket: "rndemo-491e8.appspot.com",
  messagingSenderId: "634857888701",
  appId: "1:634857888701:web:315f22db428a0ffe1610d4",
  measurementId: "G-HDFDEHS50Q",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Home = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonOne}>
        <Button
          title="Go To Tesla Clone"
          onPress={() => navigation.navigate("settings")}
        />
      </View>

      <View style={styles.buttonOne}>
        <Button
          title="Go To Login And Validations"
          onPress={() => navigation.navigate("login")}
        />
      </View>

      <View style={styles.buttonOne}>
        <Button
          title="Go To Registration And Data Parsing"
          onPress={() => navigation.navigate("registration")}
        />
      </View>
      <View style={styles.buttonOne}>
        <Button
          title="Go To Side Navigation"
          onPress={() => navigation.navigate("sidenavigation")}
        />
      </View>
    </View>
  );
};
const Settings = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
};
const NavStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Splash"
      options={{ headerShown: false }}
      component={SplashScreen}
    />
    <Stack.Screen name="Menu" component={Home} />
    <Stack.Screen
      name="settings"
      options={{ title: "My Demo App" }}
      component={Settings}
    />
    <Stack.Screen name="login" options={{ title: "Login" }} component={Login} />
    <Stack.Screen
      name="registration"
      options={{ title: "Registration" }}
      component={Registration}
    />
    <Stack.Screen
      name="dashboard"
      options={{ headerShown: false }}
      component={Dashboard}
    />
    <Stack.Screen
      name="sidenavigation"
      options={({ navigation }) => ({
        title: "Side Navigation",
        headerStyle: { backgroundColor: "#FFFFFF" },
        headerLeft: () => (
          <Icon
            style={{ marginLeft: 15, color: "#000000" }}
            name={"menu"}
            size={25}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        ),
      })}
      component={SideNavigation}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    padding: 10,
  },
  buttonOne: {
    padding: 10,
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
  SplashScreen_RootView: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  SplashScreen_ChildView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BCD4",
    flex: 1,
  },
});
