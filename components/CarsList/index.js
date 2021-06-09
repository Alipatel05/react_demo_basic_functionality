import React from "react";
import { View, Text, FlatList, Dimensions, Alert } from "react-native";
import CarItem from "../CarItem";

import styles from "./styles";
import cars from "./cars";

const CarsList = (props) => {

  //handling onPress action  
  getListViewItem = (item) => {  
    Alert.alert(item.key);  
}  

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
