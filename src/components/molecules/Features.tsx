import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Features = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://raw.githubusercontent.com/syednomishah/AI-Voice-Assistant-React-Native/main/assets/images/bot.png' }} style={styles.image} />

            <View>
                <Text style={styles.title}>Features</Text>


                <View style={styles.containerChatGpt}>
                    <View style={styles.ChatGpt}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/syednomishah/AI-Voice-Assistant-React-Native/main/assets/images/chatgptIcon.png' }} style={styles.imageGPT} />
                        <Text style={styles.titleGpt}>CHAT GPT</Text>
                    </View>
                    <Text style={styles.descriptionGpt}>ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.</Text>
                </View>

                <View style={styles.containerDalle}>
                    <View style={styles.ChatGpt}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/syednomishah/AI-Voice-Assistant-React-Native/main/assets/images/dalleIcon.png' }} style={styles.imageGPT} />
                        <Text style={styles.titleGpt}>DALL-E</Text>
                    </View>
                    <Text style={styles.descriptionGpt}>ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.</Text>
                </View>

                <View style={styles.containerSmart}>
                    <View style={styles.ChatGpt}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/syednomishah/AI-Voice-Assistant-React-Native/main/assets/images/smartaiIcon.png' }} style={styles.imageGPT} />
                        <Text style={styles.titleGpt}>Smart AI</Text>
                    </View>
                    <Text style={styles.descriptionGpt}>ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.</Text>
                </View>
            </View>

        </View>
    )
}

export default Features

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },
    image: {
        height: 200,
        width: 200
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom:10,
        padding:10
    },
    imageGPT: {
        height: 30,
        width: 30,
    },
    containerChatGpt: {
        flexDirection: 'column',
        backgroundColor: '#4ae2bf',
        justifyContent: 'flex-start',
        borderRadius: 10,
        padding:10,
        margin:10
    },
    titleGpt: {
        fontSize: 17,
    },
    ChatGpt:{
        flexDirection:'row',
        alignItems: 'center',
        gap: 10,
        marginTop:10
    },
    descriptionGpt:{
        fontSize:15,
        marginTop:10,
        padding:5
    },
    containerSmart: {
        flexDirection: 'column',
        backgroundColor: 'rgb(165 243 252)',
        justifyContent: 'flex-start',
        borderRadius: 10,
        padding:10,
        margin:10
    },
    containerDalle: {
        flexDirection: 'column',
        backgroundColor: 'rgb(233 213 255)',
        justifyContent: 'flex-start',
        borderRadius: 10,
        padding:10,
        margin:10
    },
})