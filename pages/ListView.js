import React, { useContext, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { dataWorkout } from "../data/data";
import { UserContext } from "./userContext";

export default function ListView() {
  const [selected, setSelected] = useState([]);
  const { user } = useContext(UserContext);

  const workout = dataWorkout;
  function addSelected(item) {
    if (item.selected) {
      setSelected([...selected, item]);
    } else {
      setSelected(selected.filter((i) => i.id !== item.id));
    }
  }
  const Footer = (selected) => {
    return (
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 500,
            backgroundColor: "orange",
            padding: 10,
            textAlign: "center",
          }}
        >
          Selected Workout {user.username}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            flexWrap: "wrap",
            borderWidth: 1,
            padding: 10,
            marginTop: 10,
            borderStyle: "dashed",
          }}
        >
          {selected.length === 0 && (
            <Text
              style={{
                color: "green",
              }}
            >
              No data selected
            </Text>
          )}
          {selected.map((data) => {
            return (
              <Text
                style={{
                  color: "blue",
                  borderWidth: 1,
                  padding: 10,
                  borderStyle: "solid",
                  backgroundColor: "lightblue",
                }}
                key={data.id}
              >
                {data.name}
              </Text>
            );
          })}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={workout}
        key={"id"}
        keyboardDismissMode="on-drag"
        ListHeaderComponent={
          <Text
            style={{
              color: "orange",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              padding: 10,
            }}
          >
            List Workout
          </Text>
        }
        ListFooterComponent={Footer(selected)}
        renderItem={({ item }) => (
          <View style={styles.workoutContainer}>
            <Text>{item.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                item.selected = !item.selected;
                addSelected(item);
              }}
              activeOpacity={item.selected ? 1 : 0.5}
            >
              <Text>{!item.selected ? "Select" : "Un Selected"}</Text>
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
      <Text
        style={{
          textAlign: "center",
          padding: 10,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <FlatList
          style={{
            backgroundColor: "orange",
            padding: 10,
          }}
          key={"id"}
          data={selected}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        ></FlatList>
      </Text>
    </SafeAreaView>
  );
}
const styles = {
  workoutContainer: {
    dislay: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightblue",
    padding: 10,
    margin: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
  },
};
