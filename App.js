import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const data = [
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    content: "Had a great time at the beach today!",
    imgContent:
      "https://images.unsplash.com/photo-1726677644019-c010b789cf12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    like: 120,
    comment: 15,
    share: 8,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    content: "Just finished a fantastic book, highly recommend it!",
    imgContent:
      "https://images.unsplash.com/photo-1726758130089-97708decbc1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    like: 220,
    comment: 25,
    share: 14,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Mike Johnson",
    content: "Exploring the mountains this weekend. Nature is amazing!",
    imgContent:
      "https://images.unsplash.com/photo-1726538236643-2e50ca1ce8ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    like: 340,
    comment: 45,
    share: 23,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emily Davis",
    content: "Can’t believe I nailed my presentation at work!",
    imgContent:
      "https://images.unsplash.com/photo-1726812785096-855840814691?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    like: 280,
    comment: 30,
    share: 10,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Chris Lee",
    content: "Just bought a new car, loving it!",
    imgContent:
      "https://images.unsplash.com/photo-1726587891959-cc0b6dd20a5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    like: 400,
    comment: 50,
    share: 20,
  },
];
export default function App() {
  const [like, setLike] = useState(true);
  const [active, setActive] = useState(true);
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
          style={{ height: 250, borderRadius: 10 }}
          source={{
            uri: item.imgContent,
          }}
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
      <FlatList renderItem={renderItem} data={data}></FlatList>
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
