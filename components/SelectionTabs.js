import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SelectionTabs(props) {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Entertainment</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius:20,
        backgroundColor:'#ffa31a',
        overflow:'hidden',
        padding:5
    },
    text:{
        color:'white'
    }
})

export default SelectionTabs;