import {Text, View, StyleSheet, Image} from "react-native"

function ChatItem({chat}){
    console.log(chat)
    return(
        <>
        <View style={styles.container}>
            <Image 
                source={{uri: chat.user.Image}}
                style={styles.img}/>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name}> {chat.user.name}</Text>
                    <Text style={styles.sub}> 10:30</Text>
                </View>
                <Text style={styles.sub}> hola como vamos ?</Text>
            </View>
        </View>
        </>
    )
}

const styles  = StyleSheet.create({
    img:{
        width:50,
        height:50,
        borderRadius:30
    },
    container:{
        flexDirection: "row",
        height: 70, 
        marginHorizontal:10,
        marginVertical:5
    },
    content:{
        flex: 1, 
        borderBottomColor: "gray",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 15

    },
    row:{
        flexDirection: "row",
    },
    name:{
        fontWeight: "bold",
        flex:1
    },
    sub:{
        color: "gray"
    }
})
export default ChatItem