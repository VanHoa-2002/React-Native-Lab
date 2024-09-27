import React, { Component } from "react";
import {
  ImageBackground,
  SafeAreaView,
  SectionList,
  Text,
  View,
} from "react-native";
import { fruit_Vegetable } from "../data/data";

const DATA = fruit_Vegetable;
export default class Selection extends Component {
  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: "https://cdn.prod.website-files.com/5d2fb52b76aabef62647ed9a/6195c8e178a99295d45307cb_allgreen1000-550.jpg",
        }}
        style={{ width: "100%", flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.title}>{item}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    backgroundColor: "#ccc",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    color: "green",
  },
  title: {
    fontSize: 24,
  },
};
