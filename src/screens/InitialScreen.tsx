import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import Slider from '../components/atoms/SliderComponent/Slider'
import colors from '../constant/colors'

const InitialScreen = () => {
    return (
        <View style={styles.container}>
            <Slider />

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.textButton}>Sing Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InitialScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#4a21ef',
        flex: 1,
        width: '100%'
    },
    colorText: {
        color: colors.text
    },
    buttons: {
        margin: 20
    },
    containerButtons: {
        marginTop: 5,
        gap: 30,
        alignItems: 'center',
    },
    textButton: {
        color: colors.text,
        fontSize: 20,
        textAlign: 'center'
    },
    Button: {
        backgroundColor: '#340fc8',
        width: 380,
        padding: 15,
        borderRadius: 20,
        borderColor:colors.terciary,
        borderWidth:1
    }
})