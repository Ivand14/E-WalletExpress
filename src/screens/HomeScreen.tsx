import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { dummyMessages, messages } from '../utils/dumissData'

import Assistant from '../components/molecules/Assistant'
import Features from '../components/molecules/Features'
import colors from '../constant/colors'

const HomeScreen = () => {

    const[message,setMessage] = useState<messages[]>(dummyMessages)
    
    return (
        <View style={styles.container}>
            {
                message.length > 0 ? <Assistant/> : <Features/>
            }
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginTop:60,
        backgroundColor:colors.primary,
        alignItems:'center'
    }
})