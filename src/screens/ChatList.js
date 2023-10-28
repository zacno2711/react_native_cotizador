import { FlatList, Text } from "react-native"
import chats from "../../assets/data/chats.json"
import ChatItem from "../componentes/ChatItem"

function ChatList(){
    return(
        <>
            <FlatList
                data={chats}
                renderItem={({item})=><ChatItem chat={item}/>}
            />
        </>
    )
    }

export default ChatList