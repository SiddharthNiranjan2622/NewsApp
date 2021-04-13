import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function NewsDetails({ route }) {
    const news = route.params
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image style={styles.image} source={{
                    uri: news.urlToImage
                }} />
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.author}>By {news.author}</Text>
                <Text style={styles.descriptions}>{news.description} </Text>

            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    image: {
        height: 50 / 100 * windowHeight,
        width: '100%',
        borderRadius: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    author: {
        fontSize: 17,
        color:"#808080",
        fontWeight:'bold'
    },
    descriptions:{
        fontSize:16
    }
})

export default NewsDetails;