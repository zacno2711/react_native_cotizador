import {View, Text, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ChatItem from './src/components/ChatItem';
import ChatList from './src/screens/ChatList';
import Chat from './src/screens/chat';

const chat = {
  id: 1,
  user: {
      img: "",
      name: "KAKUSO"
  },
  lastMessage:{
      text:"hola como vamos?",
      createAt: "10:30"
  }
}

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {/* <ChatItem chat={chat}/> */}
        {/* <ChatList/> */}
        <Chat/>
        <StatusBar/>
      </View>
    </>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent:"center"
  }
})