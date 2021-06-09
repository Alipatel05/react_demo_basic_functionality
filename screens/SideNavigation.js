import * as React from "react";
import { View, Text, Button, CheckBox } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Home from "./bottomTabs/Home";
import Settings from "./bottomTabs/Settings";
import ChatScreen from "./ChatScreen";
import Profile from "./Profile";
import { RadioButton } from "react-native-paper";

function Feed({ navigation }) {
  const [value, setValue] = React.useState("first");
  const [isSelected, setSelection] = React.useState(false);
  return (
    <View>
      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <RadioButton.Item label="First item" value="first" />
        <RadioButton.Item label="Second item" value="second" />
      </RadioButton.Group>
      <Text>
        ------------------------------------------------------------------------------------------------------
      </Text>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <CheckBox value={isSelected} onValueChange={setSelection} />
        <Text style={{ margin: 6 }}>Do you want to check it?</Text>
      </View>
      <Text style={{ margin: 20, justifyContent: "center" }}>
        Is CheckBox selected: {isSelected ? "YES" : "NO"}
      </Text>
      <Text>
        ------------------------------------------------------------------------------------------------------
      </Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="ChatScreen" component={ChatScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}
export default class SideNavigation extends React.Component {
  render() {
    return <MyDrawer />;
  }
}
