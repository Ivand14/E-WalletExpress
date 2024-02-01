import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../../constant/colors'
import { dummyMessages } from '../../utils/dumissData'

const Assistant = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerAssistant}>
                <Image source={{ uri: 'https://raw.githubusercontent.com/syednomishah/AI-Voice-Assistant-React-Native/main/assets/images/bot.png' }} style={styles.image} />
                <Text style={styles.title}>Assistant</Text>
            </View>

            <View style={styles.containerChat}>
                <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                    {
                        dummyMessages.map((dm,index)=>{
                            if (dm.role === 'assistant') {
                                if(dm.content.includes('https')){
                                    //ai image
                                    return(
                                        <View key={index} style={styles.containerImgContent}>
                                            <Image
                                                source={{uri:dm.content}}
                                                style={styles.imgContent}
                                            />
                                        </View>
                                    )
                                }else{
                                    //text Response
                                    return(
                                        <View key={index}>
                                            <Text style={styles.textContent}>{dm.content}</Text>
                                        </View>
                                    )
                                }
                            }else{
                                return(
                                    <View key={index}>
                                        <Text style={styles.textUser}>{dm.content}</Text>
                                    </View>
                                )
                            }
                        })
                    }
                    
                </ScrollView>

            </View>
        </View>
    )
}

export default Assistant

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerAssistant: {
        alignItems: 'center',
        gap: 10
    },
    image: {
        width: 200,
        height: 200
    },
    title: {
        fontSize: 20,
        fontWeight: "700"
    },
    containerChat: {
        backgroundColor: '#B4B4B8',
        width: 380,
        height:380,
        margin: 20,
        borderRadius: 10,
        alignItems:'center',
        padding:10
    },
    textContent: {
        backgroundColor:colors.secondary,
        margin:10,
        borderRadius:10,
        padding:10,
        borderTopLeftRadius:0,
        width:300
    },
    textUser:{
        backgroundColor:'white',
        margin:5,
        borderRadius:10,
        padding:10,
        borderTopRightRadius:0,
        width:270,
        marginLeft:80
    },
    containerImgContent:{
        backgroundColor:colors.secondary,
        width:210,
        height:205,
        alignItems:'center',
        borderRadius:10,
        borderTopLeftRadius:0
    },
    imgContent:{
        width:200,
        height:190,
        padding:20,
        margin:5,
    }
})