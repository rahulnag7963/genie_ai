import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import genie from "../assets/genie.png";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import {
  TextInput,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import arr from "../assets/arr.png";
import user from "../assets/user.png";
import { groqApi } from "./components/groqApi";
import { MotiView } from "moti";
import { generateRandomWord } from "./components/words";
import { NavigationProp } from "@react-navigation/native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { opacity } from "react-native-redash";

interface Msg {
  id: string;
  msg: string;
  type: string;
}
const Message = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [content, setContent] = useState("");
  const [msgsUser, setMsgsUser] = useState<Msg[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [word, setWord] = useState<string>(generateRandomWord());

  const dur = 1000;

  const getNewWord = () => {
    const newWord = generateRandomWord();
    setWord(newWord);
    setContent("");
    setModalOpen(false);
    setMsgsUser([]);
  };

  const handlePlay = () => {
    setModalOpen(false);
    getNewWord();
  };

  const handleSend = async () => {
    console.log(word);
    console.log(msgsUser);
    const aiResponse = await groqApi(content, word);
    if (msgsUser.length === 0) {
      let uid1 = Date.now().toString();
      let uid2 = (Date.now() + 1).toString();

      setMsgsUser([{ id: uid1, msg: aiResponse, type: "1" }]);
      setMsgsUser((prevHistory) => [
        ...prevHistory,
        { id: uid2, msg: content, type: "2" },
      ]);
    } else {
      let uid1 = Date.now().toString();
      let uid2 = (Date.now() + 1).toString();

      setMsgsUser((prevHistory) => [
        ...prevHistory,
        { id: uid1, msg: aiResponse, type: "1" },
      ]);

      setMsgsUser((prevMsgs) => [
        ...prevMsgs,
        { id: uid2, msg: content, type: "2" },
      ]);
    }
    if (content == word) {
      setModalOpen(true);
    }
  };

  useFonts({
    Queensides: require("../assets/QueensidesMedium-x30zV.ttf"),
  });
  return (
    <GestureHandlerRootView>
      <View style={Styles.container}>
        <LinearGradient
          colors={["#4333bd", "#7767f0", "#bfb8f5"]}
          style={Styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0.5 }}
        >
          {msgsUser.length === 0 && (
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing", duration: 1500 }}
            >
              <View>
                <Image
                  source={genie}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    marginBottom: 20,
                    marginTop: 20,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <Text style={Styles.text}>Enter a message to get started!</Text>
              </View>
            </MotiView>
          )}
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={100}
          >
            {msgsUser.length != 0 && (
              <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "timing", duration: 500 }}
              >
                <FlatList
                  scrollEnabled={true}
                  data={msgsUser}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                    if (item.type == "1") {
                      return (
                        <View>
                          <MotiView
                            from={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: "timing", duration: dur }}
                          >
                            <View
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                marginTop: 40,
                              }}
                            >
                              <Image
                                source={genie}
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 100,
                                  marginBottom: 20,
                                  marginTop: 20,
                                  marginLeft: 20,
                                }}
                              />
                              <Text style={Styles.bubble}>{item.msg}</Text>
                            </View>
                          </MotiView>
                        </View>
                      );
                    }
                    if (item.type == "2") {
                      return (
                        <View>
                          <MotiView
                            from={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              type: "timing",
                              duration: dur + 2000,
                            }}
                          >
                            <View
                              style={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                flexWrap: "wrap",
                                marginTop: 20,
                              }}
                            >
                              <Image
                                source={user}
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 100,
                                  marginBottom: 20,
                                  marginTop: 20,
                                  marginRight: 20,
                                }}
                              />
                              <Text style={Styles.bubble2}>{item.msg}</Text>
                            </View>
                          </MotiView>
                        </View>
                      );
                    }
                    return null;
                  }}
                />
              </MotiView>
            )}
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                marginBottom: 20,
              }}
            >
              <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "timing", duration: 500 }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <TextInput
                    value={content}
                    placeholder="Type response"
                    onChangeText={(text) => setContent(text)}
                    style={{
                      backgroundColor: "white",
                      borderRadius: 20,
                      marginTop: 20,
                      height: 60,
                      width: "67.5%",
                      paddingLeft: 20,
                      fontFamily: "Queensides",
                      marginLeft: 20,
                    }}
                  />
                  <TouchableOpacity style={Styles.button} onPress={handleSend}>
                    <Image source={arr} style={{ width: 20, height: 20 }} />
                  </TouchableOpacity>
                </View>
              </MotiView>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </View>
      {modalOpen && (
        <View style={Styles.modal}>
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing", duration: 1000 }}
          >
            <Text style={Styles.text2}>You Win!</Text>
            <TouchableOpacity onPress={handlePlay} style={Styles.button2}>
              <LinearGradient
                colors={["#4333bd", "#7767f0", "#bfb8f5"]}
                style={Styles.gradient2}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.5 }}
              >
                <Text style={Styles.text2}>Play Again?</Text>
              </LinearGradient>
            </TouchableOpacity>
          </MotiView>
        </View>
      )}
    </GestureHandlerRootView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  modal: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  gradient2: {
    position: "absolute",
    borderRadius: 100,
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  text: {
    fontFamily: "Queensides",
    textAlign: "center",
    fontSize: 24,
  },
  text2: {
    fontFamily: "Queensides",
    textAlign: "center",
    fontSize: 24,
    color: "black",
    lineHeight: 65,
  },
  button: {
    borderRadius: 100,
    backgroundColor: "white",
    width: "15%",
    height: 60,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    borderRadius: 100,
    width: 200,
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  bubble: {
    fontFamily: "Queensides",
    padding: 10,
    fontSize: 24,
    lineHeight: 30,
    borderRadius: 20,
    backgroundColor: "#8e8e93",
    marginLeft: 10,
    width: "70%",
  },
  bubble2: {
    fontFamily: "Queensides",
    fontSize: 24,
    lineHeight: 30,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#0078FE",
    marginRight: 10,
    width: "70%",
  },
});

export default Message;
