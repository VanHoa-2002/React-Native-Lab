import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Icon } from "react-native-elements";
import { data } from "../data/data";
export default function Social() {
  const [like, setLike] = useState(true);
  const [active, setActive] = useState(true);
  const dataSocial = data;
  const click = (item, type) => {
    switch (type) {
      case "like":
        item.isLike = like;
        item.like += like ? 1 : -1;
        break;

      case "share":
        item.share += 1;
        break;

      case "comment":
        item.comment += 1;
        break;

      default:
        break;
    }
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.item.header}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={{
              uri: item.avatar,
            }}
          ></Image>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.name}</Text>
        </View>
        <Text style={{ fontSize: 15 }}>{item.content}</Text>
        <Image
          style={{ height: 250, borderRadius: 10, width: "100%" }}
          source={item.imgContent}
        ></Image>
        <View style={styles.item.controls}>
          <Text style={styles.item.controls.buttonControl}>
            {item.like} Like
          </Text>
          <Text style={styles.item.controls.buttonControl}>
            {item.comment} Comment
          </Text>
          <Text style={styles.item.controls.buttonControl}>
            {item.share} Share
          </Text>
        </View>
        <View style={styles.item.line}>
          <Text></Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              setLike(!like);
              click(item, "like");
            }}
          >
            <View style={styles.item.button}>
              <Icon
                name={item.isLike ? "thumbs-up" : "thumbs-o-up"}
                type="font-awesome"
                color={item.isLike ? "#4267B2" : "black"}
              />
              <Text style={styles.item.textBtn}>Likes</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setActive(!active);
              click(item, "comment");
            }}
          >
            <View style={styles.item.button}>
              <Icon name="comment-o" type="font-awesome" />
              <Text style={styles.item.textBtn}>Comments</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setActive(!active);
              click(item, "share");
            }}
          >
            <View style={styles.item.button}>
              <Icon name="share-outline" type="ionicon" />
              <Text style={styles.item.textBtn}>Shares</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Social Media Feed</Text>
      <FlatList renderItem={renderItem} data={dataSocial}></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    backgroundColor: "lightblue",
    padding: 10,
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  item: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 9,
    marginHorizontal: 9,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    header: {
      fontWeight: "bold",
      fontSize: 20,
      display: "flex",
      gap: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    controls: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      buttonControl: {
        color: "#bec2c3",
        borderRadius: 5,
        fontSize: 15,
      },
    },
    line: {
      width: "100%",
      height: 2,
      backgroundColor: "#bec2c3",
    },
    button: {
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
    },
    textBtn: {
      fontSize: 14,
      fontWeight: 600,
    },
  },
});
