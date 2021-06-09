import React from "react";
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Retrive to get username",
      email: "Retrive to get email",
    };
  }

  on_press = () => {
    AsyncStorage.getItem("user_name").then((value) => {
      if (value == null) {
        //If value is not set or your async storage is empty
        this.setState({ username: "Value not found" });
      } else {
        //Process your data
        this.setState({ username: 'Welcome User ' +  value });
      }
    });

    AsyncStorage.getItem("email_id").then((value) => {
      if (value == null) {
        //If value is not set or your async storage is empty
        this.setState({ email: "Value not found" });
      } else {
        //Process your data
        this.setState({ email: 'Your Email-Id is ' +  value });
      }
    });
  };

  render() {
    const { username, email } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.on_press()}>
          <Text style={styles.buttonStyle}>Click to retrive data</Text>
        </TouchableOpacity>

        <Text>{username}</Text>
        <Text>{email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderView: {
    width: "100%",
    height: "11%",
    elevation: 2,
    backgroundColor: "#FFFFFF",
  },
  headerText: {
    fontSize: 25,
    paddingTop: 30,
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
  },
});
