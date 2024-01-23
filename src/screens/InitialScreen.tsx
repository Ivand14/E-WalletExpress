import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../constant/colors'

const InitialScreen = () => {
    return (
        <View style={styles.container}>
            <Text>InitialScreen</Text>
        </View>
    )
}

export default InitialScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        width: '100%'
    }
})