import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Card({urlToImage,title,author,onPress} ) {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={onPress} >
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image style={styles.image} source={urlToImage ? {uri: urlToImage } : null} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} numberOfLines={2}>{title}</Text>
                    <Text style={styles.authorName}>By {author}</Text>
                </View>
            </View>

        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        elevation:2,
        padding:15,
        marginBottom:10,
        overflow:'hidden'

    },
    card: {
        borderRadius: 20,
        backgroundColor: 'white',
        overflow: 'hidden',
        marginBottom: 5,
    },
    image: {
        height: 45 / 100 * windowHeight,
        width: '100%',
        minHeight: 250,
        overflow:'hidden'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        maxWidth: '100%'
    },
    detailsContainer: {

    },
    authorName: {
        marginLeft: 3,
        fontWeight: "bold",
        color: '#808080'
    }
})

export default Card;