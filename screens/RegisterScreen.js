import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    };
    // mengirim POST untuk backend
    axios
      .post("http://192.168.18.2:8000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration Success!",
          "Your account registered successfully!"
        );
        setName("");
        setEmail("");
        setPassword("");
        setImage("");
      })
      .catch((error) => {
        Alert.alert(
          "Failed to Register!",
          "An error occured while registering! Try again!"
        );
        console.log("Registration Failed!", error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 35, fontWeight: 600, marginBottom: 50 }}>
            Simple Chat App
          </Text>

          <Text style={{ color: "#4A55A2", fontSize: 17, fontWeight: 600 }}>
            Register Screen
          </Text>
          <Text
            style={{
              color: "#929292",
              fontSize: 17,
              fontWeight: "200",
              marginTop: 5,
            }}
          >
            Register your account
          </Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
            Name
          </Text>

          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={{
              fontSize: email ? 18 : 18,
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginVertical: 10,
              width: 300,
            }}
            placeholder="Your Name"
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholder="name@example.com"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholder="Password"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Image
            </Text>

            <TextInput
              value={image}
              onChangeText={(text) => setImage(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholder="Image URL"
            />
          </View>
          <Pressable
            onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: "#5671FF",
              padding: 15,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 17,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 30 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Have an Account? Login Now
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
