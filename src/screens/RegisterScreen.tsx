import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../constant/colors'

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Register-page</Text>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        flex:1
    }
})