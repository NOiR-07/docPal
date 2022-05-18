import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Card({ title, subtitle, imgUrl, onPress, quantiy }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {/* <View>
          <Image style={styles.img} source={{ uri: imgUrl }} />
        </View> */}
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subtitleText}>{subtitle}</Text>
        </View>
        <View>
          <Text style={styles.quantityText}>{quantiy}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1,
    margin: 20,
    backgroundColor: "#F3F1F5",
    overflow: "hidden",
    borderColor: "#393E46",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  titleText: {
    color: "#082032",
    fontSize: 20,
    fontFamily: "Roboto",
    marginBottom: 5,
    paddingLeft: 10,
    paddingTop: 7,
    paddingBottom: 2,
  },
  subtitleText: {
    color: "#39A388",
    fontSize: 15,
    fontFamily: "sans-serif-light",
    paddingLeft: 10,
    paddingBottom: 11,
  },
  quantityText: {
    color: "#082032",
    fontSize: 25,
    fontFamily: "Roboto",
    paddingLeft: 10,
    paddingBottom: 11,
    paddingRight: 20,
    paddingTop: 18,
  },
  img: {
    width: "100%",
    height: 200,
  },
});
