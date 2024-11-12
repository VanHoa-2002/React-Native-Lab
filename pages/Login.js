import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { UserContext } from "./userContext";
import { Buffer } from "buffer";

export default function Login() {
  const [userName, setUserName] = useState("mor_2314");
  const [password, setPass] = useState("83r5^_");
  const [token, setToken] = useState("");
  const { user, setUser } = useContext(UserContext);
  const login = () => {
    if (!userName) {
      alert("Please fill UserName");
      return;
    }
    if (!password) {
      alert("Please fill Password");
      return;
    }
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: userName, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
        const user = decodeToken(JSON.stringify(data.token));
        console.log(user);

        setUser(user);
        // alert("Login Sucess");
      })
      .catch((error) => {
        console.log(error);

        alert("Login Fail");
      });
  };
  const decodeToken = (token) => {
    const parts = token
      .split(".")
      .map((part) =>
        Buffer.from(
          part.replace(/-/g, "+").replace(/_/g, "/"),
          "base64"
        ).toString()
      );
    const payload = JSON.parse(parts[1]);
    alert(JSON.stringify(payload));
    return { username: payload.user, id: payload.sub };
  };
  return (
    <View style={styles.container}>
      <View style={styles.controlContainer}>
        <Text>User Name</Text>
        <TextInput
          value={userName}
          onChangeText={setUserName}
          style={styles.control}
        ></TextInput>
      </View>
      <View style={styles.controlContainer}>
        <Text>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPass}
          secureTextEntry={true}
          keyboardType="default"
          style={styles.control}
        ></TextInput>
      </View>
      <TouchableOpacity onPress={login} style={styles.btn}>
        <Text style={styles.btn.label}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  controlContainer: {
    backgroundColor: "#fff",
    margin: 10,
  },
  control: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    overflow: "hidden",
    padding: 5,
  },
  btn: {
    backgroundColor: "tomato",
    padding: 10,
    margin: 10,
    alignItems: "center",
    borderRadius: 4,
    label: {
      fontSize: 16,
      fontWeight: 600,
    },
  },
});
